import type { NetworkString } from 'ldk';
import React from 'react';

import type { Withdrawal, MarketInfo } from '../../../api-spec/generated/js/tdex-daemon/v1/operator_pb';
import type { RootState } from '../../../app/store';
import { useTypedSelector } from '../../../app/store';
import type { Asset } from '../../../domain/asset';
import type { LbtcUnit } from '../../../utils';
import { fromSatsToUnitOrFractional, isLbtcTicker } from '../../../utils';

import type { TxData } from './TxRow';
import { TxRow } from './TxRow';

interface WithdrawalRowsProps {
  marketInfo: MarketInfo.AsObject;
  withdrawals?: Withdrawal.AsObject[];
  lbtcUnit: LbtcUnit;
  baseAsset?: Asset;
  quoteAsset?: Asset;
}

export const getWithdrawData = (
  row: Withdrawal.AsObject,
  lbtcUnit: LbtcUnit,
  marketInfo: MarketInfo.AsObject,
  network: NetworkString,
  baseAsset?: Asset,
  quoteAsset?: Asset
): { baseAmountFormatted: string; quoteAmountFormatted: string; txId: string } => {
  const baseAmountFormatted =
    row.balance?.baseAmount === undefined || !marketInfo.market?.baseAsset
      ? 'N/A'
      : fromSatsToUnitOrFractional(
          row.balance?.baseAmount,
          baseAsset?.precision,
          isLbtcTicker(baseAsset?.ticker),
          lbtcUnit
        );
  const quoteAmountFormatted =
    row.balance?.quoteAmount === undefined || !marketInfo.market?.quoteAsset
      ? 'N/A'
      : fromSatsToUnitOrFractional(
          row.balance?.quoteAmount,
          quoteAsset?.precision,
          isLbtcTicker(quoteAsset?.ticker),
          lbtcUnit
        );
  const txId = row.txId;
  return { baseAmountFormatted, quoteAmountFormatted, txId };
};

export const WithdrawalRows = ({
  withdrawals,
  marketInfo,
  lbtcUnit,
  baseAsset,
  quoteAsset,
}: WithdrawalRowsProps): JSX.Element => {
  const { network } = useTypedSelector(({ settings }: RootState) => settings);
  return (
    <>
      {withdrawals?.map((row) => {
        const data = getWithdrawData(row, lbtcUnit, marketInfo, network);
        return (
          <TxRow
            key={data.txId}
            mode="withdraw"
            baseAmountFormatted={data.baseAmountFormatted}
            quoteAmountFormatted={data.quoteAmountFormatted}
            row={row as TxData}
            txId={data.txId}
            baseAsset={baseAsset}
            quoteAsset={quoteAsset}
          />
        );
      })}
    </>
  );
};
