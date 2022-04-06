import { Col, Row, Typography, Radio } from 'antd';
import type { Dispatch, SetStateAction } from 'react';
import React from 'react';

import type {
  MarketInfo,
  MarketReport,
} from '../../../../api-spec/protobuf/gen/js/tdex-daemon/v1/operator_pb';
import { PredefinedPeriod, TimeFrame } from '../../../../api-spec/protobuf/gen/js/tdex-daemon/v1/operator_pb';
import { useTypedSelector } from '../../../../app/store';
import { CurrencyIcon } from '../../../../common/CurrencyIcon';
import { VolumeChart } from '../../../../common/VolumeChart';
import type { Asset } from '../../../../domain/asset';
import { formatCompact, fromSatsToUnitOrFractional, isLbtcAssetId, isLbtcTicker } from '../../../../utils';

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
  const { lbtcUnit, network } = useTypedSelector(({ settings }) => settings);

  const baseAmount =
    marketInfo?.balance?.baseAmount === undefined
      ? 'N/A'
      : fromSatsToUnitOrFractional(
          marketInfo?.balance?.baseAmount,
          baseAsset.precision,
          isLbtcTicker(baseAsset.ticker),
          lbtcUnit
        );
  const quoteAmount =
    marketInfo?.balance?.quoteAmount === undefined
      ? 'N/A'
      : fromSatsToUnitOrFractional(
          marketInfo?.balance?.quoteAmount,
          quoteAsset.precision,
          isLbtcTicker(quoteAsset.ticker),
          lbtcUnit
        );

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
            <span className="dm-mono dm-mono__x dm_mono__bold mx-2">{`${formatCompact(
              Number(
                fromSatsToUnitOrFractional(
                  marketInfo.price?.basePrice ?? 0,
                  baseAsset.precision,
                  isLbtcTicker(baseAsset.ticker),
                  lbtcUnit
                )
              )
            )} ${
              isLbtcAssetId(baseAsset?.asset_id, network) ? lbtcUnit : baseAsset?.ticker
            } for ${formatCompact(
              Number(
                fromSatsToUnitOrFractional(
                  marketInfo.price?.quotePrice ?? 0,
                  quoteAsset.precision,
                  isLbtcTicker(quoteAsset.ticker),
                  lbtcUnit
                )
              )
            )} ${isLbtcAssetId(quoteAsset?.asset_id, network) ? lbtcUnit : quoteAsset?.ticker}`}</span>
          </Col>
        ) : null}
      </Row>
      <VolumeChart
        topLeft={
          <div className="mb-4">
            <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey d-inline" level={3}>
              Volume
            </Title>
            {/*TODO: Convert to fav currency https://github.com/tdex-network/tdex-dashboard/pull/267*/}
            <span className="dm-sans dm-sans__xx ml-2">$1.22b</span>
          </div>
        }
        topRight={
          <div className="text-end">
            <Radio.Group className="radio-green" defaultValue={marketReportPredefinedPeriod}>
              <Radio.Button
                value={PredefinedPeriod.LAST_DAY}
                onClick={() => {
                  setMarketReportPredefinedPeriod(PredefinedPeriod.LAST_DAY);
                  setMarketReportTimeFrame(TimeFrame.HOUR);
                }}
              >
                1D
              </Radio.Button>
              <Radio.Button
                value={PredefinedPeriod.LAST_WEEK}
                onClick={() => {
                  setMarketReportPredefinedPeriod(PredefinedPeriod.LAST_WEEK);
                  setMarketReportTimeFrame(TimeFrame.FOUR_HOURS);
                }}
              >
                7D
              </Radio.Button>
              <Radio.Button
                value={PredefinedPeriod.LAST_MONTH}
                onClick={() => {
                  setMarketReportPredefinedPeriod(PredefinedPeriod.LAST_MONTH);
                  setMarketReportTimeFrame(TimeFrame.DAY);
                }}
              >
                1M
              </Radio.Button>
              <Radio.Button
                value={PredefinedPeriod.LAST_THREE_MONTHS}
                onClick={() => {
                  setMarketReportPredefinedPeriod(PredefinedPeriod.LAST_THREE_MONTHS);
                  setMarketReportTimeFrame(TimeFrame.DAY);
                }}
              >
                3M
              </Radio.Button>
              <Radio.Button
                value={''}
                onClick={() => {
                  // TODO: https://github.com/tdex-network/tdex-daemon/issues/569
                  //setMarketReportPredefinedPeriod(PredefinedPeriod.LAST_YEAR);
                  //setMarketReportTimeFrame(TimeFrame.WEEK);
                }}
              >
                1Y
              </Radio.Button>
              <Radio.Button
                value={PredefinedPeriod.YEAR_TO_DATE}
                onClick={() => {
                  setMarketReportPredefinedPeriod(PredefinedPeriod.YEAR_TO_DATE);
                  setMarketReportTimeFrame(TimeFrame.WEEK);
                }}
              >
                YTD
              </Radio.Button>
              <Radio.Button
                value={PredefinedPeriod.ALL}
                onClick={() => {
                  setMarketReportPredefinedPeriod(PredefinedPeriod.ALL);
                  setMarketReportTimeFrame(TimeFrame.WEEK);
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
