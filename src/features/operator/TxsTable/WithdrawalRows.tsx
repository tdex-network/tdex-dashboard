import Icon from '@ant-design/icons';
import React from 'react';

import type { Withdrawal, MarketInfo } from '../../../api-spec/generated/js/operator_pb';
import { ReactComponent as depositIcon } from '../../../assets/images/deposit-green.svg';
import type { Asset } from '../../../domain/asset';
import { assetIdToTicker, timeAgo } from '../../../utils';
import { useGetTransactionByIdQuery } from '../../liquid.api';

interface WithdrawalRowsProps {
  marketInfo: MarketInfo.AsObject;
  savedAssets: Asset[];
  withdrawals?: Withdrawal.AsObject[];
}

interface WithdrawRowProps {
  balance: Withdrawal.AsObject['balance'];
  baseAssetTicker: string;
  quoteAssetTicker: string;
  txId: string;
}

const WithdrawRow = ({ balance, baseAssetTicker, quoteAssetTicker, txId }: WithdrawRowProps) => {
  const { data: tx } = useGetTransactionByIdQuery(txId);
  return (
    <tr>
      <td>
        <Icon component={depositIcon} className="rotate-icon" />
        {`Withdraw ${baseAssetTicker}`}
      </td>
      <td>{balance?.baseAmount}</td>
      <td>{`${balance?.baseAmount} ${baseAssetTicker}`}</td>
      <td>{`${balance?.quoteAmount} ${quoteAssetTicker}`}</td>
      <td>{timeAgo(tx?.status.block_time)}</td>
    </tr>
  );
};
export const WithdrawalRows = ({
  withdrawals,
  savedAssets,
  marketInfo,
}: WithdrawalRowsProps): JSX.Element => {
  const baseAssetId = marketInfo?.market?.baseAsset || '';
  const quoteAssetId = marketInfo?.market?.quoteAsset || '';
  const baseAssetTicker = assetIdToTicker(baseAssetId, savedAssets);
  const quoteAssetTicker = assetIdToTicker(quoteAssetId, savedAssets);

  return (
    <>
      {withdrawals?.map(({ balance, txId }) => (
        <WithdrawRow
          key={txId}
          balance={balance}
          baseAssetTicker={baseAssetTicker}
          quoteAssetTicker={quoteAssetTicker}
          txId={txId}
        />
      ))}
    </>
  );
};
