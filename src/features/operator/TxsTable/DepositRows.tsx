import type { NetworkString } from 'ldk';

import type { MarketInfo } from '../../../api-spec/generated/js/operator_pb';
import type { RootState } from '../../../app/store';
import { useTypedSelector } from '../../../app/store';
import type { Asset } from '../../../domain/asset';
import type { LbtcUnit } from '../../../utils';
import { fromSatoshiToUnitOrFractional } from '../../../utils';

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
  marketInfo: MarketInfo.AsObject,
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
      : fromSatoshiToUnitOrFractional(
          Number(baseAmount),
          baseAsset?.precision,
          baseAsset?.unitOrTicker ?? ''
        );
  const quoteAmountFormatted =
    quoteAmount === undefined || !marketInfo.market?.quoteAsset
      ? 'N/A'
      : fromSatoshiToUnitOrFractional(
          Number(quoteAmount),
          quoteAsset?.precision,
          quoteAsset?.unitOrTicker ?? ''
        );
  const txId = row.txId;
  return { baseAmountFormatted, quoteAmountFormatted, txId };
};

interface DepositRowsProps {
  deposits?: DepositRow[];
  lbtcUnit: LbtcUnit;
  marketInfo: MarketInfo.AsObject;
  savedAssets: Record<NetworkString, Asset[]>;
  numItemsToShow: number;
}

export const DepositRows = ({
  deposits,
  lbtcUnit,
  marketInfo,
  savedAssets,
  numItemsToShow,
}: DepositRowsProps): JSX.Element => {
  const { network } = useTypedSelector(({ settings }: RootState) => settings);
  const baseAsset = savedAssets[network].find((a: Asset) => a.asset_id === marketInfo.market?.baseAsset);
  const quoteAsset = savedAssets[network].find((a: Asset) => a.asset_id === marketInfo.market?.quoteAsset);
  return (
    <>
      {deposits?.slice(0, numItemsToShow).map((row) => {
        const data = getDepositData(row, lbtcUnit, marketInfo, baseAsset, quoteAsset);
        return (
          <TxRow
            key={data.txId}
            mode="deposit"
            baseAsset={baseAsset}
            quoteAsset={quoteAsset}
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
