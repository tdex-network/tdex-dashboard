import Icon from '@ant-design/icons';
import { Breadcrumb, Button, Col, notification, Row, Typography } from 'antd';
import QRCode from 'qrcode.react';
import React, { useState } from 'react';

import alertOctogon from '../../../assets/images/alert-octagon.svg';
import { ReactComponent as chevronRight } from '../../../assets/images/chevron-right.svg';
import { HOME_ROUTE } from '../../../routes/constants';
import {
  useFragmentFeeDepositsMutation,
  useGetFeeBalanceQuery,
  useGetFeeFragmenterAddressQuery,
} from '../operator.api';

const { Text, Title } = Typography;

export const FeeDeposit = (): JSX.Element => {
  const { refetch: refetchGetFeeBalance } = useGetFeeBalanceQuery();
  const { refetch: refetchGetFeeFragmenterAddress } = useGetFeeFragmenterAddressQuery();
  const [fragmentFeeDeposits] = useFragmentFeeDepositsMutation();
  const [isFragmenting, setIsFragmenting] = useState(false);
  const { data: feeFragmenterAddress } = useGetFeeFragmenterAddressQuery();

  const handleFragmentFeeDeposits = async () => {
    try {
      setIsFragmenting(true);
      // @ts-ignore
      const { data } = await fragmentFeeDeposits({ recoverAddress: '', maxFragment: 50 });
      data.on('status', async (status: any) => {
        if (status.code === 0) {
          setIsFragmenting(false);
          notification.success({ message: 'Fragmentation successful' });
          await refetchGetFeeBalance();
          await refetchGetFeeFragmenterAddress();
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
        <Breadcrumb.Item>Deposit</Breadcrumb.Item>
      </Breadcrumb>
      <Row className="panel">
        <Col span={12}>
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
              <QRCode className="qr-code" level="H" value={feeFragmenterAddress || ''} />
            </Col>
          </Row>
          <Row className="my-6">
            <Col span={21} offset={1}>
              <Text className="address" copyable>
                {feeFragmenterAddress ?? 'N/A'}
              </Text>
            </Col>
          </Row>
          <Row className="panel panel__grey text-center">
            <Col span={20} offset={2}>
              <img src={alertOctogon} alt="alert" className="mb-2" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <Row>
                <Col span={20} offset={2}>
                  <Button onClick={handleFragmentFeeDeposits} disabled={isFragmenting}>
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
