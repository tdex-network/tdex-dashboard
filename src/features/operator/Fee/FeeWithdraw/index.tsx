import Icon from '@ant-design/icons';
import { Breadcrumb, Button, Col, Form, Input, notification, Row, Typography } from 'antd';
import classNames from 'classnames';
import React from 'react';

import { ReactComponent as chevronRight } from '../../../../assets/images/chevron-right.svg';
import { HOME_ROUTE } from '../../../../routes/constants';
import { useWithdrawFeeMutation } from '../../operator.api';

const { Title } = Typography;

interface IFormInputs {
  amount: number;
  millisatsPerByte: number;
  address: string;
  asset: string;
}

export const FeeWithdraw = (): JSX.Element => {
  const [form] = Form.useForm<IFormInputs>();
  const [withdrawFee, { error: withdrawFeeError, isLoading: withdrawFeeIsLoading }] =
    useWithdrawFeeMutation();

  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      const res = await withdrawFee({
        amount: values.amount,
        millisatsPerByte: values.millisatsPerByte,
        address: values.address,
        asset: values.asset,
      });
      // @ts-ignore
      if (res?.error) {
        // @ts-ignore
        throw new Error(res?.error);
      } else {
        form.resetFields();
        notification.success({ message: 'Fee withdrawal successful' });
      }
    } catch (err) {
      // @ts-ignore
      notification.error({ message: err.message });
    }
  };

  return (
    <>
      <Breadcrumb separator={<Icon component={chevronRight} />} className="mb-2">
        <Breadcrumb.Item>
          <a href={HOME_ROUTE}>Dashboard</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Fee Withdraw</Breadcrumb.Item>
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
            name="withdraw_fee_form"
            wrapperCol={{ span: 24 }}
            validateTrigger="onBlur"
            onFinish={onFinish}
          >
            <Form.Item label="Amount" name="amount" className={classNames({ 'has-error': withdrawFeeError })}>
              <Input type="number" />
            </Form.Item>

            <Form.Item
              label="Address"
              name="address"
              className={classNames({ 'has-error': withdrawFeeError })}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Millisats Per Byte"
              name="millisatsPerByte"
              className={classNames({ 'has-error': withdrawFeeError })}
            >
              <Input type="number" />
            </Form.Item>

            <Form.Item label="Asset" name="asset" className={classNames({ 'has-error': withdrawFeeError })}>
              <Input />
            </Form.Item>
            <Button loading={withdrawFeeIsLoading}>CONFIRM WITHDRAW</Button>
            {withdrawFeeError && <p className="error">{withdrawFeeError}</p>}
          </Form>
        </Col>
      </Row>
    </>
  );
};
