import Icon, { SettingOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Typography, Row, Col, Space, Skeleton, Grid } from 'antd';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { PredefinedPeriod, TimeFrame } from '../../../../api-spec/protobuf/gen/js/tdex-daemon/v2/types_pb';
import { useTypedSelector } from '../../../../app/store';
import { ReactComponent as chevronRight } from '../../../../assets/images/chevron-right.svg';
import { ReactComponent as depositIcon } from '../../../../assets/images/deposit-green.svg';
import { MarketIcons } from '../../../../common/MarketIcons';
import type { Asset } from '../../../../domain/asset';
import { HOME_ROUTE, MARKET_DEPOSIT_ROUTE, MARKET_WITHDRAW_ROUTE } from '../../../../routes/constants';
import { fromSatsToUnitOrFractional, isLbtcTicker } from '../../../../utils';
import { convertAmountToFavoriteCurrency, useLatestPriceFeedFromCoinGeckoQuery } from '../../../rates.api';
import { FeeForm } from '../../Fee/FeeForm';
import { TxsTable } from '../../TxsTable';
import { useGetMarketInfoQuery, useGetMarketReportQuery } from '../../operator.api';
import { MarketSettings } from '../MarketSettings';

import { AssetInfoModal } from './AssetInfoModal';
import { BalanceAndPrice } from './BalanceAndPrice';
import { BalanceAndPriceMobile } from './BalanceAndPriceMobile';
import { CollectedSwapFees } from './CollectedSwapFees';
import { VolumePanel } from './VolumePanel';

const { Title } = Typography;
const { useBreakpoint } = Grid;

