import './depositPage.less';
import Icon from '@ant-design/icons';
import { Breadcrumb, Button, Col, Grid, Row, Typography } from 'antd';
import classNames from 'classnames';
import { QRCodeSVG } from 'qrcode.react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import type { Market } from '../../api-spec/protobuf/gen/js/tdex/v1/types_pb';
import type { AddressWithBlindingKey } from '../../api-spec/protobuf/gen/js/tdex-daemon/v1/types_pb';
import type { RootState } from '../../app/store';
import { useTypedSelector } from '../../app/store';
import alertOctogon from '../../assets/images/alert-octagon.svg';
import { ReactComponent as chevronRight } from '../../assets/images/chevron-right.svg';
import { HOME_ROUTE, MARKET_OVERVIEW_ROUTE } from '../../routes/constants';
import { assetIdToTicker, getAssetDataFromRegistry, LBTC_ASSET } from '../../utils';
import { CurrencyIcon } from '../CurrencyIcon';

const { Text, Title } = Typography;
const { useBreakpoint } = Grid;

interface DepositPageProps {
  type: 'Fee' | 'Market';
  depositAddress: string;
  setDepositAddress: React.Dispatch<React.SetStateAction<string>>;
  depositAddresses: AddressWithBlindingKey[];
  isFragmenting: boolean;
  handleDeposit: () => void;
  setUseFragmenter: (checked: boolean) => void;
  getNewAddress: () => void;
  market?: Market;
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
  /*const handleOptInFragmentationChange = (ev: CheckboxChangeEvent) => {
    setUseFragmenter(ev.target.checked);
  };*/
  const screens = useBreakpoint();

  return (
    <>
      <Breadcrumb separator={<Icon component={chevronRight} />}>
        <Breadcrumb.Item>
          <Link to={HOME_ROUTE}>Dashboard</Link>
        </Breadcrumb.Item>
        {market && (
          // We can't use Link to pass market state because of HashRouter limitation
          <Breadcrumb.Item>
            <Button
              type="link"
              className="dm-sans"
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
        <Col xs={24} lg={12} className={classNames({ 'pr-10': screens.lg })}>
          <div className="mb-4 d-flex panel panel__grey">
            {type === 'Fee' ? (
              <>
                <CurrencyIcon size={32} assetId={LBTC_ASSET[network].asset_id} />
                <span className="dm-mono__xx d-flex align-center ml-2">{LBTC_ASSET[network].ticker}</span>
              </>
            ) : (
              <>
                <span className="market-icons-translate">
                  <CurrencyIcon size={32} assetId={market?.baseAsset ?? ''} />
                  <CurrencyIcon size={32} assetId={market?.quoteAsset ?? ''} />
                </span>
                <span className="dm-mono__xx d-flex align-center">
                  {`${assetIdToTicker(market?.baseAsset ?? '', assetRegistry[network])} / ${assetIdToTicker(
                    market?.quoteAsset ?? '',
                    assetRegistry[network]
                  )}`}
                </span>
              </>
            )}
          </div>
          <Button className="w-100 mb-4 btn-animate" onClick={getNewAddress}>
            CREATE NEW DEPOSIT ADDRESS
          </Button>
          {/*<Checkbox onChange={handleOptInFragmentationChange} className="dm-sans dm-sans__x mt-4">
            Advanced: split deposit into multiple fragments for concurrent trade support
          </Checkbox>*/}
          <div className="mt-4">
            <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey" level={3}>
              Previous addresses
            </Title>
            <div
              className={classNames('panel panel__grey scrollbar dm-sans__xs', {
                'deposit-list': depositAddresses.length,
              })}
            >
              {depositAddresses.length
                ? depositAddresses
                    ?.slice()
                    .reverse()
                    .map((addr, index) => {
                      return (
                        <Row key={addr.address} className="mb-2" gutter={{ xs: 6, sm: 10, md: 12, lg: 14 }}>
                          <Col span={2} className="pl-0">{`#${depositAddresses?.length - index - 1}`}</Col>
                          <Col span={17}>
                            <span className="break-all">{addr.address}</span>
                          </Col>
                          <Col span={5} className="d-flex justify-end pr-0">
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
        {depositAddress ? (
          <Col xs={24} lg={12} className={classNames({ 'mt-8': !screens.lg })}>
            <Row className="panel panel__grey panel__top deposit-address-frame text-center">
              <Col xs={14} sm={12} md={8}>
                <QRCodeSVG
                  className="qr-code"
                  level="H"
                  value={depositAddress}
                  bgColor="#FFFFFF"
                  fgColor="#000000"
                  includeMargin={false}
                  size={128}
                />
              </Col>
            </Row>
            <Row className="py-6 deposit-address">
              <Col span={21} offset={1}>
                <Text className="address" copyable>
                  {depositAddress}
                </Text>
              </Col>
            </Row>
            <Row
              className={classNames('panel panel__grey text-center', { 'panel__bottom ': depositAddress })}
            >
              <Col span={20} offset={2}>
                <img src={alertOctogon} alt="alert" className="mb-2" />
                <p>
                  The pending transaction will appear here, once you are done depositing assets click on
                  CONFIRM to claim your deposit.
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
        ) : (
          <Col xs={24} lg={12} className={classNames({ 'mt-8': !screens.lg })}>
            <Row className="panel panel__grey text-center">
              <Col span={20} offset={2}>
                <p className="dm-sans dm-sans__x dm-sans__bold mb-0">Please generate or select an address</p>
              </Col>
            </Row>
          </Col>
        )}
      </Row>
    </>
  );
};
