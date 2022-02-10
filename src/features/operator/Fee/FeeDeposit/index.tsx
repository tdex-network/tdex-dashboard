import { notification } from 'antd';
import React, { useEffect, useState } from 'react';

import type { FragmenterSplitFundsReply } from '../../../../api-spec/generated/js/operator_pb';
import { useTypedSelector } from '../../../../app/store';
import { AnimatedEllipsis } from '../../../../common/AnimatedEllipsis';
import { DepositPage } from '../../../../common/DepositPage';
import { WaitingModal } from '../../../../common/WaitingModal';
import {
  useClaimFeeDepositsMutation,
  useFeeFragmenterSplitFundsMutation,
  useGetFeeAddressQuery,
  useGetFeeFragmenterAddressQuery,
  useListDepositsQuery,
  useListFeeAddressesQuery,
  useListFeeFragmenterAddressesQuery,
} from '../../operator.api';

export const FeeDeposit = (): JSX.Element => {
  const { explorerLiquidAPI } = useTypedSelector(({ settings }) => settings);
  const [skipGetFeeFragmenterAddress, setSkipGetFeeFragmenterAddress] = useState(true);
  const { data: feeFragmenterAddress, refetch: refetchFeeFragmenterAddress } =
    useGetFeeFragmenterAddressQuery({ numOfAddresses: 1 }, { skip: skipGetFeeFragmenterAddress });
  const { data: feeAddress, refetch: refetchFeeAddress } = useGetFeeAddressQuery();
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
  const [depositAddress, setDepositAddress] = useState<string>(
    useFragmenter ? feeFragmenterAddress?.[0].address || 'N/A' : feeAddress?.[0].address || 'N/A'
  );
  useEffect(() => {
    if (!useFragmenter) setDepositAddress(feeAddress?.[0].address || '');
  }, [feeAddress, useFragmenter]);
  useEffect(() => {
    if (useFragmenter) setDepositAddress(feeFragmenterAddress?.[0].address || '');
  }, [feeFragmenterAddress, useFragmenter]);

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
      data.on('data', async (data: FragmenterSplitFundsReply) => {
        setNewWaitingModalLogStr(data.getMessage());
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
      outpointsList: utxoList.map((u: any) => ({ hash: u.txid, index: u.vout })),
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
        getNewAddress={() => {
          if (useFragmenter) {
            refetchFeeFragmenterAddress();
            refetchListFeeFragmenterAddresses();
          } else {
            refetchFeeAddress();
            refetchListFeeAddresses();
          }
        }}
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
