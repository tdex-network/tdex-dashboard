import type { NetworkString } from 'ldk';
import React from 'react';

import type { Withdrawal, MarketInfo } from '../../../api-spec/generated/js/operator_pb';
import type { RootState } from '../../../app/store';
import { useTypedSelector } from '../../../app/store';
import type { Asset } from '../../../domain/asset';
import type { LbtcUnit } from '../../../utils';
import { fromSatoshiToUnitOrFractional } from '../../../utils';

import type { TxData } from './TxRow';
import { TxRow } from './TxRow';

interface WithdrawalRowsProps {
  marketInfo: MarketInfo.AsObject;
  savedAssets: Record<NetworkString, Asset[]>;
  withdrawals?: Withdrawal.AsObject[];
  lbtcUnit: LbtcUnit;
}

export const getWithdrawData = (
  row: Withdrawal.AsObject,
  lbtcUnit: LbtcUnit,
  marketInfo: MarketInfo.AsObject,
  baseAsset?: Asset,
  quoteAsset?: Asset
): { baseAmountFormatted: string; quoteAmountFormatted: string; txId: string } => {
  const baseAmountFormatted =
    row.balance?.baseAmount === undefined || !marketInfo.market?.baseAsset
      ? 'N/A'
      : fromSatoshiToUnitOrFractional(
          row.balance?.baseAmount,
          baseAsset?.precision,
          baseAsset?.unitOrTicker ?? ''
        );
  const quoteAmountFormatted =
    row.balance?.quoteAmount === undefined || !marketInfo.market?.quoteAsset
      ? 'N/A'
      : fromSatoshiToUnitOrFractional(
          row.balance?.quoteAmount,
          quoteAsset?.precision,
          quoteAsset?.unitOrTicker ?? ''
        );
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
  const baseAsset = savedAssets[network].find((a: Asset) => a.asset_id === marketInfo.market?.baseAsset);
  const quoteAsset = savedAssets[network].find((a: Asset) => a.asset_id === marketInfo.market?.quoteAsset);
  return (
    <>
      {withdrawals?.map((row) => {
        const data = getWithdrawData(row, lbtcUnit, marketInfo, baseAsset, quoteAsset);
        return (
          <TxRow
            key={data.txId}
            mode="withdraw"
            baseAsset={baseAsset}
            quoteAsset={quoteAsset}
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
