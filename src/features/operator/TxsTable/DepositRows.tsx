import Icon, { RightOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import { groupBy } from 'lodash';
import React from 'react';

import type { Deposit, MarketInfo } from '../../../api-spec/generated/js/operator_pb';
import { ReactComponent as depositIcon } from '../../../assets/images/deposit.svg';
import type { Asset } from '../../../domain/asset';
import type { LbtcUnit } from '../../../utils';
import { assetIdToTicker, timeAgo, formatSatsToUnit, isLbtc } from '../../../utils';
import { useGetTransactionByIdQuery } from '../../liquid.api';

interface DepositRowsProps {
  deposits?: Deposit.AsObject[];
  lbtcUnit: LbtcUnit;
  marketInfo: MarketInfo.AsObject;
  savedAssets: Asset[];
  numItemsToShow: number;
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
  const baseAmountFormatted =
    baseAmount !== undefined
      ? formatSatsToUnit(Number(baseAmount), lbtcUnit, marketInfo.market?.baseAsset)
      : 'N/A';
  const quoteAmountFormatted =
    quoteAmount !== undefined
      ? formatSatsToUnit(Number(quoteAmount), lbtcUnit, marketInfo.market?.quoteAsset)
      : 'N/A';
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
          <Icon component={depositIcon} className="tx-icon" />
          {`Deposit ${quoteAssetTickerFormatted}`}
        </td>
        <td>{`$${quoteAmountFormatted}`}</td>
        <td>{`${baseAmountFormatted} ${baseAssetTickerFormatted}`}</td>
        <td>{`${quoteAmountFormatted} ${quoteAssetTickerFormatted}`}</td>
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
  numItemsToShow,
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
      {reducedDeposits?.slice(0, numItemsToShow).map((deposit) => {
        const baseAssetTicker = assetIdToTicker(marketInfo.market?.baseAsset || '', savedAssets);
        const quoteAssetTicker = assetIdToTicker(marketInfo.market?.quoteAsset || '', savedAssets);
        const reducedDeposit = Object.entries(deposit);
        let txId, baseAmount, quoteAmount, timestampUnix;
        // 1 asset has been deposited
        if (reducedDeposit.length === 2) {
          txId = (reducedDeposit?.[1]?.[1] as unknown as string) || '';
          baseAmount = reducedDeposit[0][0] === marketInfo.market?.baseAsset ? reducedDeposit[0][1].value : 0;
          quoteAmount =
            reducedDeposit[0][0] === marketInfo.market?.quoteAsset ? reducedDeposit[0][1].value : 0;
          timestampUnix = reducedDeposit[0][1].timestampUnix;
        }
        // 2 assets has been deposited in the same tx
        if (reducedDeposit.length === 3) {
          txId = (reducedDeposit?.[2]?.[1] as unknown as string) || '';
          baseAmount =
            reducedDeposit[0][0] === marketInfo.market?.baseAsset
              ? reducedDeposit[0][1].value
              : reducedDeposit[1][1].value;
          quoteAmount =
            reducedDeposit[0][0] === marketInfo.market?.quoteAsset
              ? reducedDeposit[0][1].value
              : reducedDeposit[1][1].value;
          timestampUnix = reducedDeposit[0][1].timestampUnix;
        }

        return (
          <>
            {baseAmount !== undefined &&
            quoteAmount !== undefined &&
            timestampUnix !== undefined &&
            txId !== undefined ? (
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
            ) : (
              <tr />
            )}
          </>
        );
      })}
    </>
  );
};
