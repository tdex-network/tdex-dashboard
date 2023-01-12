import { InfoCircleOutlined } from '@ant-design/icons';
import { Col, Row, Typography } from 'antd';
import React from 'react';

import type { MarketInfo } from '../../../../api-spec/protobuf/gen/js/tdex-daemon/v2/types_pb';
import { CurrencyIcon } from '../../../../common/CurrencyIcon';
import type { Asset } from '../../../../domain/asset';
import type { NetworkString } from '../../../../domain/misc';
import type { LbtcUnit } from '../../../../utils';
import { formatCompact, isLbtcAssetId, unitToExponent } from '../../../../utils';

const { Title } = Typography;

interface BalanceAndPriceMobileProps {
  baseAsset: Asset;
  quoteAsset: Asset;
  baseAmount?: string;
  quoteAmount?: string;
  marketInfo?: MarketInfo;
  network: NetworkString;
  lbtcUnit: LbtcUnit;
}

export const BalanceAndPriceMobile = ({
  baseAsset,
  quoteAsset,
  marketInfo,
  lbtcUnit,
  network,
  baseAmount,
  quoteAmount,
}: BalanceAndPriceMobileProps): JSX.Element => {
  return (
    <Col span={24}>
      <div className="panel panel__grey mt-4">
        <Row>
          <Col span={24}>
            <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey d-inline mr-4" level={3}>
              Market Balance
            </Title>
            <InfoCircleOutlined className="grey" />
          </Col>
        </Row>
        <Row align="middle" className="mt-1">
          <Col span={24}>
            <Col span={24} className="d-flex align-center">
              <CurrencyIcon assetId={baseAsset?.asset_id} />
              <span className="dm-mono dm-mono__x dm_mono__bold mx-2">
                {isLbtcAssetId(baseAsset?.asset_id, network) ? lbtcUnit : baseAsset?.ticker}
              </span>
              <span className="dm-mono dm-mono__xx mr-6">{baseAmount}</span>
            </Col>
            <Col span={24} className="d-flex align-center mt-2">
              <CurrencyIcon assetId={quoteAsset?.asset_id} />
              <span className="dm-mono dm-mono__x dm_mono__bold mx-2">
                {isLbtcAssetId(quoteAsset?.asset_id, network) ? lbtcUnit : quoteAsset?.ticker}
              </span>
              <span className="dm-mono dm-mono__xx">{quoteAmount}</span>
            </Col>
          </Col>
        </Row>
      </div>
      <div className="panel panel__grey mt-4">
        <Row>
          <Col span={24}>
            <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey d-inline mr-4" level={3}>
              Price
            </Title>
            <InfoCircleOutlined className="grey" />
          </Col>
        </Row>
        <Row align="middle">
          <Col className="d-flex align-center">
            <span className="dm-mono dm-mono__x dm_mono__bold">{`${formatCompact(
              (marketInfo?.price?.quotePrice ?? 0) * Math.pow(10, -unitToExponent(lbtcUnit))
            )} ${isLbtcAssetId(quoteAsset?.asset_id, network) ? lbtcUnit : quoteAsset?.ticker} for 1 ${
              isLbtcAssetId(baseAsset?.asset_id, network) ? lbtcUnit : baseAsset?.ticker
            }`}</span>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
