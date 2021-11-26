import Icon, { RightOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import React from 'react';

import type { Withdrawal, MarketInfo } from '../../../api-spec/generated/js/operator_pb';
import { ReactComponent as depositIcon } from '../../../assets/images/deposit.svg';
import type { Asset } from '../../../domain/asset';
import type { LbtcUnit } from '../../../utils';
import { assetIdToTicker, timeAgo } from '../../../utils';
import { formatSatsToUnit } from '../../../utils/unitConvert';
import { useGetTransactionByIdQuery } from '../../liquid.api';

interface WithdrawalRowsProps {
  marketInfo: MarketInfo.AsObject;
  savedAssets: Asset[];
  withdrawals?: Withdrawal.AsObject[];
  lbtcUnit: LbtcUnit;
}

interface WithdrawRowProps {
  balance: Withdrawal.AsObject['balance'];
  baseAssetTicker: string;
  quoteAssetTicker: string;
  baseAssetId: string;
  quoteAssetId: string;
  txId: string;
  lbtcUnit: LbtcUnit;
}

const WithdrawRow = ({
  balance,
  baseAssetTicker,
  quoteAssetTicker,
  txId,
  lbtcUnit,
  baseAssetId,
  quoteAssetId,
}: WithdrawRowProps) => {
  const { data: tx } = useGetTransactionByIdQuery(txId);
  const baseAmount =
    balance?.baseAmount === undefined ? 'N/A' : formatSatsToUnit(balance?.baseAmount, lbtcUnit, baseAssetId);
  const quoteAmount =
    balance?.quoteAmount === undefined
      ? 'N/A'
      : formatSatsToUnit(balance?.quoteAmount, lbtcUnit, baseAssetId);
  return (
    <>
      <tr
        onClick={(ev) => {
          ev.currentTarget.classList.toggle('opened');
          ev.currentTarget.nextElementSibling?.classList.toggle('opened');
        }}
      >
        <td>
          <Icon component={depositIcon} className="rotate-icon tx-icon" />
          {`Withdraw ${baseAssetTicker}`}
        </td>
        <td>{baseAmount}</td>
        <td>{`${baseAmount} ${baseAssetTicker}`}</td>
        <td>{`${quoteAmount} ${quoteAssetTicker}`}</td>
        <td data-time={tx?.status.block_time}>{timeAgo(tx?.status.block_time)}</td>
        <td>
          <RightOutlined />
        </td>
      </tr>
      <tr
        className="details"
        data-time={tx?.status.block_time}
        onClick={(ev) => {
          ev.currentTarget.classList.toggle('opened');
          ev.currentTarget.previousElementSibling?.classList.toggle('opened');
        }}
      >
        <td />
        <td colSpan={5}>
          <div className="d-flex details-content-container">
            <div className="d-flex details-content">
              <span className="dm-mono dm-mono__bold">Status</span>
              <span
                className={classNames('status', {
                  status__confirmed: tx?.status?.confirmed,
                  status__pending: !tx?.status?.confirmed,
                })}
              >
                {tx?.status?.confirmed ? 'Confirmed' : 'Pending'}
              </span>
            </div>
            <div className="d-flex details-content">
              <span className="dm-mono dm-mono__bold">Transaction Id</span>
              <span>{tx?.txid}</span>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};
export const WithdrawalRows = ({
  withdrawals,
  savedAssets,
  marketInfo,
  lbtcUnit,
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
          baseAssetId={baseAssetId}
          quoteAssetId={quoteAssetId}
          txId={txId}
          lbtcUnit={lbtcUnit}
        />
      ))}
    </>
  );
};
