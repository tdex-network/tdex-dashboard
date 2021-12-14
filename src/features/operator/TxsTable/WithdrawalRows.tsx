import React from 'react';

import type { Withdrawal, MarketInfo } from '../../../api-spec/generated/js/operator_pb';
import type { Asset } from '../../../domain/asset';
import type { LbtcUnit } from '../../../utils';
import { formatSatsToUnit } from '../../../utils';

import type { TxData } from './TxRow';
import { TxRow } from './TxRow';
import { getTickersFormatted } from './index';

interface WithdrawalRowsProps {
  marketInfo: MarketInfo.AsObject;
  savedAssets: Asset[];
  withdrawals?: Withdrawal.AsObject[];
  lbtcUnit: LbtcUnit;
}

export const getWithdrawData = (
  row: Withdrawal.AsObject,
  lbtcUnit: LbtcUnit,
  marketInfo: MarketInfo.AsObject
): { baseAmountFormatted: string; quoteAmountFormatted: string; txId: string } => {
  const baseAmountFormatted =
    row.balance?.baseAmount === undefined
      ? 'N/A'
      : formatSatsToUnit(row.balance?.baseAmount, lbtcUnit, marketInfo.market?.baseAsset);
  const quoteAmountFormatted =
    row.balance?.quoteAmount === undefined
      ? 'N/A'
      : formatSatsToUnit(row.balance?.quoteAmount, lbtcUnit, marketInfo.market?.quoteAsset);
  const txId = row.txId;
  return { baseAmountFormatted, quoteAmountFormatted, txId };
};

export const WithdrawalRows = ({
  withdrawals,
  savedAssets,
  marketInfo,
  lbtcUnit,
}: WithdrawalRowsProps): JSX.Element => {
  return (
    <>
      {withdrawals?.map((row) => {
        const data = getWithdrawData(row, lbtcUnit, marketInfo);
        const tickers = getTickersFormatted(marketInfo, savedAssets, lbtcUnit);
        return (
          <TxRow
            key={data.txId}
            mode="withdraw"
            baseAssetTickerFormatted={tickers.baseAssetTickerFormatted}
            quoteAssetTickerFormatted={tickers.quoteAssetTickerFormatted}
            baseAmountFormatted={data.baseAmountFormatted}
            quoteAmountFormatted={data.quoteAmountFormatted}
            row={row as TxData}
            txId={data.txId}
          />
        );
      })}
    </>
  );
};
