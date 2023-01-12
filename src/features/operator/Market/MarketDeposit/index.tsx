import type { RpcOutputStream } from '@protobuf-ts/runtime-rpc';
import { notification } from 'antd';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import type { MarketFragmenterSplitFundsResponse } from '../../../../api-spec/protobuf/gen/js/tdex-daemon/v2/operator_pb';
import type { MarketInfo } from '../../../../api-spec/protobuf/gen/js/tdex-daemon/v2/types_pb';
import { useTypedDispatch } from '../../../../app/store';
import { AnimatedEllipsis } from '../../../../common/AnimatedEllipsis';
import { DepositPage } from '../../../../common/DepositPage';
import { WaitingModal } from '../../../../common/WaitingModal';
import {
  operatorApi,
  useMarketFragmenterSplitFundsMutation,
  useListMarketAddressesQuery,
  useListMarketFragmenterAddressesQuery,
} from '../../operator.api';

export const MarketDeposit = (): JSX.Element => {
  const dispatch = useTypedDispatch();
  const { state } = useLocation() as { state: { marketInfo: MarketInfo } };
  const market = {
    baseAsset: state?.marketInfo?.market?.baseAsset || '',
    quoteAsset: state?.marketInfo?.market?.quoteAsset || '',
  };
  const [marketFragmenterSplitFunds] = useMarketFragmenterSplitFundsMutation();
  const [skipGetMarketFragmenterAddress, setSkipGetMarketFragmenterAddress] = useState(true);
  const { data: listMarketAddresses, refetch: refetchListMarketAddresses } = useListMarketAddressesQuery({
    market,
  });
  const { data: listMarketFragmenterAddresses, refetch: refetchListMarketFragmenterAddresses } =
    useListMarketFragmenterAddressesQuery(undefined, {
      skip: skipGetMarketFragmenterAddress,
    });
  const [useFragmenter, setUseFragmenter] = useState(false);
  const [isFragmenting, setIsFragmenting] = useState(false);
  const [marketAddress, setMarketAddress] = useState<string>('');
  const [marketFragmenterAddress, setMarketFragmenterAddress] = useState<string>('');
  const [depositAddress, setDepositAddress] = useState<string>('');
  const [depositAddresses, setDepositAddresses] = useState<string[]>([]);

  useEffect(() => {
    useFragmenter
      ? setDepositAddresses(listMarketFragmenterAddresses || [])
      : setDepositAddresses(listMarketAddresses || []);
  }, [listMarketAddresses, listMarketFragmenterAddresses, useFragmenter]);

  useEffect(() => {
    if (depositAddress) {
      if (useFragmenter) {
        setDepositAddress(marketFragmenterAddress);
      } else {
        setDepositAddress(marketAddress);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useFragmenter]);

  // Waiting modal
  const initWaitingModalMarketFragmentationLog = ['starting market deposit fragmentation'];
  const [waitingModalLogs, setWaitingModalLogs] = useState<string[]>(initWaitingModalMarketFragmentationLog);
  const [newWaitingModalLogStr, setNewWaitingModalLogStr] = useState<string>();
  const [isWaitingModalVisible, setIsWaitingModalVisible] = useState<boolean>(false);
  useEffect(() => {
    if (newWaitingModalLogStr && !waitingModalLogs.includes(newWaitingModalLogStr)) {
      setWaitingModalLogs([...waitingModalLogs, newWaitingModalLogStr]);
    }
  }, [newWaitingModalLogStr, waitingModalLogs]);

  // Set skip to false to call GetMarketFragmenterAddress
  useEffect(() => {
    if (useFragmenter) {
      setSkipGetMarketFragmenterAddress(false);
    }
  }, [useFragmenter]);

  const getNewAddress = async () => {
    if (useFragmenter) {
      try {
        const marketFragmenterAddress = await dispatch(
          operatorApi.endpoints.deriveMarketFragmenterAddresses.initiate(
            { numOfAddresses: 1 },
            { forceRefetch: true }
          )
        ).unwrap();
        setDepositAddress(marketFragmenterAddress?.[0]);
        setMarketFragmenterAddress(marketFragmenterAddress?.[0]);
      } catch (err) {
        console.error(err);
      }
      refetchListMarketFragmenterAddresses();
    } else {
      try {
        const marketAddress = await dispatch(
          operatorApi.endpoints.deriveMarketAddresses.initiate(market, { forceRefetch: true })
        ).unwrap();
        setDepositAddress(marketAddress?.[0]);
        setMarketAddress(marketAddress?.[0]);
      } catch (err) {
        console.error(err);
      }
      refetchListMarketAddresses();
    }
  };

  const handleFragmentMarketDeposits = async () => {
    setIsWaitingModalVisible(true);
    // @ts-ignore
    const { data } = await marketFragmenterSplitFunds({
      market,
      millisatsPerByte: 100,
    });
    for await (const message of data.responses as RpcOutputStream<MarketFragmenterSplitFundsResponse>) {
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
        await handleFragmentMarketDeposits();
      } else {
        notification.success({ message: 'Deposit successful', key: 'Deposit successful' });
      }
    } catch (err) {
      // @ts-ignore
      notification.error({ message: err.message, key: err.message });
    } finally {
      setIsFragmenting(false);
      setWaitingModalLogs(initWaitingModalMarketFragmentationLog);
      setIsWaitingModalVisible(false);
    }
  };

  return (
    <>
      <DepositPage
        type="Market"
        depositAddress={depositAddress}
        setDepositAddress={setDepositAddress}
        depositAddresses={depositAddresses}
        isFragmenting={isFragmenting}
        handleDeposit={handleDeposit}
        setUseFragmenter={setUseFragmenter}
        getNewAddress={getNewAddress}
        market={market}
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
