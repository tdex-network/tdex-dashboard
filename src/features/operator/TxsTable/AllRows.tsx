import { useMemo } from 'react';

import type {
  MarketInfo,
  TradeInfo,
  Transaction,
} from '../../../api-spec/protobuf/gen/js/tdex-daemon/v2/types_pb';
import type { RootState } from '../../../app/store';
import { useTypedSelector } from '../../../app/store';
import type { Asset } from '../../../domain/asset';
import type { LbtcUnit } from '../../../utils';

import { getDepositData } from './DepositRows';
import { getTradeData } from './TradeRows';
import type { TxData } from './TxRow';
import { TxRow } from './TxRow';
import { getWithdrawData } from './WithdrawalRows';

interface AllRowsProps {
  trades?: TradeInfo[];
  deposits?: Transaction[];
  withdrawals?: Transaction[];
  assets: Asset[];
  marketInfo: MarketInfo;
  lbtcUnit: LbtcUnit;
  numItemsToShow: number;
  baseAsset?: Asset;
  quoteAsset?: Asset;
}

export const AllRows = ({
  trades,
  deposits,
  withdrawals,
  assets,
  marketInfo,
  lbtcUnit,
  numItemsToShow,
  baseAsset,
  quoteAsset,
}: AllRowsProps): JSX.Element => {
  const { network } = useTypedSelector(({ settings }: RootState) => settings);
  const all = useMemo(
    () =>
      [
        ...(trades?.map((t) => Object.assign({}, t, { isDeposit: false })) ?? []),
        ...(deposits?.map((d) => Object.assign({}, d, { isDeposit: true })) ?? []),
        ...(withdrawals?.map((w) => Object.assign({}, w, { isDeposit: false })) ?? []),
      ] as TxData[],
    [deposits, trades, withdrawals]
  );

  all.sort((a, b) => {
    const aTime = a?.timestamp ?? a?.requestTimestamp;
    const bTime = b?.timestamp ?? b?.requestTimestamp;
    if (aTime < bTime) return 1;
    if (aTime > bTime) return -1;
    return 0;
  });

  const TableComponent = useMemo(
    () =>
      all?.slice(0, numItemsToShow).map((row, index) => {
        const mode = row?.tradeId ? 'trade' : row?.isDeposit ? 'deposit' : 'withdraw';
        let baseAmountFormatted = '',
          quoteAmountFormatted = '',
          txId = '';

        if (mode === 'deposit') {
          const data = getDepositData(row, lbtcUnit, marketInfo, baseAsset, quoteAsset);
          baseAmountFormatted = data.baseAmountFormatted;
          quoteAmountFormatted = data.quoteAmountFormatted;
          txId = data.txId;
        }

        if (mode === 'withdraw') {
          const data = getWithdrawData(row, lbtcUnit, marketInfo, network);
          baseAmountFormatted = data.baseAmountFormatted;
          quoteAmountFormatted = data.quoteAmountFormatted;
          txId = data.txId;
        }

        if (mode === 'trade') {
          const data = getTradeData(row, lbtcUnit, network, assets);
          baseAmountFormatted = data.baseAmountFormatted;
          quoteAmountFormatted = data.quoteAmountFormatted;
          txId = data.txId;
        }
        return (
          <TxRow
            key={`${txId}_${index}`}
            mode={mode}
            baseAsset={baseAsset}
            quoteAsset={quoteAsset}
            baseAmountFormatted={baseAmountFormatted}
            quoteAmountFormatted={quoteAmountFormatted}
            row={row}
            txId={txId}
          />
        );
      }),
    [all, assets, baseAsset, lbtcUnit, marketInfo, network, numItemsToShow, quoteAsset]
  );

  return <>{TableComponent}</>;
};
