import Icon, { SettingOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Typography, Row, Col, Space, Skeleton } from 'antd';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ReactComponent as chevronRight } from '../../../assets/images/chevron-right.svg';
import { ReactComponent as depositIcon } from '../../../assets/images/deposit-green.svg';
import { CurrencyIcon } from '../../../common/CurrencyIcon';
import { MarketIcons } from '../../../common/MarketIcons';
import type { Asset } from '../../../domain/asset';
import { FEE_DEPOSIT_ROUTE, FEE_WITHDRAW_ROUTE, HOME_ROUTE } from '../../../routes/constants';
import { LBTC_TICKER, USDT_TICKER } from '../../../utils';
import { FeeForm } from '../FeeForm';
import { MarketSettings } from '../MarketSettings';
import { useListMarketsQuery } from '../operator.api';

const { Title } = Typography;

export const Market = (): JSX.Element => {
  const navigate = useNavigate();
  const { data: listMarkets } = useListMarketsQuery();

  const { state } = useLocation() as { state: { baseAsset: Asset; quoteAsset: Asset } };
  const marketInfo = listMarkets?.marketsList.find(
    ({ market }) =>
      market?.baseAsset === state?.baseAsset?.asset_id && market?.quoteAsset === state?.quoteAsset?.asset_id
  );

  const [isMarketSettingsModalVisible, setIsMarketSettingsModalVisible] = useState(false);
  const showMarketSettingsModal = () => {
    setIsMarketSettingsModalVisible(true);
  };
  const handleMarketSettingsModalCancel = () => {
    setIsMarketSettingsModalVisible(false);
  };

  return (
    <>
      <Breadcrumb separator={<Icon component={chevronRight} />} className="mb-2">
        <Breadcrumb.Item>
          <a href={HOME_ROUTE}>Dashboard</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Market Overview</Breadcrumb.Item>
      </Breadcrumb>
      <div className="panel">
        {/**/}
        <Row className="mb-4">
          <Col span={12} className="d-flex align-center">
            <MarketIcons
              baseAsset={state?.baseAsset?.ticker}
              quoteAsset={state?.quoteAsset?.ticker}
              size="big"
            />
            <Space direction="vertical" size={0}>
              <span className="dm-sans dm-sans__xx">
                {state?.baseAsset?.ticker} / {state?.quoteAsset?.ticker}
              </span>
              <span>Custom Name</span>
            </Space>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Space size={16}>
              <Button
                className="rotate-icon"
                icon={<Icon component={depositIcon} />}
                onClick={() => navigate(FEE_WITHDRAW_ROUTE)}
              >
                WITHDRAW
              </Button>
              <Button icon={<Icon component={depositIcon} />} onClick={() => navigate(FEE_DEPOSIT_ROUTE)}>
                DEPOSIT
              </Button>
              <Button icon={<SettingOutlined />} onClick={showMarketSettingsModal} />
            </Space>
          </Col>
        </Row>
        <Row className="mb-8" gutter={{ xs: 4, sm: 8, md: 12 }}>
          <Col span={8}>
            {/* Render FeeForm only when marketInfo is ready */}
            {/* To ensure AntD form initialValues are correct */}
            {marketInfo && (
              <FeeForm
                baseAsset={state?.baseAsset}
                quoteAsset={state?.quoteAsset}
                feeAbsoluteBase={marketInfo?.fee?.fixed?.baseFee?.toString()}
                feeAbsoluteQuote={marketInfo?.fee?.fixed?.quoteFee?.toString()}
                feeRelative={marketInfo?.fee?.basisPoint?.toString()}
                className="h-100"
              />
            )}
          </Col>
          <Col span={16}>
            <div className="panel panel__grey h-100">
              <Row>
                <Col span={24} className="">
                  <CurrencyIcon currency={LBTC_TICKER} />
                  <span className="dm-mono dm-mono__x dm_mono__bold mx-2">{LBTC_TICKER}</span>
                  <span className="dm-mono dm-mono__xx mr-10">{marketInfo?.balance?.baseAmount}</span>
                  <CurrencyIcon currency={USDT_TICKER} />
                  <span className="dm-mono dm-mono__x dm_mono__bold mx-2">{USDT_TICKER}</span>
                  <span className="dm-mono dm-mono__xx">{marketInfo?.balance?.quoteAmount}</span>
                </Col>
              </Row>
              <Skeleton active paragraph={{ rows: 5 }} />
            </div>
          </Col>
        </Row>
        <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey" level={2}>
          Transactions
        </Title>
        <Skeleton />
        {/**/}
      </div>
      <MarketSettings
        marketInfo={marketInfo}
        isMarketSettingsModalVisible={isMarketSettingsModalVisible}
        handleMarketSettingsModalCancel={handleMarketSettingsModalCancel}
      />
    </>
  );
};
