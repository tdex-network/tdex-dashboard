import { Col, Row, Typography, Radio } from 'antd';
import type { Dispatch, SetStateAction } from 'react';
import React, { useEffect, useState } from 'react';

import type { MarketInfo, MarketReport } from '../../../../api-spec/protobuf/gen/js/tdex-daemon/v1/types_pb';
import { PredefinedPeriod, TimeFrame } from '../../../../api-spec/protobuf/gen/js/tdex-daemon/v1/types_pb';
import { useTypedSelector } from '../../../../app/store';
import { CurrencyIcon } from '../../../../common/CurrencyIcon';
import { VolumeChart } from '../../../../common/VolumeChart';
import type { Asset } from '../../../../domain/asset';
import {
  formatCompact,
  fromSatsToUnitOrFractional,
  fromUnitToUnit,
  isLbtcAssetId,
  isLbtcTicker,
  lbtcUnitOrTickerToFractionalDigits,
} from '../../../../utils';
import { convertAmountToFavoriteCurrency, useLatestPriceFeedFromCoinGeckoQuery } from '../../../rates.api';

interface VolumePanelProps {
  baseAsset: Asset;
  quoteAsset: Asset;
  marketInfo?: MarketInfo.AsObject;
  marketReport?: MarketReport.AsObject;
  setMarketReportPredefinedPeriod: Dispatch<SetStateAction<PredefinedPeriod>>;
  setMarketReportTimeFrame: Dispatch<SetStateAction<TimeFrame>>;
  marketReportPredefinedPeriod: PredefinedPeriod;
}

const { Title } = Typography;

