import { Button, Form, Input, notification } from 'antd';

import { useChangePasswordMutation } from './wallet.api';

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
      changePassword({
        currentPassword: new TextEncoder().encode(values.currentPassword).toString(),
        newPassword: new TextEncoder().encode(values.newPassword).toString(),
      });
    } catch (err) {
      // @ts-ignore
      notification.error({ message: err.message });
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
        <Input type="password" placeholder="current password" className="input__small" />
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
        <Input type="password" placeholder="new password" className="input__small" />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit">Set Password</Button>
      </Form.Item>
    </Form>
  );
};
