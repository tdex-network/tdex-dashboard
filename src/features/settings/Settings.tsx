import Icon from '@ant-design/icons';
import { Breadcrumb, Row, Col, Typography, Button, notification } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import type { RootState } from '../../app/store';
import { useTypedSelector } from '../../app/store';
import { ReactComponent as chevronRight } from '../../assets/images/chevron-right.svg';
import { HOME_ROUTE, MARKET_WITHDRAW_FRAGMENTER_ROUTE } from '../../routes/constants';
import { useReloadUtxosMutation } from '../operator/operator.api';

import { DaemonVersion } from './DaemonVersion';
import { DefaultCurrencyRadioButtons } from './DefaultCurrencyRadioButtons';
import { ExplorersLiquidApiForm } from './ExplorersLiquidApiForm';
import { ExplorersLiquidUiForm } from './ExplorersLiquidUiForm';
import { FavoriteBitcoinUnitsRadioButtons } from './FavoriteBitcoinUnitsRadioButtons';
import { FixedAssets } from './FixedAssets';
import { NetworkSelect } from './NetworkSelect';

const { Text, Title } = Typography;

export const Settings = (): JSX.Element => {
  const navigate = useNavigate();
  const { tdexdConnectUrl } = useTypedSelector(({ settings }: RootState) => settings);
  const [reloadUtxos, { isLoading: isReloadUtxosLoading }] = useReloadUtxosMutation();

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
            <Row gutter={{ xs: 30, sm: 40, md: 50, lg: 70 }}>
              <Col span={12}>
                <FavoriteBitcoinUnitsRadioButtons />
                <DefaultCurrencyRadioButtons />
                {/**/}
                <div className="mb-4">
                  <Row>
                    <Col span={24}>
                      <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey" level={3}>
                        Reload Utxos
                      </Title>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Button
                        onClick={async () => {
                          try {
                            const res = await reloadUtxos();
                            // @ts-ignore
                            if (res?.error) throw new Error(res?.error);
                            notification.success({ message: 'Utxos reloaded', key: 'Utxos reloaded' });
                          } catch (err) {
                            // @ts-ignore
                            notification.error({ message: err.message, key: err.message });
                          }
                        }}
                        loading={isReloadUtxosLoading}
                      >
                        Reload Utxos
                      </Button>
                    </Col>
                  </Row>
                </div>
                {/**/}
                <div className="mb-4">
                  <Row>
                    <Col span={24}>
                      <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey" level={3}>
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
                </div>
              </Col>
              <Col span={12}>
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
            <div className="mb-4 panel panel__grey">
              <Row>
                <Col span={24}>
                  <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey" level={3}>
                    Daemon fixed Assets
                  </Title>
                </Col>
              </Row>
              <FixedAssets />
            </div>
            {/**/}
            <DaemonVersion />
          </div>
        </Col>
      </Row>
    </>
  );
};
