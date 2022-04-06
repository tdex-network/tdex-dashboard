import { notification } from 'antd';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import type {
  MarketInfo,
  FragmenterSplitFundsReply,
} from '../../../../api-spec/protobuf/gen/js/tdex-daemon/v1/operator_pb';
import type { AddressWithBlindingKey } from '../../../../api-spec/protobuf/gen/js/tdex/v1/types_pb';
import { useTypedDispatch, useTypedSelector } from '../../../../app/store';
import { AnimatedEllipsis } from '../../../../common/AnimatedEllipsis';
import { DepositPage } from '../../../../common/DepositPage';
import { WaitingModal } from '../../../../common/WaitingModal';
import {
  operatorApi,
  useMarketFragmenterSplitFundsMutation,
  useListDepositsQuery,
  useClaimMarketDepositsMutation,
  useListMarketAddressesQuery,
  useListMarketFragmenterAddressesQuery,
} from '../../operator.api';

export const MarketDeposit = (): JSX.Element => {
  const dispatch = useTypedDispatch();
  const { state } = useLocation() as { state: { marketInfo: MarketInfo.AsObject } };
  const market = {
    baseAsset: state?.marketInfo?.market?.baseAsset || '',
    quoteAsset: state?.marketInfo?.market?.quoteAsset || '',
  };
  const { explorerLiquidAPI } = useTypedSelector(({ settings }) => settings);
  const [marketFragmenterSplitFunds] = useMarketFragmenterSplitFundsMutation();
  const [skipGetMarketFragmenterAddress, setSkipGetMarketFragmenterAddress] = useState(true);
  const { data: listMarketAddresses, refetch: refetchListMarketAddresses } =
    useListMarketAddressesQuery(market);
  const { data: listMarketFragmenterAddresses, refetch: refetchListMarketFragmenterAddresses } =
    useListMarketFragmenterAddressesQuery(undefined, {
      skip: skipGetMarketFragmenterAddress,
    });
  const [claimMarketDeposits] = useClaimMarketDepositsMutation();
  const { data: deposits } = useListDepositsQuery({
    accountIndex: state?.marketInfo.accountIndex,
  });
  const [useFragmenter, setUseFragmenter] = useState(false);
  const [isFragmenting, setIsFragmenting] = useState(false);
  const [marketAddress, setMarketAddress] = useState<string>('');
  const [marketFragmenterAddress, setMarketFragmenterAddress] = useState<string>('');
  const [depositAddress, setDepositAddress] = useState<string>('');
  const [depositAddresses, setDepositAddresses] = useState<AddressWithBlindingKey.AsObject[]>([]);

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
          operatorApi.endpoints.getMarketFragmenterAddress.initiate(
            { numOfAddresses: 1 },
            { forceRefetch: true }
          )
        ).unwrap();
        setDepositAddress(marketFragmenterAddress?.[0].address);
        setMarketFragmenterAddress(marketFragmenterAddress?.[0].address);
      } catch (err) {
        console.error(err);
      }
      refetchListMarketFragmenterAddresses();
    } else {
      try {
        const marketAddress = await dispatch(
          operatorApi.endpoints.getMarketAddress.initiate(market, { forceRefetch: true })
        ).unwrap();
        setDepositAddress(marketAddress?.[0].address);
        setMarketAddress(marketAddress?.[0].address);
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
    const marketFragmenterSplitFundsStreamPromise = new Promise((resolve, reject) => {
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
    await marketFragmenterSplitFundsStreamPromise;
  };

  const handleClaimMarketDeposits = async () => {
    const response = await fetch(`${explorerLiquidAPI}/address/${depositAddress}/utxo`);
    if (response.ok) {
      const utxoList = await response.json();
      if (!utxoList.length) throw new Error('No deposit transaction found');
      // Check confirmation
      utxoList.forEach((utxo: any) => {
        if (!utxo.status.confirmed) {
          throw new Error('Deposit transaction not confirmed');
        }
      });
      // Check if deposit already processed by daemon
      const foundArr = utxoList.map((utxo: any) =>
        deposits?.find((d) => d.utxo?.outpoint?.hash === utxo.txid)
      );
      if (foundArr.every(Boolean)) {
        throw new Error('Deposit already processed');
      }
      // @ts-ignore
      const { error } = await claimMarketDeposits({
        outpointsList: utxoList.map((u: any) => ({ hash: u.txid, index: u.vout })),
        market,
      });
      if (error) throw new Error(error);
      notification.success({ message: 'Deposit successful', key: 'Deposit successful' });
    } else {
      notification.error({
        message: `${response.url} returned status ${response.status}`,
        key: 'utxo request error',
      });
    }
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
