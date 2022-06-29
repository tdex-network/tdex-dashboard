import type { RadioChangeEvent } from 'antd';
import { Col, Radio, Row, Typography } from 'antd';

import { useTypedDispatch, useTypedSelector } from '../../app/store';
import { LBTC_UNITS } from '../../utils';

import { setLbtcUnit } from './settingsSlice';

const { Title } = Typography;

export const FavoriteBitcoinUnitsRadioButtons = (): JSX.Element => {
  const dispatch = useTypedDispatch();
  const lbtcUnit = useTypedSelector(({ settings }) => settings.lbtcUnit);
  const handleBitcoinUnitChange = (ev: RadioChangeEvent) => dispatch(setLbtcUnit(ev.target.value));

  return (
    <div className="mb-4">
      <Row>
        <Col span={24}>
          <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey text-start" level={3}>
            Favorite Bitcoin Units
          </Title>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Radio.Group onChange={handleBitcoinUnitChange} value={lbtcUnit}>
            <Radio.Button value={LBTC_UNITS[0]}>L-BTC</Radio.Button>
            <Radio.Button value={LBTC_UNITS[1]}>L-mBTC</Radio.Button>
            <Radio.Button value={LBTC_UNITS[2]}>L-bits</Radio.Button>
            <Radio.Button value={LBTC_UNITS[3]}>L-sats</Radio.Button>
          </Radio.Group>
        </Col>
      </Row>
    </div>
  );
};
