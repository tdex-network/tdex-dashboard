import { Button, Form, Input, notification } from 'antd';
import React from 'react';

import type { Market } from '../../../../api-spec/protobuf/gen/js/tdex/v2/types_pb';
import { useTypedDispatch } from '../../../../app/store';
import { operatorApi } from '../../operator.api';

interface IFormInputs {
  basePrice: number;
  quotePrice: number;
}

interface UpdateMarketPriceFormProps {
  market?: Market;
  baseAssetTicker: string;
  quoteAssetTicker: string;
  handleMarketSettingsModalCancel: () => void;
}

export const UpdateMarketPriceForm = ({
  market,
  baseAssetTicker,
  quoteAssetTicker,
  handleMarketSettingsModalCancel,
}: UpdateMarketPriceFormProps): JSX.Element => {
  const [form] = Form.useForm<IFormInputs>();
  const dispatch = useTypedDispatch();

  const onUpdateMarketFinish = async () => {
    if (market) {
      try {
        const values = await form.validateFields();
        if (!values.quotePrice) {
          return notification.error({ message: 'Quote price is missing', key: 'Quote price is missing' });
        }
        await dispatch(
          operatorApi.endpoints.updateMarketPrice.initiate({
            market,
            price: {
              basePrice: 1 / values.quotePrice,
              quotePrice: values.quotePrice,
            },
          })
        ).unwrap();
        form.resetFields();
        handleMarketSettingsModalCancel();
      } catch (err) {
        if (typeof err === 'string') {
          notification.error({ message: err, key: 'onUpdateMarketFinish error' });
        }
        if (err instanceof Error) {
          notification.error({ message: err.message, key: 'onUpdateMarketFinish error' });
        }
      }
    }
  };

  return (
    <Form
      form={form}
      name="updateMarketPriceForm"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      onFinish={onUpdateMarketFinish}
    >
      <Form.Item label="Quote asset price" name="quotePrice">
        <Input type="number" suffix={`${quoteAssetTicker} for 1 ${baseAssetTicker}`} />
      </Form.Item>
      <Form.Item wrapperCol={{ span: 24 }}>
        <Button type="primary" htmlType="submit" className="w-100">
          UPDATE MARKET PRICE
        </Button>
      </Form.Item>
    </Form>
  );
};
