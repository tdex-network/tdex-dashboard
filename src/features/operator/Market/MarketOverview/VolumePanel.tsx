import { Button, Col, Row, Typography } from 'antd';
import React from 'react';

import type { MarketInfo } from '../../../../api-spec/generated/js/operator_pb';
import { useTypedSelector } from '../../../../app/store';
import { CurrencyIcon } from '../../../../common/CurrencyIcon';
import { VolumeChart } from '../../../../common/VolumeChart';
import type { Asset } from '../../../../domain/asset';
import { formatCompact, fromSatsToUnitOrFractional, isLbtcAssetId, isLbtcTicker } from '../../../../utils';

interface VolumePanelProps {
  baseAsset: Asset;
  quoteAsset: Asset;
  marketInfo?: MarketInfo.AsObject;
}

const { Title } = Typography;

export const VolumePanel = ({ baseAsset, quoteAsset, marketInfo }: VolumePanelProps): JSX.Element => {
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
            <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey ml-2 d-inline" level={3}>
              Volume
            </Title>
            <span className="dm-sans dm-sans__xx ml-2">$1.22b</span>
          </div>
        }
        topRight={
          <div className="text-end">
            <Button className="mr-2">1D</Button>
            <Button className="mr-2">7D</Button>
            <Button className="mr-2">1M</Button>
            <Button className="mr-2">3M</Button>
            <Button className="mr-2">1Y</Button>
            <Button className="mr-2">YTD</Button>
            <Button>ALL</Button>
          </div>
        }
      />
    </div>
  );
};
