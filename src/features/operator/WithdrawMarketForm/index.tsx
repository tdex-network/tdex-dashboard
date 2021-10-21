import { Button, Form, Input, Modal, notification } from 'antd';
import classNames from 'classnames';
import React, { useState } from 'react';

import type { Balance, Market } from '../../../api-spec/generated/js/types_pb';
import { useWithdrawMarketMutation } from '../operator.api';

interface IFormInputs {
  market: Market.AsObject;
  balance: Balance.AsObject;
  address: string;
  millisatPerByte: number;
}

interface WithdrawMarketFormProps {
  market?: Market.AsObject;
}

export const WithdrawMarketForm = ({ market }: WithdrawMarketFormProps): JSX.Element => {
  const [form] = Form.useForm<IFormInputs>();
  const [withdrawMarket, { error: withdrawMarketError, isLoading: withdrawMarketIsLoading }] =
    useWithdrawMarketMutation();

  const [isWithdrawMarketModalVisible, setIsWithdrawMarketModalVisible] = useState(false);
  const showWithdrawMarketModal = () => {
    setIsWithdrawMarketModalVisible(true);
  };
  const handleWithdrawMarketModalOk = async () => {
    try {
      if (!market) return;
      const values = await form.validateFields();
      const res = await withdrawMarket({
        market: market,
        balance: { baseAmount: values.balance.baseAmount, quoteAmount: values.balance.quoteAmount },
        address: values.address,
        millisatPerByte: values.millisatPerByte,
      });
      form.resetFields();
      // @ts-ignore
      if (res?.error) {
        // @ts-ignore
        throw new Error(res?.error);
      } else {
        notification.success({ message: 'Market withdrawal successful' });
        setIsWithdrawMarketModalVisible(false);
      }
    } catch (err) {
      // @ts-ignore
      notification.error({ message: err.message });
    }
  };

  const handleWithdrawMarketModalCancel = () => {
    setIsWithdrawMarketModalVisible(false);
  };

  return (
    <>
      <Button onClick={showWithdrawMarketModal}>Withdraw</Button>
      <Modal
        title="Withdraw Market"
        visible={isWithdrawMarketModalVisible}
        onOk={handleWithdrawMarketModalOk}
        onCancel={handleWithdrawMarketModalCancel}
        confirmLoading={withdrawMarketIsLoading}
      >
        <Form
          layout="vertical"
          form={form}
          name="withdraw_market_form"
          wrapperCol={{ span: 24 }}
          validateTrigger="onBlur"
        >
          <Form.Item
            label="Balance"
            name="balance"
            className={classNames({ 'has-error': withdrawMarketError })}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            className={classNames({ 'has-error': withdrawMarketError })}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Millisats Per Byte"
            name="millisatPerByte"
            className={classNames({ 'has-error': withdrawMarketError })}
          >
            <Input type="number" />
          </Form.Item>
          {withdrawMarketError && <p className="error">{withdrawMarketError}</p>}
        </Form>
      </Modal>
    </>
  );
};