export const VolumePanel = ({
  baseAsset,
  quoteAsset,
  marketInfo,
  marketReport,
  setMarketReportPredefinedPeriod,
  setMarketReportTimeFrame,
  marketReportPredefinedPeriod,
}: VolumePanelProps): JSX.Element => {
  const { lbtcUnit, network, currency } = useTypedSelector(({ settings }) => settings);
  const { data: prices } = useLatestPriceFeedFromCoinGeckoQuery();
  const [baseAmount, setBaseAmount] = useState<string>();
  const [basePrice, setBasePrice] = useState<number>(0);
  const [quoteAmount, setQuoteAmount] = useState<string>();
  const [volumeAsFavCurrencyFormatted, setVolumeAsFavCurrencyFormatted] = useState<JSX.Element | undefined>();

  useEffect(() => {
    // Note that if marketInfo.price?.basePrice is Liquid Bitcoin then amount is expressed in L-BTC unit
    // We divide marketInfo.price?.basePrice by marketInfo.price?.quotePrice to get basePrice for 1 quote unit.
    if (marketInfo?.price?.basePrice && marketInfo?.price?.quotePrice) {
      setBasePrice(
        isLbtcAssetId(baseAsset?.asset_id, network)
          ? Number(
              Number(
                Number(
                  fromUnitToUnit(Number(marketInfo?.price?.basePrice.toFixed(8)) ?? 0, 'L-BTC', lbtcUnit)
                ) / (marketInfo?.price?.quotePrice ?? 1)
              ).toFixed(lbtcUnitOrTickerToFractionalDigits(lbtcUnit, 8))
            )
          : Number(
              Number(
                Number(marketInfo?.price?.basePrice.toFixed(8) ?? 0) / (marketInfo?.price?.quotePrice ?? 1)
              ).toFixed(lbtcUnitOrTickerToFractionalDigits(lbtcUnit, 8))
            )
      );
    }
  }, [baseAsset?.asset_id, lbtcUnit, marketInfo?.price?.basePrice, marketInfo?.price?.quotePrice, network]);

  useEffect(() => {
    setBaseAmount(
      marketInfo?.balance?.baseAmount === undefined
        ? 'N/A'
        : fromSatsToUnitOrFractional(
            marketInfo?.balance?.baseAmount,
            baseAsset.precision,
            isLbtcTicker(baseAsset.ticker),
            lbtcUnit
          )
    );
    setQuoteAmount(
      marketInfo?.balance?.quoteAmount === undefined
        ? 'N/A'
        : fromSatsToUnitOrFractional(
            marketInfo?.balance?.quoteAmount,
            quoteAsset.precision,
            isLbtcTicker(quoteAsset.ticker),
            lbtcUnit
          )
    );

    const volumeAsUnitOrFractional = fromSatsToUnitOrFractional(
      marketReport?.totalVolume?.quoteVolume || 0,
      quoteAsset.precision,
      isLbtcTicker(quoteAsset.ticker),
      lbtcUnit
    );

    const volumeAsFavCurrency = convertAmountToFavoriteCurrency({
      asset: quoteAsset,
      amount: volumeAsUnitOrFractional,
      network: network,
      preferredCurrency: currency,
      preferredLbtcUnit: lbtcUnit,
      prices: prices,
    });

    setVolumeAsFavCurrencyFormatted(
      currency.value === 'btc' ? (
        <div className="d-inline">
          <span>{Number(volumeAsFavCurrency).toLocaleString('en-US')}</span>
          <span className="d-inline-block dm-mono dm-mono__x dm_mono__bold mx-2">{lbtcUnit}</span>
        </div>
      ) : (
        <div className="d-inline">
          <span className="d-inline-block dm-mono dm_mono__bold">{currency.symbol}</span>
          <span>{Number(volumeAsFavCurrency).toLocaleString('en-US')}</span>
        </div>
      )
    );
  }, [
    baseAsset.precision,
    baseAsset.ticker,
    currency,
    lbtcUnit,
    marketInfo?.balance?.baseAmount,
    marketInfo?.balance?.quoteAmount,
    marketReport?.totalVolume?.quoteVolume,
    network,
    prices,
    quoteAsset,
  ]);

  return (
    <div className="panel panel__grey h-100">
      <Row className="mb-2">
        <Col span={marketInfo?.strategyType === 0 ? 16 : 24}>
          <div className="d-inline-block">
            <CurrencyIcon currency={baseAsset?.ticker} />
            <span className="dm-mono dm-mono__x dm_mono__bold mx-2">
              {isLbtcAssetId(baseAsset?.asset_id, network) ? lbtcUnit : baseAsset?.ticker}
            </span>
            <span className="dm-mono dm-mono__xx mr-6">{baseAmount}</span>
          </div>
          <div className="d-inline-block">
            <CurrencyIcon currency={quoteAsset?.ticker} />
            <span className="dm-mono dm-mono__x dm_mono__bold mx-2">
              {isLbtcAssetId(quoteAsset?.asset_id, network) ? lbtcUnit : quoteAsset?.ticker}
            </span>
            <span className="dm-mono dm-mono__xx">{quoteAmount}</span>
          </div>
        </Col>
        {marketInfo?.strategyType === 0 ? (
          <Col span={8} className="text-end">
            <span className="dm-mono dm-mono__x dm_mono__bold mx-2">{`${formatCompact(basePrice)} ${
              isLbtcAssetId(baseAsset?.asset_id, network) ? lbtcUnit : baseAsset?.ticker
            } for 1 ${isLbtcAssetId(quoteAsset?.asset_id, network) ? lbtcUnit : quoteAsset?.ticker}`}</span>
          </Col>
        ) : null}
      </Row>
      <VolumeChart
        topLeft={
          <div>
            <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey d-inline" level={3}>
              Volume
            </Title>
            <span className="dm-sans dm-sans__xx ml-2 break-all">{volumeAsFavCurrencyFormatted}</span>
          </div>
        }
        topRight={
          <div className="text-end">
            <Radio.Group className="radio-green" defaultValue={marketReportPredefinedPeriod}>
              <Radio.Button
                value={PredefinedPeriod.PREDEFINED_PERIOD_LAST_DAY}
                onClick={() => {
                  setMarketReportPredefinedPeriod(PredefinedPeriod.PREDEFINED_PERIOD_LAST_DAY);
                  setMarketReportTimeFrame(TimeFrame.TIME_FRAME_HOUR);
                }}
              >
                1D
              </Radio.Button>
              <Radio.Button
                value={PredefinedPeriod.PREDEFINED_PERIOD_LAST_WEEK}
                onClick={() => {
                  setMarketReportPredefinedPeriod(PredefinedPeriod.PREDEFINED_PERIOD_LAST_WEEK);
                  setMarketReportTimeFrame(TimeFrame.TIME_FRAME_FOUR_HOURS);
                }}
              >
                7D
              </Radio.Button>
              <Radio.Button
                value={PredefinedPeriod.PREDEFINED_PERIOD_LAST_MONTH}
                onClick={() => {
                  setMarketReportPredefinedPeriod(PredefinedPeriod.PREDEFINED_PERIOD_LAST_MONTH);
                  setMarketReportTimeFrame(TimeFrame.TIME_FRAME_DAY);
                }}
              >
                1M
              </Radio.Button>
              <Radio.Button
                value={PredefinedPeriod.PREDEFINED_PERIOD_LAST_THREE_MONTHS}
                onClick={() => {
                  setMarketReportPredefinedPeriod(PredefinedPeriod.PREDEFINED_PERIOD_LAST_THREE_MONTHS);
                  setMarketReportTimeFrame(TimeFrame.TIME_FRAME_DAY);
                }}
              >
                3M
              </Radio.Button>
              <Radio.Button
                value={PredefinedPeriod.PREDEFINED_PERIOD_LAST_YEAR}
                onClick={() => {
                  setMarketReportPredefinedPeriod(PredefinedPeriod.PREDEFINED_PERIOD_LAST_YEAR);
                  setMarketReportTimeFrame(TimeFrame.TIME_FRAME_WEEK);
                }}
              >
                1Y
              </Radio.Button>
              <Radio.Button
                value={PredefinedPeriod.PREDEFINED_PERIOD_YEAR_TO_DATE}
                onClick={() => {
                  setMarketReportPredefinedPeriod(PredefinedPeriod.PREDEFINED_PERIOD_YEAR_TO_DATE);
                  setMarketReportTimeFrame(TimeFrame.TIME_FRAME_WEEK);
                }}
              >
                YTD
              </Radio.Button>
              <Radio.Button
                value={PredefinedPeriod.PREDEFINED_PERIOD_ALL}
                onClick={() => {
                  setMarketReportPredefinedPeriod(PredefinedPeriod.PREDEFINED_PERIOD_ALL);
                  setMarketReportTimeFrame(TimeFrame.TIME_FRAME_WEEK);
                }}
              >
                ALL
              </Radio.Button>
            </Radio.Group>
          </div>
        }
        marketReport={marketReport}
        marketReportPredefinedPeriod={marketReportPredefinedPeriod}
        baseAsset={baseAsset}
        lbtcUnit={lbtcUnit}
      />
    </div>
  );
};
