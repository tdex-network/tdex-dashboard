import { InfoCircleOutlined } from '@ant-design/icons';
import { Col, Popover, Row, Typography } from 'antd';
import React from 'react';

import type { MarketReport } from '../../../../api-spec/protobuf/gen/js/tdex-daemon/v1/types_pb';
import { useTypedSelector } from '../../../../app/store';
import type { Asset } from '../../../../domain/asset';
import { fromSatsToUnitOrFractional, isLbtcTicker } from '../../../../utils';

const { Title } = Typography;

interface CollectedSwapFeesProps {
  marketReport?: MarketReport;
  state: { baseAsset: Asset; quoteAsset: Asset };
}

export const CollectedSwapFees = ({ marketReport, state }: CollectedSwapFeesProps): JSX.Element => {
  const lbtcUnit = useTypedSelector(({ settings }) => settings.lbtcUnit);

  return (
    <div className="panel panel__grey mb-4">
      <Row>
        <Col span={24}>
          <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey d-inline mr-4" level={3}>
            Collected Swap Fees
          </Title>
          <Popover
            trigger="hover"
            content='Collected swap fees refer to the fees you have collected from traders. The fee is
          charged in the asset "on the way in", which means that if the swap is from USDT to BTC, the fee is
          charged in USDT. The fee can be configured as a percentage of the overall value of the swap, or as a
          fixed amount in the asset on the way in.'
          >
            <InfoCircleOutlined className="grey" />
          </Popover>
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
            <span className="dm-sans dm-sans__x ml-2">{state?.quoteAsset?.formattedTicker ?? ''}</span>
          </div>
        </Col>
      </Row>
    </div>
  );
};
