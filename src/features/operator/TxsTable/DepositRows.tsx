import type { NetworkString } from 'ldk';

import type { MarketInfo } from '../../../api-spec/generated/js/operator_pb';
import type { RootState } from '../../../app/store';
import { useTypedSelector } from '../../../app/store';
import type { Asset } from '../../../domain/asset';
import type { LbtcUnit } from '../../../utils';
import { formatSatsToUnit, getTickers } from '../../../utils';

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
  network: NetworkString
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
      : formatSatsToUnit(Number(baseAmount), lbtcUnit, marketInfo.market?.baseAsset, network);
  const quoteAmountFormatted =
    quoteAmount === undefined || !marketInfo.market?.quoteAsset
      ? 'N/A'
      : formatSatsToUnit(Number(quoteAmount), lbtcUnit, marketInfo.market?.quoteAsset, network);
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
  const tickers = getTickers(marketInfo.market, savedAssets[network], lbtcUnit);
  return (
    <>
      {deposits?.slice(0, numItemsToShow).map((row) => {
        const data = getDepositData(row, lbtcUnit, marketInfo, network);
        return (
          <TxRow
            key={data.txId}
            mode="deposit"
            tickers={tickers}
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
