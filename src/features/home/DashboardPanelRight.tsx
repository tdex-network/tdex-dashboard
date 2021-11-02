import './dashboardPanelRight.less';
import Icon from '@ant-design/icons';
import { Button, Col, Row, Space, Typography } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { ReactComponent as depositIcon } from '../../assets/images/deposit-green.svg';
import { FEE_DEPOSIT_ROUTE } from '../../routes/constants';
import { WithdrawFeeForm } from '../operator/WithdrawFeeForm';
import { useGetFeeBalanceQuery, useGetFeeFragmenterAddressQuery } from '../operator/operator.api';

export const DashboardPanelRight = (): JSX.Element => {
  const { Title } = Typography;
  const history = useHistory();
  const { data: feeBalance } = useGetFeeBalanceQuery();
  const { data: feeFragmenterAddress } = useGetFeeFragmenterAddressQuery();

  return (
    <Space direction="vertical" size={30} id="dashboard-panel-right-container" className="panel">
      <Row>
        <Title className="title-grey" level={3}>
          Fee Account Balance
        </Title>
        <Col className="white-value white-value__big" span={24}>
          {feeBalance?.totalBalance ?? 'N/A'}
        </Col>
      </Row>
      <Row>
        <Title className="title-grey" level={3}>
          Fee Account Address
        </Title>
        <Col span={24}>
          <div className="fee-address-container white-value white-value__medium break-all">
            {feeFragmenterAddress ?? 'N/A'}
          </div>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 12, md: 16 }}>
        <Col span={12}>
          <WithdrawFeeForm />
        </Col>
        <Col span={12}>
          <Button
            onClick={() => history.push(FEE_DEPOSIT_ROUTE)}
            className="w-100 justify-center"
            icon={<Icon component={depositIcon} />}
          >
            DEPOSIT
          </Button>
        </Col>
      </Row>
    </Space>
  );
};