export const MarketOverview = (): JSX.Element => {
  const navigate = useNavigate();
  const { state } = useLocation() as { state: { baseAsset: Asset; quoteAsset: Asset } };
  const [isBalanceUpdating, setIsBalanceUpdating] = useState<boolean>(false);
  const { data: marketInfo, refetch: marketInfoRefetch } = useGetMarketInfoQuery(
    {
      baseAsset: state.baseAsset?.asset_id,
      quoteAsset: state.quoteAsset?.asset_id,
    },
    {
      pollingInterval: isBalanceUpdating ? 2000 : 0,
    }
  );
  const [baseAmount, setBaseAmount] = useState<string>();
  const [quoteAmount, setQuoteAmount] = useState<string>();
  const [volumeAsFavCurrencyFormatted, setVolumeAsFavCurrencyFormatted] = useState<JSX.Element | undefined>();
  const { lbtcUnit, network, currency } = useTypedSelector(({ settings }) => settings);
  const { data: prices } = useLatestPriceFeedFromCoinGeckoQuery();
  const screens = useBreakpoint();

  // Market report
  const [marketReportPredefinedPeriod, setMarketReportPredefinedPeriod] = useState<PredefinedPeriod>(
    PredefinedPeriod.PREDEFINED_PERIOD_LAST_MONTH
  );
  const [marketReportTimeFrame, setMarketReportTimeFrame] = useState<TimeFrame>(TimeFrame.TIME_FRAME_DAY);
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
      marketInfo?.balance[state.baseAsset?.asset_id]?.totalBalance !==
        marketInfo?.balance[state.baseAsset?.asset_id]?.confirmedBalance ||
      marketInfo?.balance[state.quoteAsset?.asset_id]?.totalBalance !==
        marketInfo?.balance[state.quoteAsset?.asset_id]?.confirmedBalance
    ) {
      setIsBalanceUpdating(true);
    } else {
      setIsBalanceUpdating(false);
    }
  }, [marketInfo?.balance, state.baseAsset?.asset_id, state.quoteAsset?.asset_id]);

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

  useEffect(() => {
    setBaseAmount(
      marketInfo?.balance[state?.baseAsset.asset_id ?? ''] === undefined
        ? 'N/A'
        : fromSatsToUnitOrFractional(
            Number(marketInfo?.balance[state?.baseAsset.asset_id ?? ''].totalBalance),
            state?.baseAsset.precision,
            isLbtcTicker(state?.baseAsset.ticker),
            lbtcUnit
          )
    );
    setQuoteAmount(
      marketInfo?.balance[state?.quoteAsset.asset_id ?? ''] === undefined
        ? 'N/A'
        : fromSatsToUnitOrFractional(
            Number(marketInfo?.balance[state?.quoteAsset.asset_id ?? ''].totalBalance),
            state?.quoteAsset.precision,
            isLbtcTicker(state?.quoteAsset.ticker),
            lbtcUnit
          )
    );

    const volumeAsUnitOrFractional = fromSatsToUnitOrFractional(
      Number(marketReport?.totalVolume?.quoteVolume || 0),
      state?.quoteAsset.precision,
      isLbtcTicker(state?.quoteAsset.ticker),
      lbtcUnit
    );

    const volumeAsFavCurrency = convertAmountToFavoriteCurrency({
      asset: state?.quoteAsset,
      amount: volumeAsUnitOrFractional,
      network: network,
      preferredCurrency: currency,
      preferredLbtcUnit: lbtcUnit,
      prices: prices,
    });

    // If conversion in favorite currency not possible, display in quote asset
    setVolumeAsFavCurrencyFormatted(
      currency.value === 'btc' ? (
        <div className="d-inline">
          <span>{Number(volumeAsFavCurrency ?? volumeAsUnitOrFractional).toLocaleString('en-US')}</span>
          <span className="d-inline-block dm-mono dm-mono__x dm_mono__bold mx-2">{lbtcUnit}</span>
        </div>
      ) : (
        <div className="d-inline">
          <span className="d-inline-block dm-mono dm_mono__bold mr-1">
            {volumeAsFavCurrency ? currency.symbol : state?.quoteAsset.ticker}
          </span>
          <span>{Number(volumeAsFavCurrency ?? volumeAsUnitOrFractional).toLocaleString('en-US')}</span>
        </div>
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    state?.baseAsset.precision,
    state?.baseAsset.ticker,
    currency,
    lbtcUnit,
    marketReport?.totalVolume?.quoteVolume,
    network,
    prices,
    state?.quoteAsset,
    marketInfo?.name,
  ]);

  return (
    <>
      <Breadcrumb separator={<Icon component={chevronRight} />}>
        <Breadcrumb.Item>
          <Link to={HOME_ROUTE}>Dashboard</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Market Overview</Breadcrumb.Item>
      </Breadcrumb>
      <div className="panel">
        {/**/}
        <Row className="mb-4">
          <Col xs={24} md={12} className="d-flex align-center">
            <MarketIcons baseAsset={state?.baseAsset} quoteAsset={state?.quoteAsset} size="big" />
            <Space direction="vertical" size={0}>
              <span className="dm-sans dm-sans__xx">
                {state?.baseAsset?.ticker} / {state?.quoteAsset?.ticker}
              </span>
              {marketInfo?.name ? <span>{marketInfo.name}</span> : null}
            </Space>
          </Col>
          <Col xs={24} md={12} className={classNames({ 'text-end': screens.md, 'mt-4': !screens.md })}>
            <Space
              size={screens.md ? 16 : undefined}
              className={classNames({ 'w-100 justify-space-between': !screens.md })}
            >
              <Space size={10}>
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
              </Space>
              <Space size={10}>
                <Button icon={<InfoCircleOutlined />} onClick={showAssetInfoModal} />
                <Button icon={<SettingOutlined />} onClick={showMarketSettingsModal} />
              </Space>
            </Space>
          </Col>
        </Row>
        <Row className="mb-8" gutter={{ xs: 4, sm: 8, md: 12 }}>
          <Col xs={24} sm={24} md={24} lg={8} className="h-100">
            <CollectedSwapFees marketReport={marketReport} state={state} />

            {/* Render FeeForm only when marketInfo is ready */}
            {/* To ensure AntD form initialValues are correct */}
            {marketInfo ? (
              <FeeForm
                baseAsset={state?.baseAsset}
                quoteAsset={state?.quoteAsset}
                feeAbsoluteBase={marketInfo?.fee?.fixedFee?.baseAsset}
                feeAbsoluteQuote={marketInfo?.fee?.fixedFee?.quoteAsset}
                feeRelativeBase={marketInfo?.fee?.percentageFee?.baseAsset}
                feeRelativeQuote={marketInfo?.fee?.percentageFee?.quoteAsset}
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
          <Col
            xs={0}
            sm={24}
            md={24}
            lg={16}
            className={classNames({
              'mt-4': !screens.lg,
            })}
          >
            <div className="panel panel__grey h-100">
              <BalanceAndPrice
                baseAsset={state?.baseAsset}
                quoteAsset={state?.quoteAsset}
                lbtcUnit={lbtcUnit}
                baseAmount={baseAmount}
                quoteAmount={quoteAmount}
                marketInfo={marketInfo}
                network={network}
              />
              <>
                {!screens.xs ? (
                  <VolumePanel
                    volumeAsFavCurrencyFormatted={volumeAsFavCurrencyFormatted}
                    baseAsset={state?.baseAsset}
                    marketReport={marketReport}
                    setMarketReportPredefinedPeriod={setMarketReportPredefinedPeriod}
                    setMarketReportTimeFrame={setMarketReportTimeFrame}
                    marketReportPredefinedPeriod={marketReportPredefinedPeriod}
                  />
                ) : null}
              </>
            </div>
          </Col>
          {/* To remove if multi panel layout is adopted on bigger screens */}
          <>
            {screens.xs ? (
              <BalanceAndPriceMobile
                baseAsset={state?.baseAsset}
                quoteAsset={state?.quoteAsset}
                lbtcUnit={lbtcUnit}
                baseAmount={baseAmount}
                quoteAmount={quoteAmount}
                marketInfo={marketInfo}
                network={network}
              />
            ) : null}
          </>
        </Row>
        <div>
          <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey" level={2}>
            Transactions
          </Title>
          {marketInfo && <TxsTable marketInfo={marketInfo} />}
        </div>
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
