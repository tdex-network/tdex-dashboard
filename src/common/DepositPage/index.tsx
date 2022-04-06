import './depositPage.less';
import Icon from '@ant-design/icons';
import { Breadcrumb, Button, Checkbox, Col, Row, Typography } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import classNames from 'classnames';
import QRCode from 'qrcode.react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import type { AddressWithBlindingKey, Market } from '../../api-spec/protobuf/gen/js/tdex/v1/types_pb';
import type { RootState } from '../../app/store';
import { useTypedSelector } from '../../app/store';
import alertOctogon from '../../assets/images/alert-octagon.svg';
import { ReactComponent as chevronRight } from '../../assets/images/chevron-right.svg';
import { HOME_ROUTE, MARKET_OVERVIEW_ROUTE } from '../../routes/constants';
import { getAssetDataFromRegistry } from '../../utils';

const { Text, Title } = Typography;

interface DepositPageProps {
  type: 'Fee' | 'Market';
  depositAddress: string;
  setDepositAddress: React.Dispatch<React.SetStateAction<string>>;
  depositAddresses: AddressWithBlindingKey.AsObject[];
  isFragmenting: boolean;
  handleDeposit: () => void;
  setUseFragmenter: (checked: boolean) => void;
  getNewAddress: () => void;
  market?: Market.AsObject;
}

export const DepositPage = ({
  type,
  depositAddress,
  setDepositAddress,
  depositAddresses,
  isFragmenting,
  handleDeposit,
  setUseFragmenter,
  getNewAddress,
  market,
}: DepositPageProps): JSX.Element => {
  const navigate = useNavigate();
  const assetRegistry = useTypedSelector(({ settings }: RootState) => settings.assets);
  const lbtcUnit = useTypedSelector(({ settings }) => settings.lbtcUnit);
  const network = useTypedSelector(({ settings }) => settings.network);
  const handleOptInFragmentationChange = (ev: CheckboxChangeEvent) => {
    setUseFragmenter(ev.target.checked);
  };

  return (
    <>
      <Breadcrumb separator={<Icon component={chevronRight} />} className="mb-2">
        <Breadcrumb.Item>
          <Link to={HOME_ROUTE}>Dashboard</Link>
        </Breadcrumb.Item>
        {market && (
          // We can't use Link to pass market state because of HashRouter limitation
          <Breadcrumb.Item>
            <Button
              type="link"
              className="dm-sans dm-sans__x"
              onClick={() => {
                const baseAsset = getAssetDataFromRegistry(
                  market?.baseAsset || '',
                  assetRegistry[network],
                  lbtcUnit
                );
                const quoteAsset = getAssetDataFromRegistry(
                  market?.quoteAsset || '',
                  assetRegistry[network],
                  lbtcUnit
                );
                navigate(MARKET_OVERVIEW_ROUTE, {
                  state: {
                    baseAsset,
                    quoteAsset,
                  },
                });
              }}
            >
              Market Overview
            </Button>
          </Breadcrumb.Item>
        )}
        <Breadcrumb.Item>{`${type} Deposit`}</Breadcrumb.Item>
      </Breadcrumb>
      <Row className="panel">
        <Col span={12} className="pr-10">
          <Button className="w-100 mb-4 btn-animate" onClick={getNewAddress}>
            CREATE NEW DEPOSIT ADDRESS
          </Button>
          <Checkbox onChange={handleOptInFragmentationChange} className="dm-sans dm-sans__x mt-4">
            Advanced: split deposit into multiple fragments for concurrent trade support
          </Checkbox>
          <div className="mt-4">
            <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey" level={3}>
              Previous addresses
            </Title>
            <div
              className={classNames('panel panel__grey scrollbar', {
                'deposit-list': depositAddresses.length,
              })}
            >
              {depositAddresses.length
                ? depositAddresses
                    ?.slice()
                    .reverse()
                    .map((addr, index) => {
                      return (
                        <Row key={addr.address} className="mb-2" gutter={{ xs: 8, sm: 10, md: 12, lg: 14 }}>
                          <Col span={2}>{`#${depositAddresses?.length - index - 1}`}</Col>
                          <Col span={17}>
                            <span className="break-all">{addr.address}</span>
                          </Col>
                          <Col span={5} className="d-flex justify-end">
                            <Button
                              className="w-100"
                              onClick={() => setDepositAddress(addr.address)}
                              disabled={isFragmenting}
                            >
                              {depositAddress === addr.address ? 'SELECTED' : 'SELECT'}
                            </Button>
                          </Col>
                        </Row>
                      );
                    })
                : 'Your generated addresses will appear here'}
            </div>
          </div>
        </Col>
        <Col span={12}>
          <Row className="panel panel__grey panel__top deposit-address-frame">
            {depositAddress ? (
              <Col span={8}>
                <QRCode className="qr-code" level="H" value={depositAddress} />
              </Col>
            ) : (
              <p className="dm-sans dm-sans__x dm-sans__bold">Please generate a new address</p>
            )}
          </Row>
          <Row className="py-6 deposit-address">
            <Col span={21} offset={1}>
              {depositAddress ? (
                <Text className="address" copyable>
                  {depositAddress}
                </Text>
              ) : null}
            </Col>
          </Row>
          <Row className="panel panel__grey panel__bottom text-center">
            <Col span={20} offset={2}>
              <img src={alertOctogon} alt="alert" className="mb-2" />
              <p>
                The pending transaction will appear here, once you are done depositing assets click on CONFIRM
                to claim your deposit.
              </p>
              <Row>
                <Col span={20} offset={2}>
                  <Button onClick={handleDeposit} loading={isFragmenting}>
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
