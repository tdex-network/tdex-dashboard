import type { NetworkString } from 'ldk';
import React from 'react';

import type { Withdrawal, MarketInfo } from '../../../api-spec/generated/js/operator_pb';
import type { RootState } from '../../../app/store';
import { useTypedSelector } from '../../../app/store';
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
  marketInfo: MarketInfo.AsObject,
  network: NetworkString
): { baseAmountFormatted: string; quoteAmountFormatted: string; txId: string } => {
  const baseAmountFormatted =
    row.balance?.baseAmount === undefined || !marketInfo.market?.baseAsset
      ? 'N/A'
      : formatSatsToUnit(row.balance?.baseAmount, lbtcUnit, marketInfo.market?.baseAsset, network);
  const quoteAmountFormatted =
    row.balance?.quoteAmount === undefined || !marketInfo.market?.quoteAsset
      ? 'N/A'
      : formatSatsToUnit(row.balance?.quoteAmount, lbtcUnit, marketInfo.market?.quoteAsset, network);
  const txId = row.txId;
  return { baseAmountFormatted, quoteAmountFormatted, txId };
};

export const WithdrawalRows = ({
  withdrawals,
  savedAssets,
  marketInfo,
  lbtcUnit,
}: WithdrawalRowsProps): JSX.Element => {
  const { network } = useTypedSelector(({ settings }: RootState) => settings);
  return (
    <>
      {withdrawals?.map((row) => {
        const data = getWithdrawData(row, lbtcUnit, marketInfo, network);
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
