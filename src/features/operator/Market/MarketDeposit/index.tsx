import Icon from '@ant-design/icons';
import { Breadcrumb, Button, Checkbox, Col, notification, Row, Typography } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import QRCode from 'qrcode.react';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import type { MarketInfo } from '../../../../api-spec/generated/js/operator_pb';
import { useTypedSelector } from '../../../../app/store';
import alertOctogon from '../../../../assets/images/alert-octagon.svg';
import { ReactComponent as chevronRight } from '../../../../assets/images/chevron-right.svg';
import { HOME_ROUTE } from '../../../../routes/constants';
import {
  useMarketFragmenterSplitFundsMutation,
  useGetMarketFragmenterAddressQuery,
  useListDepositsQuery,
  useGetMarketAddressQuery,
  useClaimMarketDepositsMutation,
} from '../../operator.api';

const { Text, Title } = Typography;

export const MarketDeposit = (): JSX.Element => {
  const { state } = useLocation() as { state: { marketInfo: MarketInfo.AsObject } };
  const { explorerLiquidAPI } = useTypedSelector(({ settings }) => settings);
  const [useFragmenter, setUseFragmenter] = useState(false);
  const [marketFragmenterSplitFunds] = useMarketFragmenterSplitFundsMutation();
  const [isFragmenting, setIsFragmenting] = useState(false);
  const { data: marketFragmenterAddress, refetch: refetchGetMarketFragmenterAddress } =
    useGetMarketFragmenterAddressQuery({ numOfAddresses: 1 });
  //
  const { data: marketAddress } = useGetMarketAddressQuery({
    baseAsset: state?.marketInfo.market?.baseAsset || '',
    quoteAsset: state?.marketInfo.market?.quoteAsset || '',
  });
  const [claimMarketDeposits] = useClaimMarketDepositsMutation();
  //
  const { refetch: refetchDeposits } = useListDepositsQuery({
    accountIndex: state?.marketInfo.accountIndex,
  });
  const address = useFragmenter
    ? marketFragmenterAddress?.[0].address || 'N/A'
    : marketAddress?.[0].address || 'N/A';

  const handleFragmentMarketDeposits = async () => {
    try {
      setIsFragmenting(true);
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
          setIsFragmenting(false);
          notification.success({ message: 'Fragmentation successful' });
          await refetchGetMarketFragmenterAddress();
          await refetchDeposits();
        } else {
          console.error('status', status);
          notification.error({ message: status.details });
          setIsFragmenting(false);
        }
      });
    } catch (err) {
      // @ts-ignore
      notification.error({ message: err.message });
    }
  };

  const handleMarketDeposits = async () => {
    try {
      setIsFragmenting(true);
      const response = await fetch(`${explorerLiquidAPI}/address/${address}/utxo`);
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
    } catch (err) {
      setIsFragmenting(false);
      // @ts-ignore
      notification.error({ message: err.message, key: err.message });
    }
  };

  const handleCheckboxChange = (ev: CheckboxChangeEvent) => {
    setUseFragmenter(ev.target.checked);
  };

  return (
    <>
      <Breadcrumb separator={<Icon component={chevronRight} />} className="mb-2">
        <Breadcrumb.Item>
          <Link to={HOME_ROUTE}>Dashboard</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Market Deposit</Breadcrumb.Item>
      </Breadcrumb>
      <Row className="panel">
        <Col span={12} className="pr-10">
          <Button className="w-100 mb-4">CREATE NEW DEPOSIT ADDRESS</Button>
          <Title level={4}>READ CAREFULLY!</Title>
          <Checkbox onChange={handleCheckboxChange} className="dm-sans dm-sans__x mt-4">
            I want to use the Tdex fragmenter
          </Checkbox>
        </Col>
        <Col span={12}>
          <Row className="panel panel__grey">
            <Col span={8} offset={8}>
              <QRCode className="qr-code" level="H" value={address} />
            </Col>
          </Row>
          <Row className="my-6">
            <Col span={21} offset={1}>
              <Text className="address" copyable>
                {address}
              </Text>
            </Col>
          </Row>
          <Row className="panel panel__grey text-center">
            <Col span={20} offset={2}>
              <img src={alertOctogon} alt="alert" className="mb-2" />
              <p>
                The pending transaction will appear here, once you are done depositing assets click on CONFIRM
                to claim your deposit.
              </p>
              <Row>
                <Col span={20} offset={2}>
                  <Button
                    onClick={useFragmenter ? handleFragmentMarketDeposits : handleMarketDeposits}
                    loading={isFragmenting}
                  >
                    CONFIRM DEPOSIT
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
