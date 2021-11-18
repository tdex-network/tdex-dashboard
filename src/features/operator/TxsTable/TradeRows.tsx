import React from 'react';

import type { TradeInfo } from '../../../api-spec/generated/js/operator_pb';

export interface Trade {
  tradeId: TradeInfo.AsObject['tradeId'];
  status: TradeInfo.AsObject['status'];
  swapInfo: TradeInfo.AsObject['swapInfo'];
}

interface TradeRowsProps {
  trades?: Trade[];
}

export const TradeRows = ({ trades }: TradeRowsProps): JSX.Element => {
  return (
    <>
      {trades?.map(({ swapInfo, tradeId, status }, index) => (
        <tr key={index}>
          <td>{`Swap ${swapInfo?.assetP} for ${swapInfo?.assetR}`}</td>
          <td>{`$${swapInfo?.amountR}`}</td>
          <td>{`${swapInfo?.amountP} ${swapInfo?.assetP}`}</td>
          <td>{`${swapInfo?.amountR} ${swapInfo?.assetR}`}</td>
          <td>10 hours ago</td>
        </tr>
      ))}
    </>
  );
};
