import type { RadioChangeEvent } from 'antd';
import { Col, Input, Radio, Row } from 'antd';
import React from 'react';

import { ActionType } from '../../../../api-spec/generated/js/operator_pb';

export const Webhook = (): JSX.Element => {
  const handleNotificationChange = (ev: RadioChangeEvent) => {
    console.log(ev.target.value);
  };

  return (
    <>
      <Row>
        <Col span={24}>
          <Radio.Group onChange={handleNotificationChange} className="ghost">
            <Radio.Button value={ActionType.TRADE_SETTLED}>Trade</Radio.Button>
            <Radio.Button value={ActionType.ACCOUNT_WITHDRAW}>Withdraw</Radio.Button>
            <Radio.Button value={ActionType.ACCOUNT_LOW_BALANCE}>Low Balance</Radio.Button>
          </Radio.Group>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Input placeholder="Notification URL" className="my-3" />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Input placeholder="Notification Secret" />
        </Col>
      </Row>
    </>
  );
};
