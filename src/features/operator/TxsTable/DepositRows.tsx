import Icon, { RightOutlined } from '@ant-design/icons';
import { groupBy } from 'lodash';
import React from 'react';

import type { UtxoInfo } from '../../../api-spec/generated/js/operator_pb';
import { ReactComponent as depositIcon } from '../../../assets/images/deposit-green.svg';
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
        <td>{timeAgo(tx?.status.block_time)}</td>
        <td>
          <RightOutlined />
        </td>
      </tr>
      <tr
        className="details"
        onClick={(ev) => {
          ev.currentTarget.classList.toggle('opened');
          ev.currentTarget.previousElementSibling?.classList.toggle('opened');
        }}
      >
        <td></td>
        <td colSpan={5}>
          <div className="d-flex details-content-container mb-2">
            <div className="d-flex details-content">
              <span className="dm-mono dm-mono__bold">Status</span>
              <span className="status">Pending</span>
            </div>
            <div className="d-flex details-content">
              <span className="dm-mono dm-mono__bold">Transaction Id</span>
              <span>84g96f5hy6mu13971563f95f08gh818s3526h7dpv22d1r006hn8563247855690</span>
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
