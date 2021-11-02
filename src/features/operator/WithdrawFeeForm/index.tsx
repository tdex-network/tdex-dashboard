import Icon from '@ant-design/icons';
import { Button, Form, Input, Modal, notification } from 'antd';
import classNames from 'classnames';
import React, { useState } from 'react';

import { ReactComponent as depositIcon } from '../../../assets/images/deposit-green.svg';
import { useWithdrawFeeMutation } from '../operator.api';

interface IFormInputs {
  amount: number;
  millisatsPerByte: number;
  address: string;
  asset: string;
}

export const WithdrawFeeForm = (): JSX.Element => {
  const [form] = Form.useForm<IFormInputs>();
  const [withdrawFee, { error: withdrawFeeError, isLoading: withdrawFeeIsLoading }] =
    useWithdrawFeeMutation();

  const [isWithdrawFeeModalVisible, setIsWithdrawFeeModalVisible] = useState(false);
  const showWithdrawFeeModal = () => setIsWithdrawFeeModalVisible(true);
  const handleWithdrawFeeModalCancel = () => setIsWithdrawFeeModalVisible(false);
  const handleWithdrawFeeModalOk = async () => {
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
        setIsWithdrawFeeModalVisible(false);
      }
    } catch (err) {
      // @ts-ignore
      notification.error({ message: err.message });
    }
  };

  return (
    <>
      <Button
        className="rotate-icon w-100 justify-center"
        icon={<Icon component={depositIcon} />}
        onClick={showWithdrawFeeModal}
      >
        WITHDRAW
      </Button>
      <Modal
        title="Withdraw Fee"
        visible={isWithdrawFeeModalVisible}
        onOk={handleWithdrawFeeModalOk}
        onCancel={handleWithdrawFeeModalCancel}
        confirmLoading={withdrawFeeIsLoading}
      >
        <Form
          layout="vertical"
          form={form}
          name="withdraw_fee_form"
          wrapperCol={{ span: 24 }}
          validateTrigger="onBlur"
        >
          <Form.Item label="Amount" name="amount" className={classNames({ 'has-error': withdrawFeeError })}>
            <Input type="number" />
          </Form.Item>

          <Form.Item label="Address" name="address" className={classNames({ 'has-error': withdrawFeeError })}>
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
          {withdrawFeeError && <p className="error">{withdrawFeeError}</p>}
        </Form>
      </Modal>
    </>
  );
};
