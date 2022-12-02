import './txsTable.less';
import type { RadioChangeEvent } from 'antd';
import { Button, Col, Radio, Row, Skeleton } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';

import type {
  MarketInfo,
  TradeInfo,
  Transaction,
} from '../../../api-spec/protobuf/gen/js/tdex-daemon/v2/types_pb';
import { useTypedSelector } from '../../../app/store';
import type { Asset } from '../../../domain/asset';
import type { LbtcUnit } from '../../../utils';
import { getAssetDataFromRegistry } from '../../../utils';
import { useListDepositsQuery, useListTradesQuery, useListWithdrawalsQuery } from '../operator.api';

import { AllRows } from './AllRows';
import { DepositRows } from './DepositRows';
import { TradeRows } from './TradeRows';
import { WithdrawalRows } from './WithdrawalRows';

export type TableMode = 'all' | 'trade' | 'deposit' | 'withdraw';

interface ButtonsTableModeProps {
  mode: TableMode;
  setMode: (mode: ButtonsTableModeProps['mode']) => void;
}

interface TxsTableProps {
  marketInfo: MarketInfo;
}

const ButtonsTableMode = ({ mode, setMode }: ButtonsTableModeProps) => {
  const handleTableModeChange = (ev: RadioChangeEvent) => setMode(ev.target.value);
  return (
    <Radio.Group onChange={handleTableModeChange} value={mode} className="ghost radio-group-txs-table">
      <Radio.Button className="radio-btn-txs-table" value="all">
        All
      </Radio.Button>
      <Radio.Button className="radio-btn-txs-table" value="trade">
        Swap
      </Radio.Button>
      <Radio.Button className="radio-btn-txs-table" value="deposit">
        Deposit
      </Radio.Button>
      <Radio.Button className="radio-btn-txs-table" value="withdraw">
        Withdraw
      </Radio.Button>
    </Radio.Group>
  );
};

interface tableRowsProps {
  lbtcUnit: LbtcUnit;
  mode: ButtonsTableModeProps['mode'];
  savedAssets: Asset[];
  marketInfo: MarketInfo;
  trades?: TradeInfo[];
  deposits?: Transaction[];
  numDepositsToShow: number;
  numAllItemsToShow: number;
  withdrawals?: Transaction[];
  baseAsset?: Asset;
  quoteAsset?: Asset;
}

const tableRows = ({
  lbtcUnit,
  mode,
  savedAssets,
  marketInfo,
  trades,
  deposits,
  numDepositsToShow,
  numAllItemsToShow,
  withdrawals,
  baseAsset,
  quoteAsset,
}: tableRowsProps) => {
  switch (mode) {
    case 'all':
      return trades !== undefined && deposits !== undefined && withdrawals !== undefined ? (
        <AllRows
          trades={trades}
          deposits={deposits}
          withdrawals={withdrawals}
          assets={savedAssets}
          marketInfo={marketInfo}
          lbtcUnit={lbtcUnit}
          numItemsToShow={numAllItemsToShow}
          baseAsset={baseAsset}
          quoteAsset={quoteAsset}
        />
      ) : null;
    case 'trade':
      return (
        <TradeRows
          trades={trades}
          assets={savedAssets}
          lbtcUnit={lbtcUnit}
          baseAsset={baseAsset}
          quoteAsset={quoteAsset}
        />
      );
    case 'deposit':
      return (
        <DepositRows
          deposits={deposits}
          marketInfo={marketInfo}
          lbtcUnit={lbtcUnit}
          numItemsToShow={numDepositsToShow}
          baseAsset={baseAsset}
          quoteAsset={quoteAsset}
        />
      );
    case 'withdraw':
      return (
        <WithdrawalRows
          withdrawals={withdrawals}
          marketInfo={marketInfo}
          lbtcUnit={lbtcUnit}
          baseAsset={baseAsset}
          quoteAsset={quoteAsset}
        />
      );
    default:
      return (
        <AllRows
          trades={trades}
          deposits={deposits}
          withdrawals={withdrawals}
          assets={savedAssets}
          marketInfo={marketInfo}
          lbtcUnit={lbtcUnit}
          numItemsToShow={numAllItemsToShow}
          baseAsset={baseAsset}
          quoteAsset={quoteAsset}
        />
      );
  }
};

