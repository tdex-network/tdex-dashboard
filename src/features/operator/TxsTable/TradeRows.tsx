import type { NetworkString } from 'ldk';

import type { TradeInfo, MarketInfo } from '../../../api-spec/generated/js/operator_pb';
import type { RootState } from '../../../app/store';
import { useTypedSelector } from '../../../app/store';
import type { Asset } from '../../../domain/asset';
import type { LbtcUnit } from '../../../utils';
import { fromSatoshiToUnitOrFractional } from '../../../utils';

import type { TxData } from './TxRow';
import { TxRow } from './TxRow';

interface TradeRowsProps {
  trades?: TradeInfo.AsObject[];
  savedAssets: Record<NetworkString, Asset[]>;
  marketInfo: MarketInfo.AsObject;
  lbtcUnit: LbtcUnit;
}

export const getTradeData = (
  row: TradeInfo.AsObject,
  lbtcUnit: LbtcUnit,
  network: NetworkString,
  assets: Asset[]
): { baseAmountFormatted: string; quoteAmountFormatted: string; txId: string } => {
  const assetPropose = assets.find((a: Asset) => a.asset_id === row.swapInfo?.assetP);
  const assetReceive = assets.find((a: Asset) => a.asset_id === row.swapInfo?.assetR);
  const proposedIsBase = row.marketWithFee?.market?.baseAsset === row.swapInfo?.assetP;
  const baseAmountFormatted = proposedIsBase
    ? row.swapInfo?.amountP
      ? fromSatoshiToUnitOrFractional(
          row.swapInfo?.amountP,
          assetPropose?.precision,
          assetPropose?.unitOrTicker ?? ''
        )
      : 'N/A'
    : row.swapInfo?.amountR
    ? fromSatoshiToUnitOrFractional(
        row.swapInfo?.amountR,
        assetReceive?.precision,
        assetReceive?.unitOrTicker ?? ''
      )
    : 'N/A';
  const quoteAmountFormatted = proposedIsBase
    ? row.swapInfo?.amountP
      ? fromSatoshiToUnitOrFractional(
          row.swapInfo?.amountR,
          assetReceive?.precision,
          assetReceive?.unitOrTicker ?? ''
        )
      : 'N/A'
    : row.swapInfo?.amountR
    ? fromSatoshiToUnitOrFractional(
        row.swapInfo?.amountP,
        assetPropose?.precision,
        assetPropose?.unitOrTicker ?? ''
      )
    : 'N/A';
  const txId = row.txUrl.substring(row.txUrl.lastIndexOf('/') + 1, row.txUrl.indexOf('#'));
  return { baseAmountFormatted, quoteAmountFormatted, txId };
};

export const TradeRows = ({ trades, savedAssets, marketInfo, lbtcUnit }: TradeRowsProps): JSX.Element => {
  const { network } = useTypedSelector(({ settings }: RootState) => settings);
  const baseAsset = savedAssets[network].find((a: Asset) => a.asset_id === marketInfo.market?.baseAsset);
  const quoteAsset = savedAssets[network].find((a: Asset) => a.asset_id === marketInfo.market?.quoteAsset);
  return (
    <>
      {trades?.map((row, index) => {
        const data = getTradeData(row, lbtcUnit, network, savedAssets[network]);
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
