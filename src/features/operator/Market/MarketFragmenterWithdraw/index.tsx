import Icon from '@ant-design/icons';
import { Breadcrumb, Button, Col, Form, Input, notification, Row, Typography } from 'antd';
import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as chevronRight } from '../../../../assets/images/chevron-right.svg';
import { HOME_ROUTE } from '../../../../routes/constants';
import { useWithdrawMarketFragmenterMutation } from '../../operator.api';

const { Title } = Typography;

interface IFormInputs {
  millisatsPerByte: number;
  address: string;
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
      <Breadcrumb separator={<Icon component={chevronRight} />} className="mb-2">
        <Breadcrumb.Item>
          <Link to={HOME_ROUTE}>Dashboard</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Recovery Markets Withdraw</Breadcrumb.Item>
      </Breadcrumb>
      <Row className="panel">
        <Col span={12} className="pr-10">
          <Title level={4}>READ CAREFULLY!</Title>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.,Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.,,- It has survived not only five centuries,-
            but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <p>
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
        </Col>
        <Col span={12}>
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
          </Form>
        </Col>
      </Row>
    </>
  );
};
