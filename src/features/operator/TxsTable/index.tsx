import './txsTable.less';
import { Button, Col, Row, Skeleton } from 'antd';
import { groupBy } from 'lodash';
import React, { useEffect, useMemo, useState } from 'react';

import type {
  Deposit,
  MarketInfo,
  TradeInfo,
  Withdrawal,
} from '../../../api-spec/protobuf/gen/js/tdex-daemon/v1/types_pb';
import { useTypedSelector } from '../../../app/store';
import type { Asset } from '../../../domain/asset';
import type { LbtcUnit } from '../../../utils';
import { getAssetDataFromRegistry } from '../../../utils';
import { useListDepositsQuery, useListTradesQuery, useListWithdrawalsQuery } from '../operator.api';

import { AllRows } from './AllRows';
import type { DepositRow } from './DepositRows';
import { DepositRows } from './DepositRows';
import type { ButtonsTableModeProps } from './TableModeSelector';
import { TableModeSelector } from './TableModeSelector';
import { TradeRows } from './TradeRows';
import { WithdrawalRows } from './WithdrawalRows';

export type TableMode = 'all' | 'trade' | 'deposit' | 'withdraw';

interface TxsTableProps {
  marketInfo: MarketInfo;
}

interface tableRowsProps {
  lbtcUnit: LbtcUnit;
  mode: ButtonsTableModeProps['mode'];
  savedAssets: Asset[];
  marketInfo: MarketInfo;
  trades?: TradeInfo[];
  deposits?: DepositRow[];
  numDepositsToShow: number;
  numAllItemsToShow: number;
  withdrawals?: Withdrawal[];
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
  const {
    assets: savedAssets,
    lbtcUnit,
    explorerLiquidUI,
    network,
  } = useTypedSelector(({ settings }) => settings);
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
  const [pageNumberTrades, setPageNumberTrades] = useState<number>(1);
  const { data: trades, isFetching: IsListTradesFetching } = useListTradesQuery({
    market: {
      baseAsset: marketInfo?.market?.baseAsset || '',
      quoteAsset: marketInfo?.market?.quoteAsset || '',
    },
    page: { pageNumber: pageNumberTrades, pageSize: PAGE_SIZE_FRONTEND },
  });
  // Concatenated trades to display
  const [allTrades, setAllTrades] = useState<TradeInfo[] | undefined>([]);
  //
  useEffect(() => {
    setAllTrades(allTrades?.concat(trades || []));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trades]);

  // Withdrawals
  const [pageNumberWithdrawals, setPageNumberWithdrawals] = useState<number>(1);
  const { data: withdrawals, isFetching: IsListWithdrawalsFetching } = useListWithdrawalsQuery({
    accountIndex: marketInfo.accountIndex,
    page: { pageNumber: pageNumberWithdrawals, pageSize: PAGE_SIZE_FRONTEND },
  });
  // Concatenated withdrawals to display
  const [allWithdrawals, setAllWithdrawals] = useState<Withdrawal[] | undefined>([]);
  //
  useEffect(() => {
    setAllWithdrawals(allWithdrawals?.concat(withdrawals || []));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [withdrawals]);

  // Deposits
  const [numDepositsToShow, setNumDepositsToShow] = useState<number>(PAGE_SIZE_FRONTEND);
  // request all because ListDeposits returns fragments
  const { data: depositFragments, isFetching: IsListDepositsFetching } = useListDepositsQuery({
    accountIndex: marketInfo.accountIndex,
  });
  // Recreate deposits from fragments
  // A deposit tx can have 1 or 2 assets/values
  const reduceValue = (deposits: Deposit[], txId: string) => {
    if (!deposits) return {};
    return deposits.reduce((result, currentValue, index) => {
      // First utxo sets assetId
      if (index === 0) {
        return {
          assetId: currentValue.utxo?.asset || '',
          value: currentValue.utxo?.value || 0,
          timestampUnix: currentValue.timestampUnix,
          txId: txId,
          txUrl: `${explorerLiquidUI}/tx/${txId}`,
        };
      }
      // Then we check if utxo.asset === assetId or new
      const isSecondAsset = currentValue.utxo?.asset !== result?.assetId;
      if (isSecondAsset) {
        return {
          assetId: result.assetId,
          assetIdSecond: currentValue.utxo?.asset || '',
          value: result.value,
          valueSecond: (result?.valueSecond ?? 0) + (currentValue.utxo?.value || 0),
          timestampUnix: currentValue.timestampUnix,
          txId: txId,
          txUrl: `${explorerLiquidUI}/tx/${txId}`,
        };
      } else {
        return {
          assetId: currentValue.utxo?.asset || '',
          assetIdSecond: result.assetIdSecond,
          value: (result?.value ?? 0) + (currentValue.utxo?.value || 0),
          valueSecond: result.valueSecond,
          timestampUnix: currentValue.timestampUnix,
          txId: txId,
          txUrl: `${explorerLiquidUI}/tx/${txId}`,
        };
      }
    }, {} as { assetId: string; assetIdSecond?: string; value: number; valueSecond?: number; timestampUnix: number; txId: string });
  };
  const depositsByTxId = groupBy(depositFragments || [], (deposit) => deposit.utxo?.outpoint?.hash);
  const deposits = Object.entries(depositsByTxId).map(([txId, arr]) => reduceValue(arr, txId) as DepositRow);

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
        trades: allTrades,
        deposits,
        numDepositsToShow,
        numAllItemsToShow,
        withdrawals: allWithdrawals,
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
      allTrades,
      allWithdrawals,
    ]
  );

  return (
    <>
      <div className="panel panel__grey dm-mono">
        {isAllDataLoaded ? (
          <div className="txs-table-wrapper scrollbar">
            <table id="txs-table">
              <thead>
                <tr>
                  <th>
                    <TableModeSelector mode={mode} setMode={setMode} />
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
          </div>
        ) : (
          <Skeleton active paragraph={{ rows: 5 }} />
        )}
      </div>
      <Row className="mt-2">
        <Col className="dm-sans dm-sans__bold text-center" span={24}>
          <Button
            type="link"
            loading={IsListTradesFetching || IsListDepositsFetching || IsListWithdrawalsFetching}
            onClick={() => {
              if (mode === 'deposit') {
                setNumDepositsToShow(numDepositsToShow + PAGE_SIZE_FRONTEND);
              } else if (mode === 'withdraw' && withdrawals?.length) {
                setPageNumberWithdrawals(pageNumberWithdrawals + 1);
              } else if (mode === 'trade' && trades?.length) {
                setPageNumberTrades(pageNumberTrades + 1);
              } else if (mode === 'all') {
                setNumDepositsToShow(numDepositsToShow + PAGE_SIZE_FRONTEND);
                setPageNumberWithdrawals(pageNumberWithdrawals + 1);
                setPageNumberTrades(pageNumberTrades + 1);
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
