import { Button, Form, Input, notification } from 'antd';
import React from 'react';

import { useTypedDispatch } from '../../../../app/store';
import type { Asset } from '../../../../domain/asset';
import { setMarketLabelled } from '../../../settings/settingsSlice';

interface IFormInputs {
  label: string;
}

interface MarketLabelFormProps {
  baseAsset: Asset;
  quoteAsset: Asset;
  className: string;
  incrementStep: () => void;
}

export const MarketLabelForm = ({
  baseAsset,
  quoteAsset,
  className,
  incrementStep,
}: MarketLabelFormProps): JSX.Element => {
  const dispatch = useTypedDispatch();
  const [form] = Form.useForm<IFormInputs>();

  const onFinish = async () => {
    const values = await form.validateFields();
    const marketStr = JSON.stringify({
      baseAssetTicker: baseAsset?.ticker,
      quoteAssetTicker: quoteAsset?.ticker,
    });
    dispatch(setMarketLabelled({ marketStr, label: values.label }));
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
