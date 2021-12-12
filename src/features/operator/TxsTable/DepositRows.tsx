import Icon, { RightOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import { groupBy } from 'lodash';
import React from 'react';

import type { Deposit, MarketInfo } from '../../../api-spec/generated/js/operator_pb';
import { ReactComponent as depositIcon } from '../../../assets/images/deposit.svg';
import type { Asset } from '../../../domain/asset';
import type { LbtcUnit } from '../../../utils';
import { assetIdToTicker, timeAgo, formatSatsToUnit } from '../../../utils';
import { useGetTransactionByIdQuery } from '../../liquid.api';

interface DepositRowsProps {
  deposits?: Deposit.AsObject[];
  lbtcUnit: LbtcUnit;
  marketInfo: MarketInfo.AsObject;
  savedAssets: Asset[];
}

interface DepositRowProps {
  baseAssetTicker: string;
  quoteAssetTicker: string;
  baseAmount: number;
  quoteAmount: number;
  lbtcUnit: LbtcUnit;
  marketInfo: MarketInfo.AsObject;
  timestampUnix: number;
  txId: string;
}

const reduceValue = (deposits: Deposit.AsObject[]) => {
  if (!deposits) return {};
  return deposits.reduce((result, currentValue) => {
    result[currentValue.utxo?.asset || ''] = {
      value: (result[currentValue.utxo?.asset || '']?.value ?? 0) + (currentValue.utxo?.value || 0),
      timestampUnix: currentValue.timestampUnix,
    };
    return result;
  }, {} as { [asset: string]: { value: number; timestampUnix: number } });
};

const DepositRow = ({
  baseAssetTicker,
  quoteAssetTicker,
  baseAmount,
  quoteAmount,
  lbtcUnit,
  marketInfo,
  timestampUnix,
  txId,
}: DepositRowProps) => {
  const { data: tx } = useGetTransactionByIdQuery(txId);
  const baseAmountFormatted = formatSatsToUnit(Number(baseAmount), lbtcUnit, marketInfo.market?.baseAsset);
  const quoteAmountFormatted = formatSatsToUnit(Number(quoteAmount), lbtcUnit, marketInfo.market?.quoteAsset);
  const time = timestampUnix || tx?.status.block_time;
  return (
    <>
      <tr
        onClick={(ev) => {
          ev.currentTarget.classList.toggle('opened');
          ev.currentTarget.nextElementSibling?.classList.toggle('opened');
        }}
      >
        <td>
          <Icon component={depositIcon} className="tx-icon" />
          {`Deposit ${quoteAssetTicker}`}
        </td>
        <td>{`$${quoteAmountFormatted}`}</td>
        <td>{`${baseAmountFormatted} ${baseAssetTicker}`}</td>
        <td>{`${quoteAmountFormatted} ${quoteAssetTicker}`}</td>
        <td data-time={time}>{timeAgo(time)}</td>
        <td>
          <RightOutlined />
        </td>
      </tr>
      <tr
        className="details"
        data-time={time}
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

export const DepositRows = ({
  deposits,
  lbtcUnit,
  marketInfo,
  savedAssets,
}: DepositRowsProps): JSX.Element => {
  const depositsByTxId = groupBy(deposits || [], (deposit) => deposit.utxo?.outpoint?.hash);
  const reducedDeposits = Object.entries(depositsByTxId).map(([txId, arr]) => {
    const res = reduceValue(arr) as { [asset: string]: { value: number; timestampUnix: number } };
    // @ts-ignore
    res.txId = txId;
    return res;
  });
  return (
    <>
      {reducedDeposits?.map((deposit) => {
        const reducedDeposit = Object.entries(deposit);
        const baseAssetTicker = assetIdToTicker(marketInfo.market?.baseAsset || '', savedAssets);
        const quoteAssetTicker = assetIdToTicker(marketInfo.market?.quoteAsset || '', savedAssets);
        const txId = (reducedDeposit?.[2]?.[1] as unknown as string) || '';
        const baseAmount =
          reducedDeposit[0][0] === marketInfo.market?.baseAsset
            ? reducedDeposit[0][1].value
            : reducedDeposit[1][1].value;
        const quoteAmount =
          reducedDeposit[0][0] === marketInfo.market?.quoteAsset
            ? reducedDeposit[0][1].value
            : reducedDeposit[1][1].value;
        const timestampUnix = reducedDeposit[0][1].timestampUnix;
        return (
          <DepositRow
            key={txId}
            baseAmount={baseAmount}
            quoteAmount={quoteAmount}
            baseAssetTicker={baseAssetTicker}
            quoteAssetTicker={quoteAssetTicker}
            lbtcUnit={lbtcUnit}
            timestampUnix={timestampUnix}
            marketInfo={marketInfo}
            txId={txId}
          />
        );
      })}
    </>
  );
};
