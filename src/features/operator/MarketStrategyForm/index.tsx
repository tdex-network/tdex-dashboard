import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Col, Form, notification, Row, Typography, Radio } from 'antd';
import React from 'react';

import { StrategyType } from '../../../api-spec/generated/js/operator_pb';
import type { Market } from '../../../api-spec/generated/js/types_pb';
import { useUpdateMarketStrategyMutation } from '../operator.api';

const { Title } = Typography;

interface IFormInputs {
  strategyType: StrategyType;
}

interface MarketStrategyFormProps {
  market: Market.AsObject;
  className: string;
}

export const MarketStrategyForm = ({ market, className }: MarketStrategyFormProps): JSX.Element => {
  const [form] = Form.useForm<IFormInputs>();
  const [updateMarketStrategy] = useUpdateMarketStrategyMutation();

  const onFinish = async () => {
    try {
      if (!market) return;
      const values = await form.validateFields();
      console.log('values.strategyType', values.strategyType);
      const res = await updateMarketStrategy({ market, strategyType: values.strategyType });
      // @ts-ignore
      if (res?.error) {
        // @ts-ignore
        throw new Error(res?.error);
      } else {
        form.resetFields();
        notification.success({ message: 'Market strategy updated successfully' });
      }
    } catch (err) {
      // @ts-ignore
      notification.error({ message: err.message });
    }
  };

  return (
    <Form
      layout="vertical"
      form={form}
      name="update_market_strategy_form"
      wrapperCol={{ span: 24 }}
      validateTrigger="onBlur"
      initialValues={{ strategyType: StrategyType.BALANCED }}
      className={className}
    >
      <div className="panel panel__grey">
        <Row className="mb-4">
          <Col span={24}>
            <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey d-inline mr-4" level={3}>
              Set Market Strategy
            </Title>
            <InfoCircleOutlined />
          </Col>
        </Row>
        <Row justify="center" style={{ textAlign: 'center' }}>
          <Col span={24}>
            <Form.Item name="strategyType">
              <Radio.Group>
                <Radio.Button value={StrategyType.BALANCED}>BALANCED</Radio.Button>
                <Radio.Button value={StrategyType.UNBALANCED}>UNBALANCED</Radio.Button>
                <Radio.Button value={StrategyType.PLUGGABLE}>PLUGGABLE</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
      </div>
      <Form.Item>
        <Button htmlType="submit" className="w-100 my-4" onClick={onFinish}>
          CONFIRM STRATEGY
        </Button>
      </Form.Item>
    </Form>
  );
};
