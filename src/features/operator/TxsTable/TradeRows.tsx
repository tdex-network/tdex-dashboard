import React from 'react';

import type { TradeInfo } from '../../../api-spec/generated/js/operator_pb';
import type { Asset } from '../../../domain/asset';
import { assetIdToTicker, timeAgo } from '../../../utils';

export interface Trade {
  tradeId: TradeInfo.AsObject['tradeId'];
  status: TradeInfo.AsObject['status'];
  swapInfo: TradeInfo.AsObject['swapInfo'];
  settleTimeUnix: TradeInfo.AsObject['settleTimeUnix'];
}

interface TradeRowsProps {
  trades?: Trade[];
  savedAssets: Asset[];
}

export const TradeRows = ({ trades, savedAssets }: TradeRowsProps): JSX.Element => {
  return (
    <>
      {trades?.map(({ swapInfo, tradeId, status, settleTimeUnix }, index) => {
        const baseAssetTicker = assetIdToTicker(swapInfo?.assetP || '', savedAssets);
        const quoteAssetTicker = assetIdToTicker(swapInfo?.assetR || '', savedAssets);
        return (
          <tr key={index}>
            <td>{`Swap ${baseAssetTicker} for ${quoteAssetTicker}`}</td>
            <td>{`$${swapInfo?.amountR}`}</td>
            <td>{`${swapInfo?.amountP} ${baseAssetTicker}`}</td>
            <td>{`${swapInfo?.amountR} ${quoteAssetTicker}`}</td>
            <td>{timeAgo(settleTimeUnix)}</td>
          </tr>
        );
      })}
    </>
  );
};
