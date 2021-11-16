import type { RadioChangeEvent } from 'antd';
import { Col, notification, Row, Radio } from 'antd';
import React, { useEffect, useState } from 'react';

import type { MarketInfo } from '../../../../api-spec/generated/js/operator_pb';
import { StrategyType } from '../../../../api-spec/generated/js/operator_pb';
import { useUpdateMarketStrategyMutation } from '../../operator.api';

interface MarketStrategyProps {
  marketInfo?: MarketInfo.AsObject;
}

export const MarketStrategy = ({ marketInfo }: MarketStrategyProps): JSX.Element => {
  const [updateMarketStrategy] = useUpdateMarketStrategyMutation();
  const [defaultStrategyType, setDefaultStrategyType] = useState<number | undefined>(
    marketInfo?.strategyType
  );

  useEffect(() => {
    if (marketInfo) {
      // TODO: https://github.com/tdex-network/tdex-daemon/issues/500
      const strategy = marketInfo.strategyType === (255 as StrategyType) ? 0 : marketInfo?.strategyType;
      setDefaultStrategyType(strategy);
    }
  }, [marketInfo?.strategyType]);

  const handleChange = async (ev: RadioChangeEvent) => {
    try {
      if (!marketInfo) return;
      const res = await updateMarketStrategy({
        market: {
          baseAsset: marketInfo.market?.baseAsset || '',
          quoteAsset: marketInfo.market?.quoteAsset || '',
        },
        strategyType: ev.target.value,
      });
      // @ts-ignore
      if (res?.error) throw new Error(res?.error);
      notification.success({ message: 'Market strategy updated successfully' });
    } catch (err) {
      // @ts-ignore
      notification.error({ message: err.message });
    }
  };

  return (
    <Row justify="center" style={{ textAlign: 'center' }}>
      <Col span={24}>
        <Radio.Group onChange={handleChange} value={defaultStrategyType}>
          <Radio.Button value={StrategyType.BALANCED}>BALANCED</Radio.Button>
          <Radio.Button value={StrategyType.UNBALANCED}>UNBALANCED</Radio.Button>
          <Radio.Button value={StrategyType.PLUGGABLE}>PLUGGABLE</Radio.Button>
        </Radio.Group>
      </Col>
    </Row>
  );
};
