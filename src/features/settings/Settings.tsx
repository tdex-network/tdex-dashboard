import Icon from '@ant-design/icons';
import { Breadcrumb, Row, Col, Typography, Button } from 'antd';
import React from 'react';

import { useTypedSelector } from '../../app/store';
import { ReactComponent as chevronRight } from '../../assets/images/chevron-right.svg';
import { HOME_ROUTE } from '../../routes/constants';
import { Info } from '../operator/Info';
import { ListWebhooks } from '../operator/ListWebhooks';

const { Text, Title } = Typography;

export const Settings = (): JSX.Element => {
  const tdexdConnectUrl = useTypedSelector(({ settings }) => settings.tdexdConnectUrl);
  const macaroon = useTypedSelector(({ settings }) => settings.macaroonCredentials);

  return (
    <>
      <Breadcrumb separator={<Icon component={chevronRight} />} className="mb-2">
        <Breadcrumb.Item>
          <a href={HOME_ROUTE}>Dashboard</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Settings</Breadcrumb.Item>
      </Breadcrumb>
      <div className="panel">
        <div className="panel panel__grey h-100">
          <Row>
            <Col span={24}>
              <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey d-inline mr-4" level={3}>
                Clear Cache
              </Title>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button>Clear Cache</Button>
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
                List Webhooks
              </Title>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <ListWebhooks />
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
          {/**/}
          <Row>
            <Col span={24}>
              <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey d-inline mr-4" level={3}>
                Macaroon
              </Title>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Text copyable className="address">
                {macaroon || 'Not found'}
              </Text>
            </Col>
          </Row>
          {/**/}
          <Row>
            <Col span={24}>
              <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey d-inline mr-4" level={3}>
                Account
              </Title>
            </Col>
          </Row>
          <Info />
        </div>
      </div>
    </>
  );
};
