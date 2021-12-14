import type { MarketInfo } from '../../../api-spec/generated/js/operator_pb';
import type { Asset } from '../../../domain/asset';
import type { LbtcUnit } from '../../../utils';
import { formatSatsToUnit } from '../../../utils';

import type { TxData } from './TxRow';
import { TxRow } from './TxRow';
import { getTickersFormatted } from './index';

export interface DepositRow {
  assetId: string;
  assetIdSecond?: string;
  value: number;
  valueSecond?: number;
  timestampUnix: number;
  txId: string;
}

export const getDepositData = (
  row: DepositRow,
  lbtcUnit: LbtcUnit,
  marketInfo: MarketInfo.AsObject
): { baseAmountFormatted: string; quoteAmountFormatted: string; txId: string } => {
  let baseAmount, quoteAmount;
  if (row?.assetIdSecond && row?.valueSecond) {
    // 2 assets has been deposited
    baseAmount = row.assetId === marketInfo.market?.baseAsset ? row.value : row.valueSecond;
    quoteAmount = row.assetId === marketInfo.market?.quoteAsset ? row.value : row.valueSecond;
  } else {
    // 1 asset has been deposited
    baseAmount = row.assetId === marketInfo.market?.baseAsset ? row.value : 0;
    quoteAmount = row.assetId === marketInfo.market?.quoteAsset ? row.value : 0;
  }
  const baseAmountFormatted =
    baseAmount !== undefined
      ? formatSatsToUnit(Number(baseAmount), lbtcUnit, marketInfo.market?.baseAsset)
      : 'N/A';
  const quoteAmountFormatted =
    quoteAmount !== undefined
      ? formatSatsToUnit(Number(quoteAmount), lbtcUnit, marketInfo.market?.quoteAsset)
      : 'N/A';
  const txId = row.txId;
  return { baseAmountFormatted, quoteAmountFormatted, txId };
};

interface DepositRowsProps {
  deposits?: DepositRow[];
  lbtcUnit: LbtcUnit;
  marketInfo: MarketInfo.AsObject;
  savedAssets: Asset[];
  numItemsToShow: number;
}

export const DepositRows = ({
  deposits,
  lbtcUnit,
  marketInfo,
  savedAssets,
  numItemsToShow,
}: DepositRowsProps): JSX.Element => {
  return (
    <>
      {deposits?.slice(0, numItemsToShow).map((row) => {
        const data = getDepositData(row, lbtcUnit, marketInfo);
        const tickers = getTickersFormatted(marketInfo, savedAssets, lbtcUnit);
        return (
          <TxRow
            key={data.txId}
            mode="deposit"
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
