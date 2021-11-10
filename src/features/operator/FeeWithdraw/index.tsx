import Icon from '@ant-design/icons';
import { Breadcrumb, Col, Row, Typography } from 'antd';
import React from 'react';

import { ReactComponent as chevronRight } from '../../../assets/images/chevron-right.svg';
import { HOME_ROUTE } from '../../../routes/constants';
//import { useWithdrawFeeMutation } from '../operator.api';

const { Title } = Typography;

export const FeeWithdraw = (): JSX.Element => {
  // const [withdrawFee, { error: withdrawFeeError, isLoading: withdrawFeeIsLoading }] =
  //   useWithdrawFeeMutation();

  return (
    <>
      <Breadcrumb separator={<Icon component={chevronRight} />} className="mb-2">
        <Breadcrumb.Item>
          <a href={HOME_ROUTE}>Dashboard</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Withdraw</Breadcrumb.Item>
      </Breadcrumb>
      <Row className="panel">
        <Col span={12} className="pr-10">
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
        <Col span={12}>AA</Col>
      </Row>
    </>
  );
};
