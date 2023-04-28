import React from 'react';

import type { MarketInfo, Transaction } from '../../../api-spec/protobuf/gen/js/tdex-daemon/v2/types_pb';
import type { RootState } from '../../../app/store';
import { useTypedSelector } from '../../../app/store';
import type { Asset } from '../../../domain/asset';
import type { NetworkString } from '../../../domain/misc';
import type { LbtcUnit } from '../../../utils';
import { fromSatsToUnitOrFractional, isLbtcTicker } from '../../../utils';

import type { TxData } from './TxRow';
import { TxRow } from './TxRow';

interface WithdrawalRowsProps {
  marketInfo: MarketInfo;
  withdrawals?: Transaction[];
  lbtcUnit: LbtcUnit;
  baseAsset?: Asset;
  quoteAsset?: Asset;
}

export const getWithdrawData = (
  row: Transaction,
  lbtcUnit: LbtcUnit,
  marketInfo: MarketInfo,
  network: NetworkString,
  baseAsset?: Asset,
  quoteAsset?: Asset
): { baseAmountFormatted: string; quoteAmountFormatted: string; txId: string } => {
  const baseAmountFormatted =
    row.totalAmountPerAsset[baseAsset?.asset_id ?? ''] === undefined
      ? 'N/A'
      : fromSatsToUnitOrFractional(
          row.totalAmountPerAsset[baseAsset?.asset_id ?? ''],
          baseAsset?.precision,
          isLbtcTicker(baseAsset?.ticker),
          lbtcUnit
        );
  const quoteAmountFormatted =
    row.totalAmountPerAsset[quoteAsset?.asset_id ?? ''] === undefined
      ? 'N/A'
      : fromSatsToUnitOrFractional(
          row.totalAmountPerAsset[quoteAsset?.asset_id ?? ''],
          quoteAsset?.precision,
          isLbtcTicker(quoteAsset?.ticker),
          lbtcUnit
        );
  const txId = row.txid;
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
        const data = getWithdrawData(row, lbtcUnit, marketInfo, network, baseAsset, quoteAsset);
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
