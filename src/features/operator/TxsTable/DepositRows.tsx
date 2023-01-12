import type { MarketInfo, Transaction } from '../../../api-spec/protobuf/gen/js/tdex-daemon/v2/types_pb';
import type { Asset } from '../../../domain/asset';
import type { LbtcUnit } from '../../../utils';
import { fromSatsToUnitOrFractional, isLbtcTicker } from '../../../utils';

import type { TxData } from './TxRow';
import { TxRow } from './TxRow';

export const getDepositData = (
  row: Transaction,
  lbtcUnit: LbtcUnit,
  marketInfo: MarketInfo,
  baseAsset?: Asset,
  quoteAsset?: Asset
): { baseAmountFormatted: string; quoteAmountFormatted: string; txId: string } => {
  let baseAmount, quoteAmount;
  const totalAmountPerAssetArray = Object.entries(row?.totalAmountPerAsset);
  if (totalAmountPerAssetArray.length > 1) {
    // 2 assets has been deposited
    baseAmount =
      totalAmountPerAssetArray[0][0] === marketInfo.market?.baseAsset
        ? totalAmountPerAssetArray[0][1]
        : totalAmountPerAssetArray[1][1];
    quoteAmount =
      totalAmountPerAssetArray[0][0] === marketInfo.market?.quoteAsset
        ? totalAmountPerAssetArray[0][1]
        : totalAmountPerAssetArray[1][1];
  } else {
    // 1 asset has been deposited
    baseAmount =
      totalAmountPerAssetArray[0][0] === marketInfo.market?.baseAsset ? totalAmountPerAssetArray[0][1] : 0;
    quoteAmount =
      totalAmountPerAssetArray[0][0] === marketInfo.market?.quoteAsset ? totalAmountPerAssetArray[0][1] : 0;
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
  const txId = row.txid;
  return { baseAmountFormatted, quoteAmountFormatted, txId };
};

interface DepositRowsProps {
  deposits?: Transaction[];
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
