import './txsTable.less';
import type { RadioChangeEvent } from 'antd';
import { Button, Col, Radio, Row, Skeleton } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';

import type { MarketInfo, Withdrawal, Deposit } from '../../../api-spec/generated/js/operator_pb';
import { useTypedSelector } from '../../../app/store';
import type { Asset } from '../../../domain/asset';
import type { LbtcUnit } from '../../../utils';
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

interface tableRowsProps {
  lbtcUnit: LbtcUnit;
  mode: ButtonsTableModeProps['mode'];
  savedAssets: Asset[];
  marketInfo: MarketInfo.AsObject;
  trades: Trade[];
  deposits?: Deposit.AsObject[];
  numDepositsToShow: number;
  withdrawals?: Withdrawal.AsObject[];
}
const tableRows = ({
  lbtcUnit,
  mode,
  savedAssets,
  marketInfo,
  trades,
  deposits,
  numDepositsToShow,
  withdrawals,
}: tableRowsProps) => {
  switch (mode) {
    case 'all':
      return (
        <>
          <TradeRows trades={trades} savedAssets={savedAssets} lbtcUnit={lbtcUnit} />
          <DepositRows
            deposits={deposits}
            marketInfo={marketInfo}
            savedAssets={savedAssets}
            lbtcUnit={lbtcUnit}
            numItemsToShow={numDepositsToShow}
          />
          <WithdrawalRows
            withdrawals={withdrawals}
            marketInfo={marketInfo}
            savedAssets={savedAssets}
            lbtcUnit={lbtcUnit}
          />
        </>
      );
    case 'swap':
      return <TradeRows trades={trades} savedAssets={savedAssets} lbtcUnit={lbtcUnit} />;
    case 'deposit':
      return (
        <DepositRows
          deposits={deposits}
          marketInfo={marketInfo}
          savedAssets={savedAssets}
          lbtcUnit={lbtcUnit}
          numItemsToShow={numDepositsToShow}
        />
      );
    case 'withdraw':
      return (
        <WithdrawalRows
          withdrawals={withdrawals}
          marketInfo={marketInfo}
          savedAssets={savedAssets}
          lbtcUnit={lbtcUnit}
        />
      );
    default:
      return (
        <>
          <TradeRows trades={trades} savedAssets={savedAssets} lbtcUnit={lbtcUnit} />
          <DepositRows
            deposits={deposits}
            marketInfo={marketInfo}
            savedAssets={savedAssets}
            lbtcUnit={lbtcUnit}
            numItemsToShow={numDepositsToShow}
          />
          <WithdrawalRows
            withdrawals={withdrawals}
            marketInfo={marketInfo}
            savedAssets={savedAssets}
            lbtcUnit={lbtcUnit}
          />
        </>
      );
  }
};

export const TxsTable = ({ marketInfo }: TxsTableProps): JSX.Element => {
  const [isAllDataLoaded, setIsAllDataLoaded] = useState<boolean>(false);
  const DEPOSITS_PAGE_SIZE_FRONT = 2;
  const [numDepositsToShow, setNumDepositsToShow] = useState<number>(DEPOSITS_PAGE_SIZE_FRONT);
  const [mode, setMode] = useState<'all' | 'swap' | 'deposit' | 'withdraw'>('all');
  const { assets: savedAssets, lbtcUnit } = useTypedSelector(({ settings }) => settings);
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
      txUrl: tradeInfo.txUrl,
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
    page: { pageNumber: 0, pageSize: 10 },
  });
  const { data: withdrawalsNext } = useListWithdrawalsQuery({
    accountIndex: marketInfo.accountIndex,
    page: { pageNumber: 1, pageSize: 10 },
  });

  const headerRow = useCallback(
    (node) => {
      if (node !== null && isAllDataLoaded && mode) {
        Array.from<HTMLElement>(node.getElementsByClassName('time')).forEach(async (thTime) => {
          // Need to wait a bit for the cells to get data
          await sleep(200);
          const rowsArray = Array.from(thTime!.closest('table')!.querySelectorAll<HTMLElement>('tbody tr'));
          const timeColIndex = Array.from(thTime!.parentNode!.children).indexOf(thTime);
          rowsArray.sort((a, b) => {
            const aBlockTime = Number(
              (a.children[timeColIndex] as HTMLElement)?.dataset.time ?? (a as HTMLElement)?.dataset.time ?? 0
            );
            const bBlockTime = Number(
              (b.children[timeColIndex] as HTMLElement)?.dataset.time ?? (b as HTMLElement)?.dataset.time ?? 0
            );
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
    <>
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
            <tbody>
              {tableRows({
                lbtcUnit,
                mode,
                savedAssets,
                marketInfo,
                trades,
                deposits,
                numDepositsToShow,
                withdrawals,
              })}
            </tbody>
          </table>
        ) : (
          <Skeleton active paragraph={{ rows: 5 }} />
        )}
      </div>
      <Row className="mt-2">
        <Col className="dm-sans dm-sans__bold text-center" span={24}>
          <Button
            type="link"
            onClick={() => {
              console.log('mode', mode);
              if (mode === 'deposit') {
                setNumDepositsToShow(numDepositsToShow + DEPOSITS_PAGE_SIZE_FRONT);
              } else if (mode === 'withdraw') {
                //
              }
            }}
          >
            SHOW MORE
          </Button>
        </Col>
      </Row>
    </>
  );
};
