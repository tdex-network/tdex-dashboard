import Icon, { SettingOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Typography, Row, Col, Space, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { PredefinedPeriod, TimeFrame } from '../../../../api-spec/generated/js/operator_pb';
import { useTypedSelector } from '../../../../app/store';
import { ReactComponent as chevronRight } from '../../../../assets/images/chevron-right.svg';
import { ReactComponent as depositIcon } from '../../../../assets/images/deposit-green.svg';
import { MarketIcons } from '../../../../common/MarketIcons';
import type { Asset } from '../../../../domain/asset';
import { HOME_ROUTE, MARKET_DEPOSIT_ROUTE, MARKET_WITHDRAW_ROUTE } from '../../../../routes/constants';
import { fromSatsToUnitOrFractional, isLbtcTicker } from '../../../../utils';
import { FeeForm } from '../../Fee/FeeForm';
import { TxsTable } from '../../TxsTable';
import { useGetMarketBalanceQuery, useGetMarketInfoQuery, useGetMarketReportQuery } from '../../operator.api';
import { MarketSettings } from '../MarketSettings';

import { AssetInfoModal } from './AssetInfoModal';
import { VolumePanel } from './VolumePanel';

const { Title } = Typography;

export const MarketOverview = (): JSX.Element => {
  const navigate = useNavigate();
  const marketsLabelled = useTypedSelector(({ settings }) => settings.marketsLabelled);
  const lbtcUnit = useTypedSelector(({ settings }) => settings.lbtcUnit);
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

  // Market report
  const [marketReportPredefinedPeriod, setMarketReportPredefinedPeriod] = useState<PredefinedPeriod>(
    PredefinedPeriod.LAST_MONTH
  );
  const [marketReportTimeFrame, setMarketReportTimeFrame] = useState<TimeFrame>(TimeFrame.DAY);
  const { data: marketReport } = useGetMarketReportQuery({
    market: {
      baseAsset: state.baseAsset?.asset_id,
      quoteAsset: state.quoteAsset?.asset_id,
    },
    timeRange: { predefinedPeriod: marketReportPredefinedPeriod },
    timeFrame: marketReportTimeFrame,
  });

  // After a withdrawal or a trade, balances takes time to update, so we can't simply refetch balances right after
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
          <Col span={8} className="h-100">
            <div className="panel panel__grey mb-4">
              <Row>
                <Col span={24}>
                  <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey d-inline mr-4" level={3}>
                    Collected Swap Fees
                  </Title>
                  <InfoCircleOutlined className="grey" />
                </Col>
              </Row>
              <Row align="middle">
                <Col>
                  <div>
                    <span className="dm-mono dm-mono__xx">
                      {fromSatsToUnitOrFractional(
                        marketReport?.totalCollectedFees?.baseAmount ?? 0,
                        state?.baseAsset?.precision,
                        isLbtcTicker(state?.baseAsset?.ticker),
                        lbtcUnit
                      )}
                    </span>
                    <span className="dm-sans dm-sans__x ml-2">{state?.baseAsset?.formattedTicker ?? ''}</span>
                  </div>
                  <div>
                    <span className="dm-mono dm-mono__xx">
                      {fromSatsToUnitOrFractional(
                        marketReport?.totalCollectedFees?.quoteAmount ?? 0,
                        state?.quoteAsset?.precision,
                        isLbtcTicker(state?.quoteAsset?.ticker),
                        lbtcUnit
                      )}
                    </span>
                    <span className="dm-sans dm-sans__x ml-2">
                      {state?.quoteAsset?.formattedTicker ?? ''}
                    </span>
                  </div>
                </Col>
              </Row>
            </div>

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
            <VolumePanel
              marketInfo={marketInfo}
              baseAsset={state?.baseAsset}
              quoteAsset={state?.quoteAsset}
              marketReport={marketReport}
              setMarketReportPredefinedPeriod={setMarketReportPredefinedPeriod}
              setMarketReportTimeFrame={setMarketReportTimeFrame}
              marketReportPredefinedPeriod={marketReportPredefinedPeriod}
            />
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
