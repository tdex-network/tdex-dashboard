import './txsTable.less';
import type { RadioChangeEvent } from 'antd';
import { Radio, Skeleton } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';

import type { MarketInfo, Withdrawal, UtxoInfo } from '../../../api-spec/generated/js/operator_pb';
import { useTypedSelector } from '../../../app/store';
import type { Asset } from '../../../domain/asset';
import { sleep } from '../../../utils';
import { useListDepositsQuery, useListTradesQuery, useListWithdrawalsQuery } from '../operator.api';

import { DepositRows } from './DepositRows';
import type { Trade } from './TradeRows';
import { TradeRows } from './TradeRows';
import { WithdrawalRows } from './WithdrawalRows';

interface ButtonsTableModeProps {
  mode: 'all' | 'swap' | 'deposit' | 'withdraw';
  setMode: (mode: ButtonsTableModeProps['mode']) => void;
}

interface TxsTableProps {
  marketInfo: MarketInfo.AsObject;
}

const ButtonsTableMode = ({ mode, setMode }: ButtonsTableModeProps) => {
  const handleTableModeChange = (ev: RadioChangeEvent) => setMode(ev.target.value);
  return (
    <Radio.Group onChange={handleTableModeChange} value={mode} className="ghost">
      <Radio.Button value="all">All</Radio.Button>
      <Radio.Button value="swap">Swap</Radio.Button>
      <Radio.Button value="deposit">Deposit</Radio.Button>
      <Radio.Button value="withdraw">Withdraw</Radio.Button>
    </Radio.Group>
  );
};

const tableRows = (
  mode: ButtonsTableModeProps['mode'],
  savedAssets: Asset[],
  marketInfo: MarketInfo.AsObject,
  trades: Trade[],
  deposits?: UtxoInfo.AsObject[],
  withdrawals?: Withdrawal.AsObject[]
) => {
  switch (mode) {
    case 'all':
      return (
        <>
          <TradeRows trades={trades} savedAssets={savedAssets} />
          <DepositRows deposits={deposits} savedAssets={savedAssets} />
          <WithdrawalRows withdrawals={withdrawals} marketInfo={marketInfo} savedAssets={savedAssets} />
        </>
      );
    case 'swap':
      return <TradeRows trades={trades} savedAssets={savedAssets} />;
    case 'deposit':
      return <DepositRows deposits={deposits} savedAssets={savedAssets} />;
    case 'withdraw':
      return <WithdrawalRows withdrawals={withdrawals} marketInfo={marketInfo} savedAssets={savedAssets} />;
    default:
      return (
        <>
          <TradeRows trades={trades} savedAssets={savedAssets} />
          <DepositRows deposits={deposits} savedAssets={savedAssets} />
          <WithdrawalRows withdrawals={withdrawals} marketInfo={marketInfo} savedAssets={savedAssets} />
        </>
      );
  }
};

export const TxsTable = ({ marketInfo }: TxsTableProps): JSX.Element => {
  const [isAllDataLoaded, setIsAllDataLoaded] = useState<boolean>(false);
  const [mode, setMode] = useState<'all' | 'swap' | 'deposit' | 'withdraw'>('all');
  const savedAssets = useTypedSelector(({ settings }) => settings.assets);
  // Swaps
  const { data: listTrades } = useListTradesQuery({
    market: {
      baseAsset: marketInfo?.market?.baseAsset || '',
      quoteAsset: marketInfo?.market?.quoteAsset || '',
    },
    page: { pageNumber: 0, pageSize: 100 },
  });
  const trades =
    listTrades?.map((tradeInfo) => ({
      tradeId: tradeInfo.tradeId,
      status: tradeInfo.status,
      swapInfo: tradeInfo.swapInfo,
      settleTimeUnix: tradeInfo.settleTimeUnix,
    })) || [];
  // Deposits
  const { data: deposits } = useListDepositsQuery({
    accountIndex: marketInfo.accountIndex,
    page: { pageNumber: 0, pageSize: 100 },
  });
  // Withdrawals
  const { data: withdrawals } = useListWithdrawalsQuery({
    accountIndex: marketInfo.accountIndex,
    page: { pageNumber: 0, pageSize: 100 },
  });

  const headerRow = useCallback(
    (node) => {
      if (node !== null && isAllDataLoaded && mode) {
        Array.from<HTMLElement>(node.getElementsByClassName('time')).forEach(async (thTime) => {
          // Need to wait a bit for the cells to get data
          await sleep(100);
          const rowsArray = Array.from(thTime!.closest('table')!.querySelectorAll<HTMLElement>('tbody tr'));
          const timeColIndex = Array.from(thTime!.parentNode!.children).indexOf(thTime);
          rowsArray.sort((a, b) => {
            const aBlockTime = Number(
              (a.children[timeColIndex] as HTMLElement)?.dataset.time ?? (a as HTMLElement)?.dataset.time ?? 0
            );
            const bBlockTime = Number(
              (b.children[timeColIndex] as HTMLElement)?.dataset.time ?? (b as HTMLElement)?.dataset.time ?? 0
            );
            console.log('aBlockTime', aBlockTime);
            console.log('bBlockTime', bBlockTime);
            return bBlockTime - aBlockTime;
          });
          rowsArray.forEach((elem) => {
            thTime.closest('table')!.querySelector('tbody')!.appendChild(elem);
          });
          //
        });
      }
    },
    // Order table when all data is loaded and when mode change
    [isAllDataLoaded, mode]
  );

  useEffect(() => {
    if (listTrades !== undefined && deposits !== undefined && withdrawals !== undefined) {
      setIsAllDataLoaded(true);
    }
  }, [listTrades, deposits, withdrawals]);

  return (
    <div className="panel panel__grey dm-mono">
      {isAllDataLoaded ? (
        <table id="txs-table">
          <thead>
            <tr ref={headerRow}>
              <th>
                <ButtonsTableMode mode={mode} setMode={setMode} />
              </th>
              <th>Total Value</th>
              <th>Base Token Amount</th>
              <th>Quote Token Amount</th>
              <th className="time">Time</th>
              <th />
            </tr>
          </thead>
          <tbody>{tableRows(mode, savedAssets, marketInfo, trades, deposits, withdrawals)}</tbody>
        </table>
      ) : (
        <Skeleton active paragraph={{ rows: 5 }} />
      )}
    </div>
  );
};
