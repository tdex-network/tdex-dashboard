import { Button, Form, Input, Radio } from 'antd';

import { ActionType } from '../../../../api-spec/protobuf/gen/js/tdex-daemon/v2/types_pb';
import { useAddWebhookMutation } from '../../operator.api';

interface IFormInputs {
  notificationType: ActionType;
  notificationUrlInput: string;
  notificationSecretInput: string;
}

export const WebhookForm = (): JSX.Element => {
  const [form] = Form.useForm<IFormInputs>();
  const [addWebhook] = useAddWebhookMutation();

  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      await addWebhook({
        action: values.notificationType,
        endpoint: values.notificationUrlInput,
        secret: values.notificationSecretInput,
      });
      form.resetFields();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Form layout="vertical" form={form} name="webhook_form" onFinish={onFinish} wrapperCol={{ span: 24 }}>
      <Form.Item name="notificationType">
        <Radio.Group className="ghost">
          <Radio.Button value={ActionType.ACTION_TYPE_ALL_ACTIONS}>Any</Radio.Button>
          <Radio.Button value={ActionType.ACTION_TYPE_TRADE_SETTLED}>Trade</Radio.Button>
          <Radio.Button value={ActionType.ACTION_TYPE_ACCOUNT_WITHDRAW}>Withdraw</Radio.Button>
          <Radio.Button value={ActionType.ACTION_TYPE_ACCOUNT_LOW_BALANCE}>Low Balance</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item name="notificationUrlInput" className="mb-2">
        <Input placeholder="Notification URL" className="input__small" />
      </Form.Item>
      <Form.Item name="notificationSecretInput" className="mb-3">
        <Input placeholder="Notification Secret" className="input__small" />
      </Form.Item>
      <Form.Item>
        <Button className="w-100" htmlType="submit">
          ADD WEBHOOK
        </Button>
      </Form.Item>
    </Form>
  );
};
