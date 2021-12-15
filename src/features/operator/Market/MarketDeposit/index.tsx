import { notification } from 'antd';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import type { MarketInfo } from '../../../../api-spec/generated/js/operator_pb';
import { useTypedSelector } from '../../../../app/store';
import { DepositPage } from '../../../../common/DepositPage';
import {
  useMarketFragmenterSplitFundsMutation,
  useGetMarketFragmenterAddressQuery,
  useListDepositsQuery,
  useGetMarketAddressQuery,
  useClaimMarketDepositsMutation,
} from '../../operator.api';

export const MarketDeposit = (): JSX.Element => {
  const { state } = useLocation() as { state: { marketInfo: MarketInfo.AsObject } };
  const { explorerLiquidAPI } = useTypedSelector(({ settings }) => settings);
  const [marketFragmenterSplitFunds] = useMarketFragmenterSplitFundsMutation();
  const { data: marketFragmenterAddress, refetch: refetchMarketFragmenterAddress } =
    useGetMarketFragmenterAddressQuery({ numOfAddresses: 1 });
  const { data: marketAddress, refetch: refetchMarketAddress } = useGetMarketAddressQuery({
    baseAsset: state?.marketInfo.market?.baseAsset || '',
    quoteAsset: state?.marketInfo.market?.quoteAsset || '',
  });
  const [claimMarketDeposits] = useClaimMarketDepositsMutation();
  const { refetch: refetchDeposits } = useListDepositsQuery({
    accountIndex: state?.marketInfo.accountIndex,
  });

  const [useFragmenter, setUseFragmenter] = useState(false);
  const [isFragmenting, setIsFragmenting] = useState(false);

  const depositAddress = useFragmenter
    ? marketFragmenterAddress?.[0].address || 'N/A'
    : marketAddress?.[0].address || 'N/A';

  const handleFragmentMarketDeposits = async () => {
    // @ts-ignore
    const { data } = await marketFragmenterSplitFunds({
      market: {
        baseAsset: state?.marketInfo?.market?.baseAsset || '',
        quoteAsset: state?.marketInfo?.market?.quoteAsset || '',
      },
      millisatsPerByte: 100,
    });
    data.on('status', async (status: any) => {
      if (status.code === 0) {
        await refetchDeposits();
        notification.success({ message: 'Fragmentation deposit successful' });
        setIsFragmenting(false);
      } else {
        console.error('status', status);
        notification.error({ message: status.details, key: status.details });
        setIsFragmenting(false);
      }
    });
  };

  const handleClaimMarketDeposits = async () => {
    const response = await fetch(`${explorerLiquidAPI}/address/${depositAddress}/utxo`);
    const utxoList = await response.json();
    if (!utxoList.length) throw new Error('No utxo found. Did you wait for confirmation?');
    const res = await claimMarketDeposits({
      outpointsList: utxoList.map((u: any) => ({ hash: u.txid, index: u.vout })),
      market: {
        baseAsset: state?.marketInfo?.market?.baseAsset || '',
        quoteAsset: state?.marketInfo?.market?.quoteAsset || '',
      },
    });
    // @ts-ignore
    if (res?.error) throw new Error(res?.error);
    notification.success({ message: 'Deposit successful' });
    setIsFragmenting(false);
  };

  const handleDeposit = async () => {
    try {
      setIsFragmenting(true);
      if (useFragmenter) {
        await handleFragmentMarketDeposits();
      } else {
        await handleClaimMarketDeposits();
      }
    } catch (err) {
      setIsFragmenting(false);
      // @ts-ignore
      notification.error({ message: err.message, key: err.message });
    }
  };

  return (
    <DepositPage
      type="Market"
      depositAddress={depositAddress}
      isFragmenting={isFragmenting}
      handleDeposit={handleDeposit}
      setUseFragmenter={setUseFragmenter}
      getNewAddress={() => {
        if (useFragmenter) {
          refetchMarketFragmenterAddress();
        } else {
          refetchMarketAddress();
        }
      }}
    />
  );
};
