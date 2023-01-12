import type { TradeInfo } from '../../../api-spec/protobuf/gen/js/tdex-daemon/v2/types_pb';
import type { RootState } from '../../../app/store';
import { useTypedSelector } from '../../../app/store';
import type { Asset } from '../../../domain/asset';
import type { NetworkString } from '../../../domain/misc';
import type { LbtcUnit } from '../../../utils';
import { fromSatsToUnitOrFractional, isLbtcTicker } from '../../../utils';

import type { TxData } from './TxRow';
import { TxRow } from './TxRow';

interface TradeRowsProps {
  trades?: TradeInfo[];
  assets: Asset[];
  lbtcUnit: LbtcUnit;
  baseAsset?: Asset;
  quoteAsset?: Asset;
}

export const getTradeData = (
  row: TradeInfo,
  lbtcUnit: LbtcUnit,
  network: NetworkString,
  assets: Asset[]
): { baseAmountFormatted: string; quoteAmountFormatted: string; txId: string } => {
  const proposedIsBase = row.marketWithFee?.market?.baseAsset === row.swapInfo?.assetP;
  const assetPropose = assets.find((a: Asset) => a.asset_id === row.swapInfo?.assetP);
  const assetReceive = assets.find((a: Asset) => a.asset_id === row.swapInfo?.assetR);
  const baseAmountFormatted = proposedIsBase
    ? row.swapInfo?.amountP
      ? fromSatsToUnitOrFractional(
          row.swapInfo?.amountP,
          assetPropose?.precision,
          isLbtcTicker(assetPropose?.ticker),
          lbtcUnit
        )
      : 'N/A'
    : row.swapInfo?.amountR
    ? fromSatsToUnitOrFractional(
        row.swapInfo?.amountR,
        assetReceive?.precision,
        isLbtcTicker(assetReceive?.ticker),
        lbtcUnit
      )
    : 'N/A';
  const quoteAmountFormatted = proposedIsBase
    ? row.swapInfo?.amountP
      ? fromSatsToUnitOrFractional(
          row.swapInfo?.amountR,
          assetReceive?.precision,
          isLbtcTicker(assetReceive?.ticker),
          lbtcUnit
        )
      : 'N/A'
    : row.swapInfo?.amountR
    ? fromSatsToUnitOrFractional(
        row.swapInfo?.amountP,
        assetPropose?.precision,
        isLbtcTicker(assetPropose?.ticker),
        lbtcUnit
      )
    : 'N/A';
  // TODO txId
  return { baseAmountFormatted, quoteAmountFormatted, txId: '' };
};

export const TradeRows = ({
  trades,
  lbtcUnit,
  assets,
  baseAsset,
  quoteAsset,
}: TradeRowsProps): JSX.Element => {
  const { network } = useTypedSelector(({ settings }: RootState) => settings);
  return (
    <>
      {trades?.map((row, index) => {
        const data = getTradeData(row, lbtcUnit, network, assets);
        return (
          <TxRow
            key={`${data.txId}_${index}`}
            mode="trade"
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
