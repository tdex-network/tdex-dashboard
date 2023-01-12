import type { RpcOutputStream } from '@protobuf-ts/runtime-rpc';
import { notification } from 'antd';
import React, { useEffect, useState } from 'react';

import type { FeeFragmenterSplitFundsResponse } from '../../../../api-spec/protobuf/gen/js/tdex-daemon/v2/operator_pb';
import { useTypedDispatch } from '../../../../app/store';
import { AnimatedEllipsis } from '../../../../common/AnimatedEllipsis';
import { DepositPage } from '../../../../common/DepositPage';
import { WaitingModal } from '../../../../common/WaitingModal';
import {
  operatorApi,
  useFeeFragmenterSplitFundsMutation,
  useListFeeAddressesQuery,
  useListFeeFragmenterAddressesQuery,
} from '../../operator.api';

export const FeeDeposit = (): JSX.Element => {
  const dispatch = useTypedDispatch();
  const [skipGetFeeFragmenterAddress, setSkipGetFeeFragmenterAddress] = useState(true);
  const { data: listFeeAddresses, refetch: refetchListFeeAddresses } = useListFeeAddressesQuery();
  const { data: listFeeFragmenterAddresses, refetch: refetchListFeeFragmenterAddresses } =
    useListFeeFragmenterAddressesQuery(undefined, {
      skip: skipGetFeeFragmenterAddress,
    });
  const [feeFragmenterSplitFunds] = useFeeFragmenterSplitFundsMutation();
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
          operatorApi.endpoints.deriveFeeFragmenterAddresses.initiate(
            { numOfAddresses: 1 },
            { forceRefetch: true }
          )
        ).unwrap();
        setDepositAddress(feeFragmenterAddress?.[0]);
        setFeeFragmenterAddress(feeFragmenterAddress?.[0]);
      } catch (err) {
        console.error(err);
      }
      refetchListFeeFragmenterAddresses();
    } else {
      try {
        const feeAddress = await dispatch(
          operatorApi.endpoints.deriveFeeAddresses.initiate(undefined, { forceRefetch: true })
        ).unwrap();
        setDepositAddress(feeAddress?.[0]);
        setFeeAddress(feeAddress?.[0]);
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
    for await (const message of data.responses as RpcOutputStream<FeeFragmenterSplitFundsResponse>) {
      setNewWaitingModalLogStr(message.message);
    }
    const status = await data.status;
    if (status.code === 'OK') {
      notification.success({ message: 'Fragmentation deposit successful' });
    } else {
      console.log('status', status);
    }
  };

  const handleDeposit = async () => {
    try {
      setIsFragmenting(true);
      if (useFragmenter) {
        await handleFragmentFeeDeposits();
      } else {
        notification.success({ message: 'Deposit successful', key: 'Deposit successful' });
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
