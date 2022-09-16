import Icon, { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Breadcrumb, Button, Col, Form, Input, notification, Row } from 'antd';
import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as chevronRight } from '../../../../assets/images/chevron-right.svg';
import { HOME_ROUTE, SETTINGS_ROUTE } from '../../../../routes/constants';
import { useWithdrawMarketFragmenterMutation } from '../../operator.api';

interface IFormInputs {
  millisatsPerByte: number;
  address: string;
  password: string;
}

export const MarketFragmenterWithdraw = (): JSX.Element => {
  const [form] = Form.useForm<IFormInputs>();
  const [
    withdrawMarketFragmenter,
    { error: withdrawMarketFragmenterError, isLoading: withdrawMarketFragmenterIsLoading },
  ] = useWithdrawMarketFragmenterMutation();

  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      const res = await withdrawMarketFragmenter({
        millisatsPerByte: 100,
        address: values.address,
        password: values.password,
      });
      // @ts-ignore
      if (res?.error) throw new Error(res?.error);
      form.resetFields();
      notification.success({ message: 'Market recovery withdrawal successful' });
    } catch (err) {
      // @ts-ignore
      notification.error({ message: err.message });
    }
  };

  return (
    <>
      <Breadcrumb separator={<Icon component={chevronRight} />}>
        <Breadcrumb.Item>
          <Link to={HOME_ROUTE}>Dashboard</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={SETTINGS_ROUTE}>Settings</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Recovery Markets Withdraw</Breadcrumb.Item>
      </Breadcrumb>
      <Row className="panel">
        <Col span={12} offset={12}>
          <Form
            layout="vertical"
            form={form}
            name="withdraw_market_fragmenter_form"
            wrapperCol={{ span: 24 }}
            validateTrigger="onBlur"
            onFinish={onFinish}
            initialValues={{ amount: 0 }}
          >
            <Form.Item name="address" className={classNames({ 'has-error': withdrawMarketFragmenterError })}>
              <Input placeholder="Paste address here or scan QR code" className="input__big" />
            </Form.Item>

            <Form.Item className="submit-btn-container" wrapperCol={{ span: 12, offset: 6 }}>
              <Button htmlType="submit" loading={withdrawMarketFragmenterIsLoading} className="w-100">
                RECOVERY MARKETS WITHDRAW
              </Button>
            </Form.Item>
            <Form.Item name="password">
              <Input.Password
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                className="input__medium"
              />
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};