export const TxsTable = ({ marketInfo }: TxsTableProps): JSX.Element => {
  const [isAllDataLoaded, setIsAllDataLoaded] = useState<boolean>(false);
  const [mode, setMode] = useState<TableMode>('all');
  const { assets: savedAssets, lbtcUnit, network } = useTypedSelector(({ settings }) => settings);
  // Get asset data from registry, including formattedTicker
  const baseAsset = getAssetDataFromRegistry(
    marketInfo?.market?.baseAsset ?? '',
    savedAssets[network],
    lbtcUnit
  );
  const quoteAsset = getAssetDataFromRegistry(
    marketInfo?.market?.quoteAsset ?? '',
    savedAssets[network],
    lbtcUnit
  );
  //
  const PAGE_SIZE_FRONTEND = 5;

  // All
  const [numAllItemsToShow, setNumAllItemsToShow] = useState<number>(PAGE_SIZE_FRONTEND);

  // Trades
  const [pageNumberTrades, setPageNumberTrades] = useState<number>(PAGE_SIZE_FRONTEND);
  const { data: tradesFirstPage } = useListTradesQuery({
    market: {
      baseAsset: marketInfo?.market?.baseAsset || '',
      quoteAsset: marketInfo?.market?.quoteAsset || '',
    },
    page: { number: 0, size: PAGE_SIZE_FRONTEND },
  });
  const { data: tradesNextPage } = useListTradesQuery({
    market: {
      baseAsset: marketInfo?.market?.baseAsset || '',
      quoteAsset: marketInfo?.market?.quoteAsset || '',
    },
    page: { number: pageNumberTrades, size: PAGE_SIZE_FRONTEND },
  });
  const [trades, setTrades] = useState<TradeInfo[] | undefined>([]);
  // Set first page trades when ready
  useEffect(() => {
    setTrades(tradesFirstPage);
  }, [tradesFirstPage]);

  // Withdrawals
  const [pageNumberWithdrawals, setPageNumberWithdrawals] = useState<number>(PAGE_SIZE_FRONTEND);
  const { data: withdrawalsFirstPage } = useListWithdrawalsQuery({
    accountName: marketInfo.accountName,
    page: { number: 1, size: PAGE_SIZE_FRONTEND },
  });
  const { data: withdrawalsNextPage } = useListWithdrawalsQuery({
    accountName: marketInfo.accountName,
    page: { number: pageNumberWithdrawals, size: PAGE_SIZE_FRONTEND },
  });
  const [withdrawals, setWithdrawals] = useState<Transaction[] | undefined>([]);
  // Set first page withdrawals when ready
  useEffect(() => {
    setWithdrawals(withdrawalsFirstPage);
  }, [withdrawalsFirstPage]);

  // Deposits
  const [numDepositsToShow, setNumDepositsToShow] = useState<number>(PAGE_SIZE_FRONTEND);
  const { data: deposits } = useListDepositsQuery({ accountName: marketInfo.accountName });
  useEffect(() => {
    if (trades !== undefined && deposits !== undefined && withdrawals !== undefined) {
      setIsAllDataLoaded(true);
    }
  }, [trades, deposits, withdrawals]);

  const TableRows = useMemo(
    () =>
      tableRows({
        lbtcUnit,
        mode,
        savedAssets: savedAssets[network],
        marketInfo,
        trades,
        deposits,
        numDepositsToShow,
        numAllItemsToShow,
        withdrawals,
        baseAsset,
        quoteAsset,
      }),
    [
      baseAsset,
      deposits,
      lbtcUnit,
      marketInfo,
      mode,
      network,
      numAllItemsToShow,
      numDepositsToShow,
      quoteAsset,
      savedAssets,
      trades,
      withdrawals,
    ]
  );

  return (
    <>
      <div className="panel panel__grey dm-mono">
        {isAllDataLoaded ? (
          <table id="txs-table">
            <thead>
              <tr>
                <th>
                  <ButtonsTableMode mode={mode} setMode={setMode} />
                </th>
                <th>Status</th>
                <th>Total Value</th>
                <th>Base Token Amount</th>
                <th>Quote Token Amount</th>
                <th className="time">Time</th>
                <th />
              </tr>
            </thead>
            <tbody>{TableRows}</tbody>
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
              if (mode === 'deposit') {
                setNumDepositsToShow(numDepositsToShow + PAGE_SIZE_FRONTEND);
              } else if (mode === 'withdraw' && withdrawalsNextPage?.length) {
                setWithdrawals(withdrawals?.concat(withdrawalsNextPage));
                setPageNumberWithdrawals(pageNumberWithdrawals + 1);
              } else if (mode === 'trade' && tradesNextPage?.length) {
                setTrades(trades?.concat(tradesNextPage));
                setPageNumberTrades(pageNumberTrades + 1);
              } else if (mode === 'all') {
                setNumAllItemsToShow(numAllItemsToShow + PAGE_SIZE_FRONTEND);
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
