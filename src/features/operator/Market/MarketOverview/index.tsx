import Icon, { SettingOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Typography, Row, Col, Space, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useTypedSelector } from '../../../../app/store';
import { ReactComponent as chevronRight } from '../../../../assets/images/chevron-right.svg';
import { ReactComponent as depositIcon } from '../../../../assets/images/deposit-green.svg';
import { CurrencyIcon } from '../../../../common/CurrencyIcon';
import { MarketIcons } from '../../../../common/MarketIcons';
import type { Asset } from '../../../../domain/asset';
import { HOME_ROUTE, MARKET_DEPOSIT_ROUTE, MARKET_WITHDRAW_ROUTE } from '../../../../routes/constants';
import { formatCompact, formatSatsToUnit, isLbtcAssetId } from '../../../../utils';
import { FeeForm } from '../../Fee/FeeForm';
import { TxsTable } from '../../TxsTable';
import { useGetMarketBalanceQuery, useGetMarketInfoQuery } from '../../operator.api';
import { MarketSettings } from '../MarketSettings';

import { AssetInfoModal } from './AssetInfoModal';

const { Title } = Typography;

export const MarketOverview = (): JSX.Element => {
  const navigate = useNavigate();
  const { marketsLabelled, lbtcUnit, network } = useTypedSelector(({ settings }) => settings);
  const { state } = useLocation() as { state: { baseAsset: Asset; quoteAsset: Asset } };
  const [isBalanceUpdating, setIsBalanceUpdating] = useState<boolean>(false);
  const { data: marketBalance } = useGetMarketBalanceQuery(
    {
      baseAsset: state.baseAsset?.asset_id || '',
      quoteAsset: state.quoteAsset?.asset_id || '',
    },
    {
      pollingInterval: isBalanceUpdating ? 2000 : 0,
    }
  );
  const { data: marketInfo, refetch: marketInfoRefetch } = useGetMarketInfoQuery(
    {
      baseAsset: state.baseAsset?.asset_id,
      quoteAsset: state.quoteAsset?.asset_id,
    },
    {
      pollingInterval: isBalanceUpdating ? 2000 : 0,
    }
  );

  // After a withdrawal balances takes time to update, so we can't simply refetch balances right after withdrawal
  // We check differences between availableBalance and totalBalance and poll balances until it is resolved
  useEffect(() => {
    if (
      marketBalance?.totalBalance?.baseAmount !== marketBalance?.availableBalance?.baseAmount ||
      marketBalance?.totalBalance?.quoteAmount !== marketBalance?.availableBalance?.quoteAmount
    ) {
      setIsBalanceUpdating(true);
    } else {
      setIsBalanceUpdating(false);
    }
  }, [
    marketBalance?.availableBalance?.baseAmount,
    marketBalance?.availableBalance?.quoteAmount,
    marketBalance?.totalBalance?.baseAmount,
    marketBalance?.totalBalance?.quoteAmount,
  ]);

  const [isMarketSettingsModalVisible, setIsMarketSettingsModalVisible] = useState(false);
  const showMarketSettingsModal = () => {
    setIsMarketSettingsModalVisible(true);
  };
  const handleMarketSettingsModalCancel = () => {
    setIsMarketSettingsModalVisible(false);
  };

  const [isAssetInfoModalVisible, setIsAssetInfoModalVisible] = useState(false);
  const showAssetInfoModal = () => {
    setIsAssetInfoModalVisible(true);
  };
  const handleAssetInfoModalCancel = () => {
    setIsAssetInfoModalVisible(false);
  };

  const baseAmount =
    marketInfo?.balance?.baseAmount === undefined
      ? 'N/A'
      : formatSatsToUnit(marketInfo?.balance?.baseAmount, lbtcUnit, state?.baseAsset?.asset_id, network);
  const quoteAmount =
    marketInfo?.balance?.quoteAmount === undefined
      ? 'N/A'
      : formatSatsToUnit(marketInfo?.balance?.quoteAmount, lbtcUnit, state?.quoteAsset?.asset_id, network);

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
                onClick={() => navigate(MARKET_DEPOSIT_ROUTE, { state: { marketInfo } })}
              >
                DEPOSIT
              </Button>
              <Button icon={<InfoCircleOutlined />} onClick={showAssetInfoModal} />
              <Button icon={<SettingOutlined />} onClick={showMarketSettingsModal} />
            </Space>
          </Col>
        </Row>
        <Row className="mb-8" gutter={{ xs: 4, sm: 8, md: 12 }}>
          <Col span={8}>
            {/* Render FeeForm only when marketInfo is ready */}
            {/* To ensure AntD form initialValues are correct */}
            {marketInfo ? (
              <FeeForm
                baseAsset={state?.baseAsset}
                quoteAsset={state?.quoteAsset}
                feeAbsoluteBase={marketInfo?.fee?.fixed?.baseFee?.toString()}
                feeAbsoluteQuote={marketInfo?.fee?.fixed?.quoteFee?.toString()}
                feeRelative={marketInfo?.fee?.basisPoint?.toString()}
                className="h-100"
                marketInfoRefetch={marketInfoRefetch}
              />
            ) : (
              <Row>
                <Col span={22}>
                  <Skeleton active paragraph={{ rows: 7 }} />
                </Col>
              </Row>
            )}
          </Col>
          <Col span={16}>
            <div className="panel panel__grey h-100">
              <Row>
                <Col span={16}>
                  <CurrencyIcon currency={state?.baseAsset?.ticker} />
                  <span className="dm-mono dm-mono__x dm_mono__bold mx-2">
                    {isLbtcAssetId(state?.baseAsset?.asset_id, network) ? lbtcUnit : state?.baseAsset?.ticker}
                  </span>
                  <span className="dm-mono dm-mono__xx mr-6">{baseAmount}</span>
                  <CurrencyIcon currency={state?.quoteAsset?.ticker} />
                  <span className="dm-mono dm-mono__x dm_mono__bold mx-2">
                    {isLbtcAssetId(state?.quoteAsset?.asset_id, network)
                      ? lbtcUnit
                      : state?.quoteAsset?.ticker}
                  </span>
                  <span className="dm-mono dm-mono__xx">{quoteAmount}</span>
                </Col>
                {marketInfo?.strategyType === 0 ? (
                  <Col span={8} className="text-end">
                    <span className="dm-mono dm-mono__x dm_mono__bold mx-2">{`${formatCompact(
                      Number(
                        formatSatsToUnit(
                          marketInfo.price?.basePrice ?? 0,
                          lbtcUnit,
                          state?.baseAsset?.asset_id,
                          network
                        )
                      )
                    )} ${
                      isLbtcAssetId(state?.baseAsset?.asset_id, network) ? lbtcUnit : state?.baseAsset?.ticker
                    } for ${formatCompact(
                      Number(
                        formatSatsToUnit(
                          marketInfo.price?.quotePrice ?? 0,
                          lbtcUnit,
                          state?.quoteAsset?.asset_id,
                          network
                        )
                      )
                    )} ${
                      isLbtcAssetId(state?.quoteAsset?.asset_id, network)
                        ? lbtcUnit
                        : state?.quoteAsset?.ticker
                    }`}</span>
                  </Col>
                ) : null}
              </Row>
              <Skeleton active paragraph={{ rows: 5 }} />
            </div>
          </Col>
        </Row>
        <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey" level={2}>
          Transactions
        </Title>
        {marketInfo && <TxsTable marketInfo={marketInfo} />}
        {/**/}
      </div>
      <MarketSettings
        handleMarketSettingsModalCancel={handleMarketSettingsModalCancel}
        isMarketSettingsModalVisible={isMarketSettingsModalVisible}
        marketInfo={marketInfo}
        baseAssetTicker={state?.baseAsset?.ticker ?? 'N/A'}
        quoteAssetTicker={state?.quoteAsset?.ticker ?? 'N/A'}
      />
      <AssetInfoModal
        handleAssetInfoModalCancel={handleAssetInfoModalCancel}
        isAssetInfoModalVisible={isAssetInfoModalVisible}
        market={marketInfo?.market}
      />
    </>
  );
};
