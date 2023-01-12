import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Form, Input, Modal, notification } from 'antd';
import classNames from 'classnames';

import { useUnlockWalletMutation } from './wallet.api';

interface IFormInputs {
  password: string;
}

interface UnlockModalFormProps {
  closable?: boolean;
  handleUnlockWalletModalCancel: () => void;
  isUnlockWalletModalVisible: boolean;
}

export const UnlockModalForm = ({
  closable = true,
  handleUnlockWalletModalCancel,
  isUnlockWalletModalVisible,
}: UnlockModalFormProps): JSX.Element => {
  const [form] = Form.useForm<IFormInputs>();
  const [unlockWallet, { error: unlockWalletError, isLoading }] = useUnlockWalletMutation();

  const handleUnlockWalletModalOk = async () => {
    try {
      const values = await form.validateFields();
      const res = await unlockWallet({ password: values.password });
      // @ts-ignore
      if (res?.error) throw new Error(res?.error);
      notification.success({ message: 'Wallet unlocked successfully' });
      form.resetFields();
      handleUnlockWalletModalCancel();
    } catch (err) {
      // @ts-ignore
      notification.error({ message: err.message });
    }
  };

  return (
    <Modal
      style={{ textAlign: 'center' }}
      title="Unlock Wallet"
      open={isUnlockWalletModalVisible}
      onOk={handleUnlockWalletModalOk}
      onCancel={() => {
        form.resetFields();
        handleUnlockWalletModalCancel();
      }}
      confirmLoading={isLoading}
      closable={closable}
      maskClosable={closable}
      maskStyle={{ backdropFilter: 'blur(6px)' }}
      footer={
        closable
          ? undefined
          : [
              <Button key="unlock" loading={isLoading} onClick={handleUnlockWalletModalOk} className="w-100">
                UNLOCK
              </Button>,
            ]
      }
    >
      <Form layout="vertical" form={form} name="unlock_wallet_form" wrapperCol={{ span: 24 }}>
        <Form.Item
          noStyle
          label="Enter your password"
          name="password"
          className={classNames({ 'has-error': unlockWalletError })}
        >
          <Input.Password
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            className="input__medium"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};
