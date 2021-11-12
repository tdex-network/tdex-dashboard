import Icon from '@ant-design/icons';
import { Breadcrumb, Button, Col, notification, Row, Typography } from 'antd';
import QRCode from 'qrcode.react';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import alertOctogon from '../../../../assets/images/alert-octagon.svg';
import { ReactComponent as chevronRight } from '../../../../assets/images/chevron-right.svg';
import type { Asset } from '../../../../domain/asset';
import { HOME_ROUTE } from '../../../../routes/constants';
import { useFragmentMarketDepositsMutation, useGetFeeFragmenterAddressQuery } from '../../operator.api';

const { Text, Title } = Typography;

export const MarketDeposit = (): JSX.Element => {
  const { state } = useLocation() as { state: { baseAsset: Asset; quoteAsset: Asset } };
  const [fragmentMarketDeposits] = useFragmentMarketDepositsMutation();
  const [isFragmenting, setIsFragmenting] = useState(false);
  const { data: marketFragmenterAddress, refetch: refetchGetMarketFragmenterAddress } =
    useGetFeeFragmenterAddressQuery();

  const handleFragmentMarketDeposits = async () => {
    try {
      setIsFragmenting(true);
      // @ts-ignore
      const { data } = await fragmentMarketDeposits({
        market: { baseAsset: state?.baseAsset?.asset_id, quoteAsset: state?.quoteAsset?.asset_id },
        recoverAddress: '',
      });
      data.on('status', async (status: any) => {
        if (status.code === 0) {
          setIsFragmenting(false);
          notification.success({ message: 'Fragmentation successful' });
          await refetchGetMarketFragmenterAddress();
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

  return (
    <>
      <Breadcrumb separator={<Icon component={chevronRight} />} className="mb-2">
        <Breadcrumb.Item>
          <a href={HOME_ROUTE}>Dashboard</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Market Deposit</Breadcrumb.Item>
      </Breadcrumb>
      <Row className="panel">
        <Col span={12} className="pr-10">
          <Button className="w-100 mb-4">CREATE NEW DEPOSIT ADDRESS</Button>
          <Title level={4}>READ CAREFULLY!</Title>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.,Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.,,- It has survived not only five centuries,-
            but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <p>
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
        </Col>
        <Col span={12}>
          <Row className="panel panel__grey">
            <Col span={8} offset={8}>
              <QRCode className="qr-code" level="H" value={marketFragmenterAddress || ''} />
            </Col>
          </Row>
          <Row className="my-6">
            <Col span={21} offset={1}>
              <Text className="address" copyable>
                {marketFragmenterAddress ?? 'N/A'}
              </Text>
            </Col>
          </Row>
          <Row className="panel panel__grey text-center">
            <Col span={20} offset={2}>
              <img src={alertOctogon} alt="alert" className="mb-2" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <Row>
                <Col span={20} offset={2}>
                  <Button onClick={handleFragmentMarketDeposits} loading={isFragmenting}>
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
