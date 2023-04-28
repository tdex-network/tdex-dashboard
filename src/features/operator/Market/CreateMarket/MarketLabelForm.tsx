import { Button, Form, Input, notification } from 'antd';

interface IFormInputs {
  label: string;
}

interface MarketLabelFormProps {
  className: string;
  incrementStep: () => void;
  setLabel: (label: string) => void;
}

export const MarketLabelForm = ({
  className,
  incrementStep,
  setLabel,
}: MarketLabelFormProps): JSX.Element => {
  const [form] = Form.useForm<IFormInputs>();

  const onFinish = async () => {
    const { label } = await form.validateFields();
    setLabel(label);
    incrementStep();
    notification.success({ message: 'Label attached successfully' });
  };

  return (
    <Form
      layout="vertical"
      form={form}
      name="market_label_form"
      wrapperCol={{ span: 24 }}
      validateTrigger="onBlur"
      onFinish={onFinish}
      className={className}
    >
      <Form.Item name="label">
        <Input placeholder="Attach a custom label to this market or leave blank" className="input__big" />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" className="w-100">
          ATTACH CUSTOM LABEL
        </Button>
      </Form.Item>
    </Form>
  );
};
