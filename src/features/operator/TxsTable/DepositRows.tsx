import React from 'react';

import type { TradeInfo } from '../../../api-spec/generated/js/operator_pb';

interface Deposit {
  tradeId: TradeInfo.AsObject['tradeId'];
  status: TradeInfo.AsObject['status'];
  swapInfo: TradeInfo.AsObject['swapInfo'];
}

interface DepositRowsProps {
  deposits?: Deposit[];
}

export const DepositRows = ({ deposits }: DepositRowsProps): JSX.Element => {
  return (
    <>
      {deposits?.map(({ swapInfo, tradeId, status }, index) => (
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
