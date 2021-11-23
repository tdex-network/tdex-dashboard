import './txsTable.less';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import React, { useState } from 'react';

import type { MarketInfo, Withdrawal, UtxoInfo } from '../../../api-spec/generated/js/operator_pb';
import { useTypedSelector } from '../../../app/store';
import type { Asset } from '../../../domain/asset';
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
      return 'bar';
    case 'swap':
      return <TradeRows trades={trades} savedAssets={savedAssets} />;
    case 'deposit':
      return <DepositRows deposits={deposits} savedAssets={savedAssets} />;
    case 'withdraw':
      return <WithdrawalRows withdrawals={withdrawals} marketInfo={marketInfo} savedAssets={savedAssets} />;
    default:
      return 'all';
  }
};

export const TxsTable = ({ marketInfo }: TxsTableProps): JSX.Element => {
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

  return (
    <div className="panel panel__grey dm-mono">
      <table id="txs-table">
        <thead>
          <tr>
            <th>
              <ButtonsTableMode mode={mode} setMode={setMode} />
            </th>
            <th>Total Value</th>
            <th>Base Token Amount</th>
            <th>Quote Token Amount</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>{tableRows(mode, savedAssets, marketInfo, trades, deposits, withdrawals)}</tbody>
      </table>
    </div>
  );
};
