import type { NetworkString } from 'ldk';

import type { TradeInfo, MarketInfo } from '../../../api-spec/generated/js/operator_pb';
import type { RootState } from '../../../app/store';
import { useTypedSelector } from '../../../app/store';
import type { Asset } from '../../../domain/asset';
import type { LbtcUnit } from '../../../utils';
import { formatSatsToUnit, getTickers } from '../../../utils';

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
  network: NetworkString
): { baseAmountFormatted: string; quoteAmountFormatted: string; txId: string } => {
  const proposedIsBase = row.marketWithFee?.market?.baseAsset === row.swapInfo?.assetP;
  const baseAmountFormatted = proposedIsBase
    ? row.swapInfo?.amountP
      ? formatSatsToUnit(row.swapInfo?.amountP, lbtcUnit, row.swapInfo?.assetP, network)
      : 'N/A'
    : row.swapInfo?.amountR
    ? formatSatsToUnit(row.swapInfo?.amountR, lbtcUnit, row.swapInfo?.assetR, network)
    : 'N/A';
  const quoteAmountFormatted = proposedIsBase
    ? row.swapInfo?.amountP
      ? formatSatsToUnit(row.swapInfo?.amountR, lbtcUnit, row.swapInfo?.assetR, network)
      : 'N/A'
    : row.swapInfo?.amountR
    ? formatSatsToUnit(row.swapInfo?.amountP, lbtcUnit, row.swapInfo?.assetP, network)
    : 'N/A';
  const txId = row.txUrl.substring(row.txUrl.lastIndexOf('/') + 1, row.txUrl.indexOf('#'));
  return { baseAmountFormatted, quoteAmountFormatted, txId };
};

export const TradeRows = ({ trades, savedAssets, marketInfo, lbtcUnit }: TradeRowsProps): JSX.Element => {
  const { network } = useTypedSelector(({ settings }: RootState) => settings);
  return (
    <>
      {trades?.map((row, index) => {
        const data = getTradeData(row, lbtcUnit, network);
        const tickers = getTickers(marketInfo.market, savedAssets[network], lbtcUnit);
        return (
          <TxRow
            key={`${data.txId}_${index}`}
            mode="trade"
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
