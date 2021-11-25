import Icon from '@ant-design/icons';
import { Breadcrumb, Row, Col, Typography, Button } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useTypedDispatch, useTypedSelector } from '../../app/store';
import { ReactComponent as chevronRight } from '../../assets/images/chevron-right.svg';
import { HOME_ROUTE, MARKET_WITHDRAW_FRAGMENTER_ROUTE } from '../../routes/constants';

import { logout, resetSettings } from './settingsSlice';

const { Text, Title } = Typography;

export const Settings = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const tdexdConnectUrl = useTypedSelector(({ settings }) => settings.tdexdConnectUrl);

  return (
    <>
      <Breadcrumb separator={<Icon component={chevronRight} />} className="mb-2">
        <Breadcrumb.Item>
          <Link to={HOME_ROUTE}>Dashboard</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Settings</Breadcrumb.Item>
      </Breadcrumb>
      <div className="panel">
        <div className="panel panel__grey h-100">
          <Row>
            <Col span={24}>
              <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey d-inline mr-4" level={3}>
                Log Out
              </Title>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button onClick={() => dispatch(logout())} className="w-100">
                Log Out
              </Button>
            </Col>
          </Row>
          {/**/}
          <Row>
            <Col span={24}>
              <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey d-inline mr-4" level={3}>
                Clear Cache
              </Title>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button onClick={() => dispatch(resetSettings())}>Clear Cache</Button>
            </Col>
          </Row>
          {/**/}
          <Row>
            <Col span={24}>
              <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey d-inline mr-4" level={3}>
                Recovery Withdraw Markets
              </Title>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button onClick={() => navigate(MARKET_WITHDRAW_FRAGMENTER_ROUTE)}>
                Recovery Withdraw Markets
              </Button>
            </Col>
          </Row>
          {/**/}
          <Row>
            <Col span={24}>
              <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey d-inline mr-4" level={3}>
                Change password
              </Title>
            </Col>
          </Row>
          {/**/}
          <Row>
            <Col span={24}>
              <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey d-inline mr-4" level={3}>
                Default currency
              </Title>
            </Col>
          </Row>
          {/**/}
          <Row>
            <Col span={24}>
              <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey d-inline mr-4" level={3}>
                Explorers endpoints
              </Title>
            </Col>
          </Row>
          {/**/}
          <Row>
            <Col span={24}>
              <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey d-inline mr-4" level={3}>
                Tdexd Connect Url
              </Title>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Text copyable className="address">
                {tdexdConnectUrl || 'Not found'}
              </Text>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
