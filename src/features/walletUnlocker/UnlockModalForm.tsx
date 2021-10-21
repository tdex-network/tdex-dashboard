import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Form, Input, Modal, notification } from 'antd';
import classNames from 'classnames';
import React, { useState } from 'react';

import { useUnlockWalletMutation } from './walletUnlocker.api';

interface IFormInputs {
  password: string;
}

export const UnlockModalForm = (): JSX.Element => {
  const [form] = Form.useForm<IFormInputs>();
  const [unlockWallet, { error: unlockWalletError, isLoading }] = useUnlockWalletMutation();

  // UnlockWallet Modal
  const [isUnlockWalletModalVisible, setIsUnlockWalletModalVisible] = useState(false);

  const showUnlockWalletModal = () => {
    setIsUnlockWalletModalVisible(true);
  };

  const handleUnlockWalletModalOk = async () => {
    try {
      const values = await form.validateFields();
      const res = await unlockWallet({ password: values.password });
      console.log('res', res);
      form.resetFields();
      // @ts-ignore
      if (res?.error) {
        // @ts-ignore
        throw new Error(res?.error);
      } else {
        setIsUnlockWalletModalVisible(false);
        notification.success({ message: 'Wallet unlocked successfully' });
      }
    } catch (err) {
      // @ts-ignore
      notification.error({ message: err.message });
    }
  };

  const handleUnlockWalletModalCancel = () => {
    setIsUnlockWalletModalVisible(false);
  };

  return (
    <>
      <Button type="text" style={{ padding: 0 }} onClick={showUnlockWalletModal}>
        Unlock Wallet
      </Button>
      <Modal
        title="Unlock Wallet"
        visible={isUnlockWalletModalVisible}
        onOk={handleUnlockWalletModalOk}
        onCancel={handleUnlockWalletModalCancel}
        confirmLoading={isLoading}
      >
        <Form layout="vertical" form={form} name="unlock_wallet_form" wrapperCol={{ span: 16 }}>
          <Form.Item
            label="Password"
            name="password"
            className={classNames({ 'has-error': unlockWalletError })}
          >
            <Input.Password iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
          </Form.Item>
          {unlockWalletError && <p className="error">{unlockWalletError}</p>}
        </Form>
      </Modal>
    </>
  );
};
