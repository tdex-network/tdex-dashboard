import type { TradeInfo, MarketInfo } from '../../../api-spec/generated/js/operator_pb';
import type { Asset } from '../../../domain/asset';
import type { LbtcUnit } from '../../../utils';
import { formatSatsToUnit } from '../../../utils';

import type { TxData } from './TxRow';
import { TxRow } from './TxRow';
import { getTickersFormatted } from './index';

interface TradeRowsProps {
  trades?: TradeInfo.AsObject[];
  savedAssets: Asset[];
  marketInfo: MarketInfo.AsObject;
  lbtcUnit: LbtcUnit;
}

export const getTradeData = (
  row: TradeInfo.AsObject,
  lbtcUnit: LbtcUnit
): { baseAmountFormatted: string; quoteAmountFormatted: string; txId: string } => {
  const baseAmountFormatted =
    row.swapInfo?.amountR === undefined
      ? 'N/A'
      : formatSatsToUnit(row.swapInfo?.amountP, lbtcUnit, row.swapInfo?.assetP);
  const quoteAmountFormatted =
    row.swapInfo?.amountR === undefined
      ? 'N/A'
      : formatSatsToUnit(row.swapInfo?.amountR, lbtcUnit, row.swapInfo?.assetR);
  const txId = row.txUrl.substring(row.txUrl.lastIndexOf('/') + 1, row.txUrl.indexOf('#'));
  return { baseAmountFormatted, quoteAmountFormatted, txId };
};

export const TradeRows = ({ trades, savedAssets, marketInfo, lbtcUnit }: TradeRowsProps): JSX.Element => {
  return (
    <>
      {trades?.map((row) => {
        const data = getTradeData(row, lbtcUnit);
        const tickers = getTickersFormatted(marketInfo, savedAssets, lbtcUnit);

        return (
          <TxRow
            key={data.txId}
            mode="trade"
            baseAssetTickerFormatted={tickers.baseAssetTickerFormatted}
            quoteAssetTickerFormatted={tickers.quoteAssetTickerFormatted}
            baseAmountFormatted={data.baseAmountFormatted}
            quoteAmountFormatted={data.quoteAmountFormatted}
            row={row as TxData}
            txId={data.txId}
          />
        );
      })}
    </>
  );
};
