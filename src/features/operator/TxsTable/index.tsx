import './txsTable.less';
import type { RadioChangeEvent } from 'antd';
import { Button, Col, Radio, Row, Skeleton } from 'antd';
import { groupBy } from 'lodash';
import React, { useEffect, useState } from 'react';

import type { Deposit, MarketInfo, TradeInfo, Withdrawal } from '../../../api-spec/generated/js/operator_pb';
import { useTypedSelector } from '../../../app/store';
import type { Asset } from '../../../domain/asset';
import type { LbtcUnit } from '../../../utils';
import { assetIdToTicker, isLbtcTicker } from '../../../utils';
import { useListDepositsQuery, useListTradesQuery, useListWithdrawalsQuery } from '../operator.api';

import { AllRows } from './AllRows';
import type { DepositRow } from './DepositRows';
import { DepositRows } from './DepositRows';
import { TradeRows } from './TradeRows';
import { WithdrawalRows } from './WithdrawalRows';

export type TableMode = 'all' | 'trade' | 'deposit' | 'withdraw';

interface ButtonsTableModeProps {
  mode: TableMode;
  setMode: (mode: ButtonsTableModeProps['mode']) => void;
}

interface TxsTableProps {
  marketInfo: MarketInfo.AsObject;
}

export const getTickersFormatted = (
  marketInfo: MarketInfo.AsObject,
  savedAssets: Asset[],
  lbtcUnit: LbtcUnit
): { baseAssetTickerFormatted: string; quoteAssetTickerFormatted: string } => {
  const baseAssetTicker = assetIdToTicker(marketInfo.market?.baseAsset || '', savedAssets);
  const quoteAssetTicker = assetIdToTicker(marketInfo.market?.quoteAsset || '', savedAssets);
  const baseAssetTickerFormatted = isLbtcTicker(baseAssetTicker) ? lbtcUnit : baseAssetTicker;
  const quoteAssetTickerFormatted = isLbtcTicker(quoteAssetTicker) ? lbtcUnit : quoteAssetTicker;
  return { baseAssetTickerFormatted, quoteAssetTickerFormatted };
};

const ButtonsTableMode = ({ mode, setMode }: ButtonsTableModeProps) => {
  const handleTableModeChange = (ev: RadioChangeEvent) => setMode(ev.target.value);
  return (
    <Radio.Group onChange={handleTableModeChange} value={mode} className="ghost">
      <Radio.Button value="all">All</Radio.Button>
      <Radio.Button value="trade">Swap</Radio.Button>
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
  trades?: TradeInfo.AsObject[];
  deposits?: DepositRow[];
  numDepositsToShow: number;
  numAllItemsToShow: number;
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
  numAllItemsToShow,
  withdrawals,
}: tableRowsProps) => {
  switch (mode) {
    case 'all':
      return (
        <AllRows
          trades={trades}
          deposits={deposits}
          withdrawals={withdrawals}
          savedAssets={savedAssets}
          marketInfo={marketInfo}
          lbtcUnit={lbtcUnit}
          numItemsToShow={numAllItemsToShow}
        />
      );
    case 'trade':
      return (
        <TradeRows trades={trades} savedAssets={savedAssets} marketInfo={marketInfo} lbtcUnit={lbtcUnit} />
      );
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
        <AllRows
          trades={trades}
          deposits={deposits}
          withdrawals={withdrawals}
          savedAssets={savedAssets}
          marketInfo={marketInfo}
          lbtcUnit={lbtcUnit}
          numItemsToShow={numAllItemsToShow}
        />
      );
  }
};

export const TxsTable = ({ marketInfo }: TxsTableProps): JSX.Element => {
  const [isAllDataLoaded, setIsAllDataLoaded] = useState<boolean>(false);
  const [mode, setMode] = useState<TableMode>('all');
  const { assets: savedAssets, lbtcUnit, explorerLiquidUI } = useTypedSelector(({ settings }) => settings);
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
    page: { pageNumber: 0, pageSize: PAGE_SIZE_FRONTEND },
  });
  const { data: tradesNextPage } = useListTradesQuery({
    market: {
      baseAsset: marketInfo?.market?.baseAsset || '',
      quoteAsset: marketInfo?.market?.quoteAsset || '',
    },
    page: { pageNumber: pageNumberTrades, pageSize: PAGE_SIZE_FRONTEND },
  });
  const [trades, setTrades] = useState<TradeInfo.AsObject[] | undefined>([]);
  // Set first page trades when ready
  useEffect(() => {
    setTrades(tradesFirstPage);
  }, [tradesFirstPage]);

  // Withdrawals
  const [pageNumberWithdrawals, setPageNumberWithdrawals] = useState<number>(PAGE_SIZE_FRONTEND);
  const { data: withdrawalsFirstPage } = useListWithdrawalsQuery({
    accountIndex: marketInfo.accountIndex,
    page: { pageNumber: 1, pageSize: PAGE_SIZE_FRONTEND },
  });
  const { data: withdrawalsNextPage } = useListWithdrawalsQuery({
    accountIndex: marketInfo.accountIndex,
    page: { pageNumber: pageNumberWithdrawals, pageSize: PAGE_SIZE_FRONTEND },
  });
  const [withdrawals, setWithdrawals] = useState<Withdrawal.AsObject[] | undefined>([]);
  // Set first page withdrawals when ready
  useEffect(() => {
    setWithdrawals(withdrawalsFirstPage);
  }, [withdrawalsFirstPage]);

  // Deposits
  const [numDepositsToShow, setNumDepositsToShow] = useState<number>(PAGE_SIZE_FRONTEND);
  // request all because ListDeposits returns fragments
  const { data: depositFragments } = useListDepositsQuery({ accountIndex: marketInfo.accountIndex });
  // Recreate deposits from fragments
  // A deposit tx can have 1 or 2 assets/values
  const reduceValue = (deposits: Deposit.AsObject[], txId: string) => {
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
                numAllItemsToShow,
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
