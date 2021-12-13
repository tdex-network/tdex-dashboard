import Icon, { RightOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import React from 'react';

import type { Withdrawal, MarketInfo } from '../../../api-spec/generated/js/operator_pb';
import { ReactComponent as depositIcon } from '../../../assets/images/deposit.svg';
import type { Asset } from '../../../domain/asset';
import type { LbtcUnit } from '../../../utils';
import { assetIdToTicker, isLbtc, timeAgo, formatSatsToUnit } from '../../../utils';
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
  timestampUnix: number;
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
  timestampUnix,
}: WithdrawRowProps) => {
  const { data: tx, refetch: refetchTx } = useGetTransactionByIdQuery(txId);
  if (!tx?.status?.confirmed) {
    setTimeout(refetchTx, 1000 * 60);
  }
  const baseAmount =
    balance?.baseAmount === undefined ? 'N/A' : formatSatsToUnit(balance?.baseAmount, lbtcUnit, baseAssetId);
  const quoteAmount =
    balance?.quoteAmount === undefined
      ? 'N/A'
      : formatSatsToUnit(balance?.quoteAmount, lbtcUnit, baseAssetId);
  const time = timestampUnix || tx?.status.block_time;
  const baseAssetTickerFormatted = isLbtc(baseAssetTicker) ? lbtcUnit : baseAssetTicker;
  const quoteAssetTickerFormatted = isLbtc(quoteAssetTicker) ? lbtcUnit : quoteAssetTicker;
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
          {`Withdraw ${baseAssetTickerFormatted}`}
        </td>
        <td>{baseAmount}</td>
        <td>{`${baseAmount} ${baseAssetTickerFormatted}`}</td>
        <td>{`${quoteAmount} ${quoteAssetTickerFormatted}`}</td>
        <td data-time={time}>{timeAgo(time)}</td>
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
      {withdrawals?.map(({ balance, txId, timestampUnix }) => (
        <WithdrawRow
          key={txId}
          balance={balance}
          baseAssetTicker={baseAssetTicker}
          quoteAssetTicker={quoteAssetTicker}
          baseAssetId={baseAssetId}
          txId={txId}
          lbtcUnit={lbtcUnit}
          timestampUnix={timestampUnix}
        />
      ))}
    </>
  );
};
