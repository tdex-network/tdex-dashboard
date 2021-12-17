import { notification } from 'antd';
import React, { useEffect, useState } from 'react';

import { useTypedSelector } from '../../../../app/store';
import { DepositPage } from '../../../../common/DepositPage';
import {
  useClaimFeeDepositsMutation,
  useFeeFragmenterSplitFundsMutation,
  useGetFeeAddressQuery,
  useGetFeeBalanceQuery,
  useGetFeeFragmenterAddressQuery,
} from '../../operator.api';

export const FeeDeposit = (): JSX.Element => {
  const { explorerLiquidAPI } = useTypedSelector(({ settings }) => settings);
  const { refetch: refetchGetFeeBalance } = useGetFeeBalanceQuery();
  const [skipGetFeeFragmenterAddress, setSkipGetFeeFragmenterAddress] = useState(true);
  const { data: feeFragmenterAddress, refetch: refetchFeeFragmenterAddress } =
    useGetFeeFragmenterAddressQuery({ numOfAddresses: 1 }, { skip: skipGetFeeFragmenterAddress });
  const { data: feeAddress, refetch: refetchFeeAddress } = useGetFeeAddressQuery();
  const [feeFragmenterSplitFunds] = useFeeFragmenterSplitFundsMutation();
  const [claimFeeDeposits] = useClaimFeeDepositsMutation();

  const [isFragmenting, setIsFragmenting] = useState(false);
  const [useFragmenter, setUseFragmenter] = useState(false);

  useEffect(() => {
    if (useFragmenter) {
      setSkipGetFeeFragmenterAddress(false);
    }
  }, [useFragmenter]);

  const depositAddress = useFragmenter
    ? feeFragmenterAddress?.[0].address || 'N/A'
    : feeAddress?.[0].address || 'N/A';

  const handleFragmentFeeDeposits = async () => {
    // @ts-ignore
    const { data } = await feeFragmenterSplitFunds({ millisatsPerByte: 100, maxFragment: 50 });
    data.on('status', async (status: any) => {
      if (status.code === 0) {
        await refetchGetFeeBalance();
        notification.success({ message: 'Fragmentation deposit successful' });
        setIsFragmenting(false);
      } else {
        console.error('status', status);
        notification.error({ message: status.details });
        setIsFragmenting(false);
      }
    });
  };

  const handleClaimFeeDeposits = async () => {
    const response = await fetch(`${explorerLiquidAPI}/address/${depositAddress}/utxo`);
    const utxoList = await response.json();
    if (!utxoList.length) throw new Error('No utxo found. Did you wait for confirmation?');
    const res = await claimFeeDeposits({
      outpointsList: utxoList.map((u: any) => ({ hash: u.txid, index: u.vout })),
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
        await handleFragmentFeeDeposits();
      } else {
        await handleClaimFeeDeposits();
      }
    } catch (err) {
      setIsFragmenting(false);
      // @ts-ignore
      notification.error({ message: err.message, key: err.message });
    }
  };

  return (
    <DepositPage
      type="Fee"
      depositAddress={depositAddress}
      isFragmenting={isFragmenting}
      handleDeposit={handleDeposit}
      setUseFragmenter={setUseFragmenter}
      getNewAddress={() => {
        if (useFragmenter) {
          refetchFeeFragmenterAddress();
        } else {
          refetchFeeAddress();
        }
      }}
    />
  );
};
