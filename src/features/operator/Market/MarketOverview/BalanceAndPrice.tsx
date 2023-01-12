import { Col, Grid, Row } from 'antd';
import classNames from 'classnames';

import type { MarketInfo } from '../../../../api-spec/protobuf/gen/js/tdex-daemon/v2/types_pb';
import { CurrencyIcon } from '../../../../common/CurrencyIcon';
import type { Asset } from '../../../../domain/asset';
import type { NetworkString } from '../../../../domain/misc';
import type { LbtcUnit } from '../../../../utils';
import { formatCompact, isLbtcAssetId, unitToExponent } from '../../../../utils';

const { useBreakpoint } = Grid;

interface BalanceAndPriceProps {
  baseAsset: Asset;
  quoteAsset: Asset;
  baseAmount?: string;
  quoteAmount?: string;
  marketInfo?: MarketInfo;
  network: NetworkString;
  lbtcUnit: LbtcUnit;
}

export const BalanceAndPrice = ({
  baseAsset,
  quoteAsset,
  marketInfo,
  lbtcUnit,
  network,
  baseAmount,
  quoteAmount,
}: BalanceAndPriceProps): JSX.Element => {
  const screens = useBreakpoint();
  return (
    <Row className={classNames({ 'mb-2': !screens.xs })}>
      <Col xs={24} sm={marketInfo?.strategyType === 0 ? 16 : 24} className="d-flex align-center">
        <div className="d-flex align-center">
          <CurrencyIcon assetId={baseAsset?.asset_id} />
          <span className="dm-mono dm-mono__x dm_mono__bold mx-2">
            {isLbtcAssetId(baseAsset?.asset_id, network) ? lbtcUnit : baseAsset?.ticker}
          </span>
          <span className="dm-mono dm-mono__xx mr-6">{baseAmount}</span>
        </div>
        <div className="d-flex align-center">
          <CurrencyIcon assetId={quoteAsset?.asset_id} />
          <span className="dm-mono dm-mono__x dm_mono__bold mx-2">
            {isLbtcAssetId(quoteAsset?.asset_id, network) ? lbtcUnit : quoteAsset?.ticker}
          </span>
          <span className="dm-mono dm-mono__xx">{quoteAmount}</span>
        </div>
      </Col>
      <Col
        xs={marketInfo?.strategyType === 0 ? 24 : 0}
        sm={marketInfo?.strategyType === 0 ? 8 : 0}
        className={classNames({ 'text-end': !screens.xs, 'mt-2': screens.xs })}
      >
        <span className="dm-mono dm-mono__x dm_mono__bold mx-2">{`${formatCompact(
          (marketInfo?.price?.quotePrice ?? 0) * Math.pow(10, -unitToExponent(lbtcUnit))
        )} ${isLbtcAssetId(quoteAsset?.asset_id, network) ? lbtcUnit : quoteAsset?.ticker} for 1 ${
          isLbtcAssetId(baseAsset?.asset_id, network) ? lbtcUnit : baseAsset?.ticker
        }`}</span>
      </Col>
    </Row>
  );
};
