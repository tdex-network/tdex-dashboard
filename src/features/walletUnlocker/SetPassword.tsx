import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Form, Input, notification } from 'antd';
import classNames from 'classnames';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { SHOW_SEED_ROUTE } from '../../routes/constants';

interface IFormInputs {
  password: string;
  passwordConfirm: string;
}

export const SetPassword = (): JSX.Element => {
  return (
    <>
      <h2>Choose A Password</h2>
      <PasswordForm />
    </>
  );
};

export const PasswordForm = (): JSX.Element => {
  const [form] = Form.useForm<IFormInputs>();
  const [hasMatchingError, setHasMatchingError] = useState<boolean>(false);
  const history = useHistory();

  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      if (values.password === values.passwordConfirm) {
        setHasMatchingError(false);
        history.push(SHOW_SEED_ROUTE, { password: values.password });
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
      wrapperCol={{ span: 16 }}
      validateTrigger="onBlur"
    >
      <Form.Item
        label="Password"
        name="password"
        className={classNames({ 'has-error': hasMatchingError })}
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
        <Input.Password iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
      </Form.Item>
      <Form.Item
        label="Confirm Password"
        name="passwordConfirm"
        className={classNames({ 'has-error': hasMatchingError })}
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
        <Input.Password iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
      </Form.Item>
      {hasMatchingError && <p className="error">{hasMatchingError}</p>}
      <Form.Item>
        <Button htmlType="submit">Set Password</Button>
      </Form.Item>
    </Form>
  );
};
