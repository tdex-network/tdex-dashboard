import Icon, { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Breadcrumb, Button, Col, Form, Input, notification, Row } from 'antd';
import classNames from 'classnames';
import { address } from 'liquidjs-lib';
import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as chevronRight } from '../../../../assets/images/chevron-right.svg';
import { HOME_ROUTE, SETTINGS_ROUTE } from '../../../../routes/constants';
import { useGetFeeFragmenterBalanceQuery, useWithdrawMarketFragmenterMutation } from '../../operator.api';

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
  const { data: feeFragmenterBalance } = useGetFeeFragmenterBalanceQuery();

  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      const feeFragmenterBalanceArray = Object.entries(feeFragmenterBalance || []);
      if (feeFragmenterBalanceArray.length && values.address) {
        const res = await withdrawMarketFragmenter({
          millisatsPerByte: 100,
          outputs: feeFragmenterBalanceArray.map(([asset, balance]) => ({
            script: address.fromConfidential(values.address).scriptPubKey?.toString('hex') ?? '',
            asset: asset,
            amount: balance.totalBalance,
            blindingKey: address.fromConfidential(values.address).blindingKey.toString('hex'),
          })),
          password: values.password,
        });
        // @ts-ignore
        if (res?.error) throw new Error(res?.error);
        form.resetFields();
        notification.success({
          message: 'Market recovery withdrawal successful',
          key: 'Market recovery withdrawal successful',
        });
      } else {
        notification.error({
          message: 'No funds to retrieve in fragmenter account',
          key: 'No funds to retrieve in fragmenter account',
        });
      }
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
            <Form.Item name="password">
              <Input.Password
                placeholder="Password"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                className="input__medium"
              />
            </Form.Item>
            <Form.Item className="submit-btn-container" wrapperCol={{ span: 12, offset: 6 }}>
              <Button htmlType="submit" loading={withdrawMarketFragmenterIsLoading} className="w-100">
                RECOVERY MARKETS WITHDRAW
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};
