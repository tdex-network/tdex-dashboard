import Icon, { RightOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import { groupBy } from 'lodash';
import React from 'react';

import type { UtxoInfo } from '../../../api-spec/generated/js/operator_pb';
import { ReactComponent as depositIcon } from '../../../assets/images/deposit.svg';
import type { Asset } from '../../../domain/asset';
import { assetIdToTicker, timeAgo } from '../../../utils';
import { useGetTransactionByIdQuery } from '../../liquid.api';

interface DepositRowsProps {
  deposits?: UtxoInfo.AsObject[];
  savedAssets: Asset[];
}

interface DepositRowProps {
  baseAssetTicker: string;
  quoteAssetTicker: string;
  reducedDeposit: [string, string | number][];
  txId: string;
}

const reduceValue = (deposits: UtxoInfo.AsObject[]) => {
  if (!deposits) return {};
  return deposits.reduce((result, currentValue) => {
    result[currentValue.asset] = (result[currentValue.asset] ?? 0) + currentValue.value;
    return result;
  }, {} as { [asset: string]: number });
};

const DepositRow = ({ baseAssetTicker, quoteAssetTicker, reducedDeposit, txId }: DepositRowProps) => {
  const { data: tx } = useGetTransactionByIdQuery(txId);
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
        <td>{`$${reducedDeposit[1][1]}`}</td>
        <td>{`${reducedDeposit[0][1]} ${baseAssetTicker}`}</td>
        <td>{`${reducedDeposit[1][1]} ${quoteAssetTicker}`}</td>
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

export const DepositRows = ({ deposits, savedAssets }: DepositRowsProps): JSX.Element => {
  const depositsByTxId = groupBy(deposits || [], (utxo) => utxo.outpoint?.hash);
  const reducedDeposits = Object.entries(depositsByTxId).map(([txId, arr]) => {
    const res = reduceValue(arr) as { [key: string]: number | string };
    res.txId = txId;
    return res;
  });
  return (
    <>
      {reducedDeposits?.map((deposit) => {
        const reducedDeposit = Object.entries(deposit);
        const baseAssetTicker = assetIdToTicker(reducedDeposit[0][0], savedAssets);
        const quoteAssetTicker = assetIdToTicker(reducedDeposit[1][0], savedAssets);
        return (
          <DepositRow
            key={reducedDeposit[2][1]}
            reducedDeposit={reducedDeposit}
            baseAssetTicker={baseAssetTicker}
            quoteAssetTicker={quoteAssetTicker}
            txId={reducedDeposit[2][1] as string}
          />
        );
      })}
    </>
  );
};
