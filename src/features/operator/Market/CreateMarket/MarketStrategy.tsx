import type { RadioChangeEvent } from 'antd';
import { Col, Row, Radio } from 'antd';

import { StrategyType } from '../../../../api-spec/protobuf/gen/js/tdex-daemon/v2/types_pb';

interface MarketStrategyProps {
  setStrategyType: (strategyType: StrategyType) => void;
}

export const MarketStrategy = ({ setStrategyType }: MarketStrategyProps): JSX.Element => {
  const handleChange = async (ev: RadioChangeEvent) => {
    setStrategyType(ev.target.value);
  };

  return (
    <Row justify="center" className="text-center">
      <Col span={24}>
        <Radio.Group onChange={handleChange} defaultValue={StrategyType.STRATEGY_TYPE_BALANCED}>
          <Radio.Button value={StrategyType.STRATEGY_TYPE_BALANCED}>BALANCED</Radio.Button>
          <Radio.Button disabled value={StrategyType.STRATEGY_TYPE_UNBALANCED}>
            UNBALANCED
          </Radio.Button>
          <Radio.Button disabled value={StrategyType.STRATEGY_TYPE_PLUGGABLE}>
            PLUGGABLE
          </Radio.Button>
        </Radio.Group>
      </Col>
    </Row>
  );
};
