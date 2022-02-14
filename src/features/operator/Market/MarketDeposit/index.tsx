import { notification } from 'antd';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import type { MarketInfo, FragmenterSplitFundsReply } from '../../../../api-spec/generated/js/operator_pb';
import { useTypedSelector } from '../../../../app/store';
import { AnimatedEllipsis } from '../../../../common/AnimatedEllipsis';
import { DepositPage } from '../../../../common/DepositPage';
import { WaitingModal } from '../../../../common/WaitingModal';
import {
  useMarketFragmenterSplitFundsMutation,
  useGetMarketFragmenterAddressQuery,
  useListDepositsQuery,
  useGetMarketAddressQuery,
  useClaimMarketDepositsMutation,
  useListMarketAddressesQuery,
  useListMarketFragmenterAddressesQuery,
} from '../../operator.api';

export const MarketDeposit = (): JSX.Element => {
  const { state } = useLocation() as { state: { marketInfo: MarketInfo.AsObject } };
  const market = {
    baseAsset: state?.marketInfo?.market?.baseAsset || '',
    quoteAsset: state?.marketInfo?.market?.quoteAsset || '',
  };
  const { explorerLiquidAPI } = useTypedSelector(({ settings }) => settings);
  const [marketFragmenterSplitFunds] = useMarketFragmenterSplitFundsMutation();
  const [skipGetMarketFragmenterAddress, setSkipGetMarketFragmenterAddress] = useState(true);
  const { data: marketFragmenterAddress, refetch: refetchMarketFragmenterAddress } =
    useGetMarketFragmenterAddressQuery({ numOfAddresses: 1 }, { skip: skipGetMarketFragmenterAddress });
  const { data: marketAddress, refetch: refetchMarketAddress } = useGetMarketAddressQuery(market);
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
  const [depositAddress, setDepositAddress] = useState<string>(
    useFragmenter ? marketFragmenterAddress?.[0].address || 'N/A' : marketAddress?.[0].address || 'N/A'
  );
  useEffect(() => {
    if (!useFragmenter) setDepositAddress(marketAddress?.[0].address || '');
  }, [marketAddress, useFragmenter]);
  useEffect(() => {
    if (useFragmenter) setDepositAddress(marketFragmenterAddress?.[0].address || '');
  }, [marketFragmenterAddress, useFragmenter]);
  const depositAddresses = useFragmenter ? listMarketFragmenterAddresses || [] : listMarketAddresses || [];

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
        getNewAddress={() => {
          if (useFragmenter) {
            refetchMarketFragmenterAddress();
            refetchListMarketFragmenterAddresses();
          } else {
            refetchMarketAddress();
            refetchListMarketAddresses();
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
