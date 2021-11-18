import './txsTable.less';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import React, { useState } from 'react';

import type { MarketInfo } from '../../../api-spec/generated/js/operator_pb';
import { useListDepositsQuery, useListTradesQuery } from '../operator.api';

import { DepositRows } from './DepositRows';
import type { Trade } from './TradeRows';
import { TradeRows } from './TradeRows';

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

const tableRows = (mode: ButtonsTableModeProps['mode'], trades?: Trade[]) => {
  switch (mode) {
    case 'all':
      return 'bar';
    case 'swap':
      return <TradeRows trades={trades} />;
    case 'deposit':
      return <DepositRows />;
    case 'withdraw':
      return 'bar';
    default:
      return 'all';
  }
};

export const TxsTable = ({ marketInfo }: TxsTableProps): JSX.Element => {
  const [mode, setMode] = useState<'all' | 'swap' | 'deposit' | 'withdraw'>('all');
  // Swaps
  const { data: listTrades } = useListTradesQuery({
    market: {
      baseAsset: marketInfo?.market?.baseAsset || '',
      quoteAsset: marketInfo?.market?.quoteAsset || '',
    },
    page: { pageNumber: 5, pageSize: 5 },
  });
  const trades = listTrades?.map((tradeInfo) => ({
    tradeId: tradeInfo.tradeId,
    status: tradeInfo.status,
    swapInfo: tradeInfo.swapInfo,
  }));
  // Deposits
  const { data: listDeposits } = useListDepositsQuery({
    accountIndex: 5,
    page: { pageNumber: 5, pageSize: 5 },
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
        <tbody>{tableRows(mode, trades)}</tbody>
      </table>
    </div>
  );
};
