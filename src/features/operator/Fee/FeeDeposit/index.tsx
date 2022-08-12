import { notification } from 'antd';
import React, { useEffect, useState } from 'react';

import type { FeeFragmenterSplitFundsResponse } from '../../../../api-spec/protobuf/gen/js/tdex-daemon/v1/operator_pb';
import { useTypedDispatch, useTypedSelector } from '../../../../app/store';
import { AnimatedEllipsis } from '../../../../common/AnimatedEllipsis';
import { DepositPage } from '../../../../common/DepositPage';
import { WaitingModal } from '../../../../common/WaitingModal';
import {
  operatorApi,
  useClaimFeeDepositsMutation,
  useFeeFragmenterSplitFundsMutation,
  useListDepositsQuery,
  useListFeeAddressesQuery,
  useListFeeFragmenterAddressesQuery,
} from '../../operator.api';

export const FeeDeposit = (): JSX.Element => {
  const dispatch = useTypedDispatch();
  const { explorerLiquidAPI } = useTypedSelector(({ settings }) => settings);
  const [skipGetFeeFragmenterAddress, setSkipGetFeeFragmenterAddress] = useState(true);
  const { data: listFeeAddresses, refetch: refetchListFeeAddresses } = useListFeeAddressesQuery();
  const { data: listFeeFragmenterAddresses, refetch: refetchListFeeFragmenterAddresses } =
    useListFeeFragmenterAddressesQuery(undefined, {
      skip: skipGetFeeFragmenterAddress,
    });
  const [feeFragmenterSplitFunds] = useFeeFragmenterSplitFundsMutation();
  const [claimFeeDeposits] = useClaimFeeDepositsMutation();
  const { data: deposits } = useListDepositsQuery({ accountIndex: 0 });
  const [isFragmenting, setIsFragmenting] = useState(false);
  const [useFragmenter, setUseFragmenter] = useState(false);
  const [feeAddress, setFeeAddress] = useState<string>('');
  const [feeFragmenterAddress, setFeeFragmenterAddress] = useState<string>('');
  const [depositAddress, setDepositAddress] = useState<string>('');

  useEffect(() => {
    if (depositAddress) {
      if (useFragmenter) {
        setDepositAddress(feeFragmenterAddress);
      } else {
        setDepositAddress(feeAddress);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useFragmenter]);

  // Waiting modal
  const initWaitingModalFeeFragmentationLog = ['starting fee deposit fragmentation'];
  const [waitingModalLogs, setWaitingModalLogs] = useState<string[]>(initWaitingModalFeeFragmentationLog);
  const [newWaitingModalLogStr, setNewWaitingModalLogStr] = useState<string>();
  const [isWaitingModalVisible, setIsWaitingModalVisible] = useState<boolean>(false);
  useEffect(() => {
    if (newWaitingModalLogStr && !waitingModalLogs.includes(newWaitingModalLogStr)) {
      setWaitingModalLogs([...waitingModalLogs, newWaitingModalLogStr]);
    }
  }, [newWaitingModalLogStr, waitingModalLogs]);

  useEffect(() => {
    if (useFragmenter) {
      setSkipGetFeeFragmenterAddress(false);
    }
  }, [useFragmenter]);

  const depositAddresses = useFragmenter ? listFeeFragmenterAddresses || [] : listFeeAddresses || [];

  const getNewAddress = async () => {
    if (useFragmenter) {
      try {
        const feeFragmenterAddress = await dispatch(
          operatorApi.endpoints.getFeeFragmenterAddress.initiate(
            { numOfAddresses: 1 },
            { forceRefetch: true }
          )
        ).unwrap();
        setDepositAddress(feeFragmenterAddress?.[0].address);
        setFeeFragmenterAddress(feeFragmenterAddress?.[0].address);
      } catch (err) {
        console.error(err);
      }
      refetchListFeeFragmenterAddresses();
    } else {
      try {
        const feeAddress = await dispatch(
          operatorApi.endpoints.getFeeAddress.initiate(undefined, { forceRefetch: true })
        ).unwrap();
        setDepositAddress(feeAddress?.[0].address);
        setFeeAddress(feeAddress?.[0].address);
      } catch (err) {
        console.error(err);
      }
      refetchListFeeAddresses();
    }
  };

  const handleFragmentFeeDeposits = async () => {
    setIsWaitingModalVisible(true);
    // @ts-ignore
    const { data } = await feeFragmenterSplitFunds({ millisatsPerByte: 100, maxFragment: 50 });
    const feeFragmenterSplitFundsStreamPromise = new Promise((resolve, reject) => {
      data.on('status', async (status: any) => {
        if (status.code === 0) {
          notification.success({ message: 'Fragmentation deposit successful' });
          resolve({ code: 0 });
        } else {
          reject({ message: status.details });
        }
      });
      data.on('data', async (data: FeeFragmenterSplitFundsResponse) => {
        setNewWaitingModalLogStr(data.message);
      });
    });
    await feeFragmenterSplitFundsStreamPromise;
  };

  const handleClaimFeeDeposits = async () => {
    const response = await fetch(`${explorerLiquidAPI}/address/${depositAddress}/utxo`);
    const utxoList = await response.json();
    if (!utxoList.length) throw new Error('No deposit transaction found');
    // Check confirmation
    utxoList.forEach((utxo: any) => {
      if (!utxo.status.confirmed) {
        throw new Error('Deposit transaction not confirmed');
      }
    });
    // Check if deposit already processed by daemon
    const foundArr = utxoList.map((utxo: any) => deposits?.find((d) => d.utxo?.outpoint?.hash === utxo.txid));
    if (foundArr.every(Boolean)) {
      throw new Error('Deposit already processed');
    }
    // @ts-ignore
    const { error } = await claimFeeDeposits({
      outpoints: utxoList.map((u: any) => ({ hash: u.txid, index: u.vout })),
    });
    if (error) throw new Error(error);
    notification.success({ message: 'Deposit successful', key: 'Deposit successful' });
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
      // @ts-ignore
      notification.error({ message: err.message, key: err.message });
    } finally {
      setIsFragmenting(false);
      setWaitingModalLogs(initWaitingModalFeeFragmentationLog);
      setIsWaitingModalVisible(false);
    }
  };

  return (
    <>
      <DepositPage
        type="Fee"
        depositAddress={depositAddress}
        setDepositAddress={setDepositAddress}
        depositAddresses={depositAddresses}
        isFragmenting={isFragmenting}
        handleDeposit={handleDeposit}
        setUseFragmenter={setUseFragmenter}
        getNewAddress={getNewAddress}
      />
      <WaitingModal
        isWaitingModalVisible={isWaitingModalVisible}
        setIsWaitingModalVisible={setIsWaitingModalVisible}
      >
        <>
          {waitingModalLogs.map((str, index) => (
            <p key={`${str}_${index}`}>
              {str}
              {index === waitingModalLogs.length - 1 ? <AnimatedEllipsis /> : null}
            </p>
          ))}
        </>
      </WaitingModal>
    </>
  );
};
