import Icon, { SettingOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Typography, Row, Col, Space, Skeleton } from 'antd';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useTypedSelector } from '../../../../app/store';
import { ReactComponent as chevronRight } from '../../../../assets/images/chevron-right.svg';
import { ReactComponent as depositIcon } from '../../../../assets/images/deposit-green.svg';
import { CurrencyIcon } from '../../../../common/CurrencyIcon';
import { MarketIcons } from '../../../../common/MarketIcons';
import type { Asset } from '../../../../domain/asset';
import { HOME_ROUTE, MARKET_DEPOSIT_ROUTE, MARKET_WITHDRAW_ROUTE } from '../../../../routes/constants';
import { LBTC_TICKER, USDT_TICKER } from '../../../../utils';
import { FeeForm } from '../../Fee/FeeForm';
import { useListMarketsQuery } from '../../operator.api';
import { MarketSettings } from '../MarketSettings';

const { Title } = Typography;

export const MarketOverview = (): JSX.Element => {
  const navigate = useNavigate();
  const { data: listMarkets } = useListMarketsQuery();
  const marketsLabelled = useTypedSelector(({ settings }) => settings.marketsLabelled);

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
          <Link to={HOME_ROUTE}>Dashboard</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Market Overview</Breadcrumb.Item>
      </Breadcrumb>
      <div className="panel">
        {/**/}
        <Row className="mb-4">
          <Col span={12} className="d-flex align-center">
            <MarketIcons
              baseAssetTicker={state?.baseAsset?.ticker}
              quoteAssetTicker={state?.quoteAsset?.ticker}
              size="big"
            />
            <Space direction="vertical" size={0}>
              <span className="dm-sans dm-sans__xx">
                {state?.baseAsset?.ticker} / {state?.quoteAsset?.ticker}
              </span>
              <span>
                {marketsLabelled?.find(
                  ({ marketStr }) =>
                    marketStr ===
                    JSON.stringify({
                      baseAssetTicker: state?.baseAsset?.ticker,
                      quoteAssetTicker: state?.quoteAsset?.ticker,
                    })
                )?.label || 'Custom name'}
              </span>
            </Space>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Space size={16}>
              <Button
                className="rotate-icon"
                icon={<Icon component={depositIcon} />}
                onClick={() =>
                  navigate(MARKET_WITHDRAW_ROUTE, {
                    state: { baseAsset: state?.baseAsset, quoteAsset: state?.quoteAsset },
                  })
                }
              >
                WITHDRAW
              </Button>
              <Button
                icon={<Icon component={depositIcon} />}
                onClick={() =>
                  navigate(MARKET_DEPOSIT_ROUTE, {
                    state: { baseAsset: state?.baseAsset, quoteAsset: state?.quoteAsset },
                  })
                }
              >
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
