import type { RadioChangeEvent } from 'antd';
import { Col, notification, Row, Radio } from 'antd';
import React from 'react';

import { StrategyType } from '../../../api-spec/generated/js/operator_pb';
import type { Market } from '../../../api-spec/generated/js/types_pb';
import { useUpdateMarketStrategyMutation } from '../operator.api';

interface MarketStrategyProps {
  market?: Market.AsObject;
}

export const MarketStrategy = ({ market }: MarketStrategyProps): JSX.Element => {
  const [updateMarketStrategy] = useUpdateMarketStrategyMutation();

  const handleChange = async (ev: RadioChangeEvent) => {
    try {
      if (!market) return;
      const res = await updateMarketStrategy({ market, strategyType: ev.target.value });
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
        <Radio.Group onChange={handleChange}>
          <Radio.Button value={StrategyType.BALANCED}>BALANCED</Radio.Button>
          <Radio.Button value={StrategyType.UNBALANCED}>UNBALANCED</Radio.Button>
          <Radio.Button value={StrategyType.PLUGGABLE}>PLUGGABLE</Radio.Button>
        </Radio.Group>
      </Col>
    </Row>
  );
};
