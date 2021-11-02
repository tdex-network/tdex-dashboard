import { Col, Row, Typography } from 'antd';
import QRCode from 'qrcode.react';
import React from 'react';

import { useGetFeeFragmenterAddressQuery } from '../operator.api';

const { Text, Title } = Typography;

export const FeeDeposit = (): JSX.Element => {
  const { data: feeFragmenterAddress } = useGetFeeFragmenterAddressQuery();

  return (
    <>
      <Row gutter={{ xs: 8, sm: 12, md: 16 }}>
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
          <Row>
            <Col span={12} offset={6}>
              <QRCode className="w-100 h-100" level="H" value={feeFragmenterAddress || ''} />
            </Col>
          </Row>
          <Row className="mt-6">
            <Col span={20} offset={2}>
              <Text className="white-value white-value__medium break-all" copyable>
                {feeFragmenterAddress ?? 'N/A'}
              </Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
