import type { RadioChangeEvent } from 'antd';
import { Col, Radio, Row, Typography } from 'antd';

import { useTypedDispatch, useTypedSelector } from '../../app/store';
import { CURRENCIES } from '../../utils';

import { setCurrency } from './settingsSlice';

const { Title } = Typography;

export const DefaultCurrencyRadioButtons = (): JSX.Element => {
  const dispatch = useTypedDispatch();
  const currency = useTypedSelector(({ settings }) => settings.currency);

  const onDefaultCurrencyChange = (event: RadioChangeEvent) => {
    const selectedCurrency = CURRENCIES.find((currency) => currency.value === event.target.value);
    selectedCurrency && dispatch(setCurrency(selectedCurrency));
  };

  return (
    <div className="mb-4">
      <Row>
        <Col span={24}>
          <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey" level={3}>
            Default currency
          </Title>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Radio.Group onChange={onDefaultCurrencyChange} value={currency.value}>
            <Radio.Button value={CURRENCIES[0].value}>{CURRENCIES[0].value.toUpperCase()}</Radio.Button>
            <Radio.Button value={CURRENCIES[1].value}>{CURRENCIES[1].value.toUpperCase()}</Radio.Button>
            <Radio.Button value={CURRENCIES[2].value}>{CURRENCIES[2].value.toUpperCase()}</Radio.Button>
            <Radio.Button value={CURRENCIES[3].value}>{CURRENCIES[3].value.toUpperCase()}</Radio.Button>
          </Radio.Group>
        </Col>
      </Row>
    </div>
  );
};
