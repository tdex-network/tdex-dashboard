import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Form, Input, notification } from 'antd';
import classNames from 'classnames';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ONBOARDING_CONFIRM_MNEMONIC_ROUTE } from '../../routes/constants';

interface IFormInputs {
  password: string;
  passwordConfirm: string;
}

interface PasswordFormProps {
  mnemonic: string[];
}

export const PasswordForm = ({ mnemonic }: PasswordFormProps): JSX.Element => {
  const [form] = Form.useForm<IFormInputs>();
  const [hasMatchingError, setHasMatchingError] = useState<boolean>(false);
  const navigate = useNavigate();

  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      if (values.password === values.passwordConfirm) {
        setHasMatchingError(false);
        navigate(ONBOARDING_CONFIRM_MNEMONIC_ROUTE, { state: { mnemonic, password: values.password } });
      } else {
        notification.error({ message: "Passwords don't match" });
        setHasMatchingError(true);
      }
    } catch (err) {
      // @ts-ignore
      notification.error({ message: err.message });
    }
  };

  return (
    <Form
      onFinish={onFinish}
      layout="vertical"
      form={form}
      name="set_password_form"
      wrapperCol={{ span: 10, offset: 7 }}
      validateTrigger="onBlur"
    >
      <Form.Item
        name="password"
        className={classNames('input-password', { 'has-error': hasMatchingError })}
        rules={[
          {
            required: true,
            message: 'Please input your password',
          },
          {
            min: 8,
            message: 'Password must be min 8 characters',
          },
        ]}
      >
        <Input.Password
          placeholder="Set Password"
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
      </Form.Item>
      <Form.Item
        name="passwordConfirm"
        className={classNames('input-password', { 'has-error': hasMatchingError })}
        rules={[
          {
            required: true,
            message: 'Please confirm your password',
          },
          {
            min: 8,
            message: 'Password must be min 8 characters',
          },
        ]}
      >
        <Input.Password
          placeholder="Confirm Password"
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
      </Form.Item>
      {hasMatchingError && <p className="error">{hasMatchingError}</p>}
      <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
        <Button htmlType="submit">Go To Mnemonic</Button>
      </Form.Item>
    </Form>
  );
};
