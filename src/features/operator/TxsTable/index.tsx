import './txsTable.less';
import type { RadioChangeEvent } from 'antd';
import { Button, Col, Radio, Row, Skeleton } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';

import type { MarketInfo, Withdrawal, Deposit, TradeInfo } from '../../../api-spec/generated/js/operator_pb';
import { useTypedSelector } from '../../../app/store';
import type { Asset } from '../../../domain/asset';
import type { LbtcUnit } from '../../../utils';
import { sleep } from '../../../utils';
import { useListDepositsQuery, useListTradesQuery, useListWithdrawalsQuery } from '../operator.api';

import { DepositRows } from './DepositRows';
import { TradeRows } from './TradeRows';
import { WithdrawalRows } from './WithdrawalRows';

type Mode = 'all' | 'trade' | 'deposit' | 'withdraw';

interface ButtonsTableModeProps {
  mode: Mode;
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
    case 'trade':
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
  const [mode, setMode] = useState<Mode>('all');
  const { assets: savedAssets, lbtcUnit } = useTypedSelector(({ settings }) => settings);
  const PAGE_SIZE_FRONTEND = 2;

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
  const { data: deposits } = useListDepositsQuery({ accountIndex: marketInfo.accountIndex });

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
              if (mode === 'deposit') {
                setNumDepositsToShow(numDepositsToShow + PAGE_SIZE_FRONTEND);
              } else if (mode === 'withdraw' && withdrawalsNextPage?.length) {
                setWithdrawals(withdrawals?.concat(withdrawalsNextPage));
                setPageNumberWithdrawals(pageNumberWithdrawals + 1);
              } else if (mode === 'trade' && tradesNextPage?.length) {
                setTrades(trades?.concat(tradesNextPage));
                setPageNumberTrades(pageNumberTrades + 1);
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
