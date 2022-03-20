import type { NetworkString } from 'ldk';
import { useMemo } from 'react';

import type { MarketInfo, TradeInfo, Withdrawal } from '../../../api-spec/generated/js/operator_pb';
import type { RootState } from '../../../app/store';
import { useTypedSelector } from '../../../app/store';
import type { Asset } from '../../../domain/asset';
import type { LbtcUnit } from '../../../utils';

import type { DepositRow } from './DepositRows';
import { getDepositData } from './DepositRows';
import { getTradeData } from './TradeRows';
import type { TxData } from './TxRow';
import { TxRow } from './TxRow';
import { getWithdrawData } from './WithdrawalRows';

interface AllRowsProps {
  trades?: TradeInfo.AsObject[];
  deposits?: DepositRow[];
  withdrawals?: Withdrawal.AsObject[];
  savedAssets: Record<NetworkString, Asset[]>;
  marketInfo: MarketInfo.AsObject;
  lbtcUnit: LbtcUnit;
  numItemsToShow: number;
}

export const AllRows = ({
  trades,
  deposits,
  withdrawals,
  savedAssets,
  marketInfo,
  lbtcUnit,
  numItemsToShow,
}: AllRowsProps): JSX.Element => {
  const { network } = useTypedSelector(({ settings }: RootState) => settings);
  const all = useMemo(
    () => [...(trades ?? []), ...(deposits ?? []), ...(withdrawals ?? [])] as TxData[],
    [deposits, trades, withdrawals]
  );

  all.sort((a, b) => {
    const aTime = a?.timestampUnix ?? a?.requestTimeUnix;
    const bTime = b?.timestampUnix ?? b?.requestTimeUnix;
    if (aTime < bTime) return 1;
    if (aTime > bTime) return -1;
    return 0;
  });
  const baseAsset = savedAssets[network].find((a: Asset) => a.asset_id === marketInfo.market?.baseAsset);
  const quoteAsset = savedAssets[network].find((a: Asset) => a.asset_id === marketInfo.market?.quoteAsset);

  const TableComponent = useMemo(
    () =>
      all?.slice(0, numItemsToShow).map((row, index) => {
        const mode = row?.tradeId ? 'trade' : row?.assetId ? 'deposit' : 'withdraw';
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
          const data = getWithdrawData(row, lbtcUnit, marketInfo, baseAsset, quoteAsset);
          baseAmountFormatted = data.baseAmountFormatted;
          quoteAmountFormatted = data.quoteAmountFormatted;
          txId = data.txId;
        }

        if (mode === 'trade') {
          const data = getTradeData(row, lbtcUnit, network, savedAssets[network]);
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
    [all, baseAsset, lbtcUnit, marketInfo, network, numItemsToShow, quoteAsset, savedAssets]
  );

  return <>{TableComponent}</>;
};
