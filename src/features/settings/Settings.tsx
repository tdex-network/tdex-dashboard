import Icon from '@ant-design/icons';
import type { RadioChangeEvent } from 'antd';
import { Breadcrumb, Row, Col, Typography, Button, Radio, notification, Select } from 'antd';
import type { NetworkString } from 'ldk';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { configRecord } from '../../app/config';
import type { RootState } from '../../app/store';
import { useTypedDispatch, useTypedSelector } from '../../app/store';
import { ReactComponent as chevronRight } from '../../assets/images/chevron-right.svg';
import { HOME_ROUTE, MARKET_WITHDRAW_FRAGMENTER_ROUTE } from '../../routes/constants';
import { LBTC_UNITS, CURRENCIES } from '../../utils';
import { useReloadUtxosMutation } from '../operator/operator.api';

import { ExplorersLiquidApiForm } from './ExplorersLiquidApiForm';
import { ExplorersLiquidUiForm } from './ExplorersLiquidUiForm';
import { FixedAssets } from './FixedAssets';
import {
  setExplorerLiquidAPI,
  setExplorerLiquidUI,
  setLbtcUnit,
  setNetwork,
  setCurrency,
} from './settingsSlice';

const { Text, Title } = Typography;
const { Option } = Select;

export const Settings = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const { tdexdConnectUrl, lbtcUnit, network, currency } = useTypedSelector(
    ({ settings }: RootState) => settings
  );
  const [reloadUtxos, { isLoading: isReloadUtxosLoading }] = useReloadUtxosMutation();

  const handleBitcoinUnitChange = (ev: RadioChangeEvent) => dispatch(setLbtcUnit(ev.target.value));

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
              <Row>
                <Col span={12}>
                  <Select
                    value={currency.value}
                    onChange={(currencyValue: string) => {
                      const selectedCurrency = CURRENCIES.find(
                        (currency) => currency.value === currencyValue
                      );
                      selectedCurrency && dispatch(setCurrency(selectedCurrency));
                    }}
                  >
                    {CURRENCIES.map((currency, index) => {
                      return (
                        <Option key={index} value={currency.value}>{`${currency.value.toUpperCase()} - ${
                          currency.name
                        }`}</Option>
                      );
                    })}
                  </Select>
                </Col>
              </Row>
            </div>
            {/**/}
            <div className="mb-4">
              <Row>
                <Col span={24}>
                  <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey" level={3}>
                    Network
                  </Title>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <Select
                    value={network}
                    onChange={(network: NetworkString) => {
                      dispatch(setNetwork(network));
                      dispatch(setExplorerLiquidAPI(configRecord[network].explorerLiquidAPI));
                      dispatch(setExplorerLiquidUI(configRecord[network].explorerLiquidUI));
                    }}
                  >
                    <Option value="liquid">Liquid</Option>
                    <Option value="testnet">Testnet</Option>
                    <Option value="regtest">Regtest</Option>
                  </Select>
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
                  <Text copyable className="address break-all">
                    {tdexdConnectUrl || 'Not found'}
                  </Text>
                </Col>
              </Row>
            </div>
            {/**/}
            <div className="mb-4">
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
          </div>
        </Col>
      </Row>
    </>
  );
};
