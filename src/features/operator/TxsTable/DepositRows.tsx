import type { MarketInfo } from '../../../api-spec/protobuf/gen/js/tdex-daemon/v1/types_pb';
import type { Asset } from '../../../domain/asset';
import type { LbtcUnit } from '../../../utils';
import { fromSatsToUnitOrFractional, isLbtcTicker } from '../../../utils';

import type { TxData } from './TxRow';
import { TxRow } from './TxRow';

export interface DepositRow {
  assetId: string;
  assetIdSecond?: string;
  value: number;
  valueSecond?: number;
  timestampUnix: number;
  txId: string;
  txUrl: string;
}

export const getDepositData = (
  row: DepositRow,
  lbtcUnit: LbtcUnit,
  marketInfo: MarketInfo,
  baseAsset?: Asset,
  quoteAsset?: Asset
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
    baseAmount === undefined || !marketInfo.market?.baseAsset
      ? 'N/A'
      : fromSatsToUnitOrFractional(
          Number(baseAmount),
          baseAsset?.precision,
          isLbtcTicker(baseAsset?.ticker),
          lbtcUnit
        );
  const quoteAmountFormatted =
    quoteAmount === undefined || !marketInfo.market?.quoteAsset
      ? 'N/A'
      : fromSatsToUnitOrFractional(
          Number(quoteAmount),
          quoteAsset?.precision,
          isLbtcTicker(quoteAsset?.ticker),
          lbtcUnit
        );
  const txId = row.txId;
  return { baseAmountFormatted, quoteAmountFormatted, txId };
};

interface DepositRowsProps {
  deposits?: DepositRow[];
  lbtcUnit: LbtcUnit;
  marketInfo: MarketInfo;
  numItemsToShow: number;
  baseAsset?: Asset;
  quoteAsset?: Asset;
}

export const DepositRows = ({
  deposits,
  lbtcUnit,
  marketInfo,
  numItemsToShow,
  baseAsset,
  quoteAsset,
}: DepositRowsProps): JSX.Element => {
  return (
    <>
      {deposits?.slice(0, numItemsToShow).map((row) => {
        const data = getDepositData(row, lbtcUnit, marketInfo, baseAsset, quoteAsset);
        return (
          <TxRow
            key={data.txId}
            mode="deposit"
            baseAmountFormatted={data.baseAmountFormatted}
            quoteAmountFormatted={data.quoteAmountFormatted}
            row={row as TxData}
            txId={data.txId}
            baseAsset={baseAsset}
            quoteAsset={quoteAsset}
          />
        );
      })}
    </>
  );
};
