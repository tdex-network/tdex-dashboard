import { Button, Form, Modal, Row, Col, Slider, Typography } from 'antd';
import React, { useState } from 'react';

import type { Market } from '../../../api-spec/generated/js/types_pb';
import type { UpdateMarketStrategyFormInputs } from '../UpdateMarketStrategyForm';
import { UpdateMarketStrategyForm } from '../UpdateMarketStrategyForm';

interface MarketSettingsProps {
  market?: Market.AsObject;
}

interface StandardFeeFormInputs {
  basisPoint: number;
}

const { Title } = Typography;

export const MarketSettings = ({ market }: MarketSettingsProps): JSX.Element => {
  console.log('market', market);
  const [standardFeeForm] = Form.useForm<StandardFeeFormInputs>();
  const [marketStrategyForm] = Form.useForm<UpdateMarketStrategyFormInputs>();

  const [isMarketSettingsModalVisible, setIsMarketSettingsModalVisible] = useState(false);

  const showMarketSettingsModal = () => {
    setIsMarketSettingsModalVisible(true);
  };

  const handleMarketSettingsModalCancel = () => {
    setIsMarketSettingsModalVisible(false);
  };

  return (
    <>
      <Button onClick={showMarketSettingsModal}>Settings</Button>
      <Modal
        title="Market Settings"
        visible={isMarketSettingsModalVisible}
        onCancel={handleMarketSettingsModalCancel}
        closable={false}
        footer={<></>}
      >
        <Form
          layout="vertical"
          form={standardFeeForm}
          name="market_settings_form"
          wrapperCol={{ span: 24 }}
          validateTrigger="onBlur"
        >
          <Row>
            <Col>SET STANDARD FEE</Col>
            <Col>
              <Button>FIXED</Button>
              <Button>%</Button>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item name="slider" label="Slider">
                <Slider
                  marks={{
                    0: '0',
                    20: '0.1',
                    40: '0.2',
                    60: '0.3',
                    80: '0.4',
                    100: '0.5',
                  }}
                />
              </Form.Item>
            </Col>
          </Row>

          <Title level={2}>Pluggable Strategy</Title>
          <Row>
            <Col>
              <UpdateMarketStrategyForm form={marketStrategyForm} />
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};
