import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Form, Input, notification } from 'antd';
import { useState } from 'react';

import { useChangePasswordMutation, useLockWalletMutation, useUnlockWalletMutation } from './wallet.api';

interface IFormInputs {
  currentPassword: string;
  newPassword: string;
}

export const ChangePasswordForm = (): JSX.Element => {
  const [form] = Form.useForm<IFormInputs>();
  const [changePassword] = useChangePasswordMutation();
  const [lockWallet] = useLockWalletMutation();
  const [unlockWallet] = useUnlockWalletMutation();
  const [isUnlockWalletLoading, setIsUnlockWalletLoading] = useState<boolean>(false);

  const onFinish = async () => {
    try {
      setIsUnlockWalletLoading(true);
      const values = await form.validateFields();
      await lockWallet({ password: values.currentPassword });
      await changePassword({
        currentPassword: values.currentPassword,
        newPassword: values.newPassword,
      });
      await unlockWallet({ password: values.newPassword });
    } catch (err) {
      // @ts-ignore
      notification.error({ message: err.message });
    } finally {
      form.resetFields();
      setIsUnlockWalletLoading(false);
    }
  };

  return (
    <Form form={form} name="change_password_form" onFinish={onFinish} validateTrigger="onBlur">
      <Form.Item
        name="currentPassword"
        rules={[
          {
            required: true,
            message: 'Please input your current password',
          },
          {
            min: 8,
            message: 'Password must be 8 characters minimum',
          },
        ]}
      >
        <Input.Password
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          className="input__small"
          placeholder="current password"
        />
      </Form.Item>
      <Form.Item
        name="newPassword"
        rules={[
          {
            required: true,
            message: 'Please input your new password',
          },
          {
            min: 8,
            message: 'Password must be 8 characters minimum',
          },
        ]}
      >
        <Input.Password
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          className="input__small"
          placeholder="new password"
        />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" loading={isUnlockWalletLoading}>
          Change Password
        </Button>
      </Form.Item>
    </Form>
  );
};
