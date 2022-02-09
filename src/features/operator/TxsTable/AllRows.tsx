import type { MarketInfo, TradeInfo, Withdrawal } from '../../../api-spec/generated/js/operator_pb';
import type { RootState } from '../../../app/store';
import { useTypedSelector } from '../../../app/store';
import type { Asset } from '../../../domain/asset';
import type { LbtcUnit } from '../../../utils';
import { assetIdToTicker, isLbtcTicker } from '../../../utils';

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
  savedAssets: Asset[];
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
  const all = [...(trades ?? []), ...(deposits ?? []), ...(withdrawals ?? [])] as TxData[];
  all.sort((a, b) => {
    const aTime = a?.timestampUnix ?? a?.settleTimeUnix;
    const bTime = b?.timestampUnix ?? b?.settleTimeUnix;
    if (aTime < bTime) return 1;
    if (aTime > bTime) return -1;
    return 0;
  });

  return (
    <>
      {all?.slice(0, numItemsToShow).map((row) => {
        const mode = row?.tradeId ? 'trade' : row?.assetId ? 'deposit' : 'withdraw';
        let baseAmountFormatted = '',
          quoteAmountFormatted = '',
          baseAssetTickerFormatted = '',
          quoteAssetTickerFormatted = '',
          txId = '';

        const baseAssetTicker = assetIdToTicker(marketInfo.market?.baseAsset || '', savedAssets);
        const quoteAssetTicker = assetIdToTicker(marketInfo.market?.quoteAsset || '', savedAssets);
        baseAssetTickerFormatted = isLbtcTicker(baseAssetTicker) ? lbtcUnit : baseAssetTicker;
        quoteAssetTickerFormatted = isLbtcTicker(quoteAssetTicker) ? lbtcUnit : quoteAssetTicker;

        if (mode === 'deposit') {
          const data = getDepositData(row, lbtcUnit, marketInfo, network);
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
          const data = getTradeData(row, lbtcUnit, network);
          baseAmountFormatted = data.baseAmountFormatted;
          quoteAmountFormatted = data.quoteAmountFormatted;
          txId = data.txId;
        }

        return (
          <TxRow
            key={txId}
            mode={mode}
            baseAssetTickerFormatted={baseAssetTickerFormatted}
            quoteAssetTickerFormatted={quoteAssetTickerFormatted}
            baseAmountFormatted={baseAmountFormatted}
            quoteAmountFormatted={quoteAmountFormatted}
            row={row}
            txId={txId}
          />
        );
      })}
    </>
  );
};
