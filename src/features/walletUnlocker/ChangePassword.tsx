import { Button, Form, Input, notification } from 'antd';
import React from 'react';

import { useChangePasswordMutation } from './walletUnlocker.api';

interface IFormInputs {
  currentPassword: string;
  newPassword: string;
}

export const ChangePasswordForm = (): JSX.Element => {
  const [form] = Form.useForm<IFormInputs>();
  const [changePassword] = useChangePasswordMutation();

  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      changePassword({ currentPassword: values.currentPassword, newPassword: values.newPassword });
    } catch (err) {
      // @ts-ignore
      notification.error({ message: err.message });
    }
  };

  return (
    <Form form={form} name="change_password_form" onFinish={onFinish} validateTrigger="onBlur">
      <Form.Item name="currentPassword">
        <Input type="password" placeholder="password" />
      </Form.Item>
      <Form.Item name="newPassword">
        <Input type="password" placeholder="password" />
      </Form.Item>
      <Form.Item>
        <Button>Set Password</Button>
      </Form.Item>
    </Form>
  );
};
