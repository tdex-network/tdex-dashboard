import Icon, { InfoCircleOutlined } from '@ant-design/icons';
import { Breadcrumb, Row, Col, Typography, Tooltip, Grid } from 'antd';
import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import type { RootState } from '../../app/store';
import { useTypedSelector } from '../../app/store';
import { ReactComponent as chevronRight } from '../../assets/images/chevron-right.svg';
import { HOME_ROUTE } from '../../routes/constants';

import { ActionButtons } from './ActionButtons';
import { DaemonVersion } from './DaemonVersion';
import { ExplorersLiquidApiForm } from './ExplorersLiquidApiForm';
import { ExplorersLiquidUiForm } from './ExplorersLiquidUiForm';
import { NetworkSelect } from './NetworkSelect';

const { Text, Title } = Typography;
const { useBreakpoint } = Grid;

export const Settings = (): JSX.Element => {
  const { tdexdConnectUrl } = useTypedSelector(({ settings }: RootState) => settings);
  const screens = useBreakpoint();

  return (
    <>
      <Row>
        <Col sm={{ span: 20, offset: 2 }} lg={{ span: 18, offset: 3 }}>
          <Breadcrumb separator={<Icon component={chevronRight} />}>
            <Breadcrumb.Item>
              <Link to={HOME_ROUTE}>Dashboard</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>User Settings</Breadcrumb.Item>
          </Breadcrumb>

          <div className="panel">
            <Row gutter={{ xs: 20, sm: 30, md: 50, lg: 60 }} className="mb-8">
              <Col xs={24} md={12}>
                <ActionButtons />
                {/*<Row className="my-4">
                  <Col span={24}>
                    <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey" level={3}>
                      Change Password
                    </Title>
                    <ChangePasswordForm />
                  </Col>
                </Row>*/}
              </Col>
              <Col xs={24} md={12} className={classNames({ 'mt-4': !screens.md })}>
                <NetworkSelect />
                <ExplorersLiquidApiForm />
                <ExplorersLiquidUiForm />
              </Col>
            </Row>
            {/**/}
            <div className="mb-4 panel panel__grey">
              <Row>
                <Col span={24}>
                  <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey" level={3}>
                    Tdexd Connect Url
                  </Title>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Text copyable className="address break-all">
                    {tdexdConnectUrl || 'Not found'}
                  </Text>
                </Col>
              </Row>
            </div>
            {/**/}
            {(window as any).TRADER_HIDDEN_SERVICE ? (
              <div className="mb-4 panel panel__grey">
                <Row>
                  <Col span={24}>
                    <Title
                      className="d-inline-flex dm-sans dm-sans__x dm-sans__bold dm-sans__grey mr-2"
                      level={3}
                    >
                      Tor Hidden Service of Trader Interface
                    </Title>
                    <Tooltip title="Used by TDEX trader's applications to connect and make trades">
                      <InfoCircleOutlined className="grey" />
                    </Tooltip>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Text copyable className="break-all">
                      {(window as any).TRADER_HIDDEN_SERVICE}
                    </Text>
                  </Col>
                </Row>
              </div>
            ) : null}
            {/**/}
            <DaemonVersion />
          </div>
        </Col>
      </Row>
    </>
  );
};
