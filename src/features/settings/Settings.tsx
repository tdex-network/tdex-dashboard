import Icon from '@ant-design/icons';
import type { RadioChangeEvent } from 'antd';
import { Breadcrumb, Row, Col, Typography, Button, Radio, notification } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import type { RootState } from '../../app/store';
import { useTypedDispatch, useTypedSelector } from '../../app/store';
import { ReactComponent as chevronRight } from '../../assets/images/chevron-right.svg';
import { HOME_ROUTE, MARKET_WITHDRAW_FRAGMENTER_ROUTE } from '../../routes/constants';
import { LBTC_UNITS } from '../../utils';
import { liquidApi } from '../liquid.api';
import { operatorApi, useReloadUtxosMutation } from '../operator/operator.api';
import { walletApi } from '../wallet/wallet.api';
import { walletUnlockerApi } from '../walletUnlocker/walletUnlocker.api';

import { ExplorersLiquidApiForm } from './ExplorersLiquidApiForm';
import { ExplorersLiquidUiForm } from './ExplorersLiquidUiForm';
import { disconnectProxy, logout, resetSettings, setLbtcUnit } from './settingsSlice';

const { Text, Title } = Typography;

export const Settings = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const { tdexdConnectUrl, lbtcUnit, useProxy } = useTypedSelector(({ settings }: RootState) => settings);
  const [reloadUtxos, { isLoading: isReloadUtxosLoading }] = useReloadUtxosMutation();

  const handleBitcoinUnitChange = (ev: RadioChangeEvent) => dispatch(setLbtcUnit(ev.target.value));

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
          <div className="mb-4">
            <Row>
              <Col span={24}>
                <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey" level={3}>
                  Favorite Bitcoin Unit
                </Title>
              </Col>
            </Row>
            <Row>
              <Col>
                <Radio.Group onChange={handleBitcoinUnitChange} value={lbtcUnit}>
                  <Radio.Button value={LBTC_UNITS[0]}>L-BTC</Radio.Button>
                  <Radio.Button value={LBTC_UNITS[1]}>L-mBTC</Radio.Button>
                  <Radio.Button value={LBTC_UNITS[2]}>L-bits</Radio.Button>
                  <Radio.Button value={LBTC_UNITS[3]}>L-sats</Radio.Button>
                </Radio.Group>
              </Col>
            </Row>
          </div>
          {/**/}
          <div className="mb-4">
            <Row>
              <Col span={24}>
                <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey" level={3}>
                  Log Out
                </Title>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  onClick={async () => {
                    if (useProxy) {
                      try {
                        // Close proxy connection to avoid conflict
                        await dispatch(disconnectProxy()).unwrap();
                      } catch (err) {
                        console.error(err);
                      }
                    }
                    dispatch(logout());
                    // Reset the APIs state completely
                    dispatch(liquidApi.util.resetApiState());
                    dispatch(operatorApi.util.resetApiState());
                    dispatch(walletUnlockerApi.util.resetApiState());
                    dispatch(walletApi.util.resetApiState());
                  }}
                  className="w-100"
                >
                  Log Out
                </Button>
              </Col>
            </Row>
          </div>
          {/**/}
          <div className="mb-4">
            <Row>
              <Col span={24}>
                <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey" level={3}>
                  Clear Cache
                </Title>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  onClick={async () => {
                    if (useProxy) {
                      try {
                        // Close proxy connection to avoid conflict
                        await dispatch(disconnectProxy()).unwrap();
                      } catch (err) {
                        console.error(err);
                      }
                    }
                    dispatch(resetSettings());
                    // Reset the APIs state completely
                    dispatch(liquidApi.util.resetApiState());
                    dispatch(operatorApi.util.resetApiState());
                    dispatch(walletUnlockerApi.util.resetApiState());
                    dispatch(walletApi.util.resetApiState());
                  }}
                >
                  Clear Cache
                </Button>
              </Col>
            </Row>
          </div>
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
          {/**/}
          <div className="mb-4">
            <Row>
              <Col span={24}>
                <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey" level={3}>
                  Change password
                </Title>
              </Col>
            </Row>
          </div>
          {/**/}
          <div className="mb-4">
            <Row>
              <Col span={24}>
                <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey" level={3}>
                  Default currency
                </Title>
              </Col>
            </Row>
          </div>
          {/**/}
          <div className="mb-4">
            <Row>
              <Col span={24}>
                <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey" level={3}>
                  Liquid explorer API endpoints
                </Title>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <ExplorersLiquidApiForm />
              </Col>
            </Row>
          </div>
          {/**/}
          <div className="mb-4">
            <Row>
              <Col span={24}>
                <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey" level={3}>
                  Liquid explorer UI endpoints
                </Title>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <ExplorersLiquidUiForm />
              </Col>
            </Row>
          </div>
          {/**/}
          <div className="mb-4">
            <Row>
              <Col span={24}>
                <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey" level={3}>
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
      </div>
    </>
  );
};
