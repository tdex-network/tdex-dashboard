import { Button, Form, Input, notification } from 'antd';
import React from 'react';

import type { Market } from '../../../../api-spec/protobuf/gen/js/tdex/v1/types_pb';
import type { RootState } from '../../../../app/store';
import { useTypedDispatch, useTypedSelector } from '../../../../app/store';
import { isLbtcAssetId, unitToExponent } from '../../../../utils';
import { operatorApi } from '../../operator.api';

interface IFormInputs {
  basePrice: number;
  quotePrice: number;
}

interface UpdateMarketPriceFormProps {
  market?: Market.AsObject;
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
  const { lbtcUnit, network } = useTypedSelector(({ settings }: RootState) => settings);

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
              basePrice: isLbtcAssetId(market?.baseAsset, network)
                ? Math.pow(10, -unitToExponent(lbtcUnit)) / values.quotePrice
                : 1 / values.quotePrice,
              quotePrice: isLbtcAssetId(market?.quoteAsset, network)
                ? Math.pow(10, -unitToExponent(lbtcUnit)) / values.quotePrice
                : values.quotePrice * Math.pow(10, unitToExponent(lbtcUnit)),
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
        <Input
          type="number"
          suffix={`${isLbtcAssetId(market?.quoteAsset || '', network) ? lbtcUnit : quoteAssetTicker} for 1 ${
            isLbtcAssetId(market?.baseAsset || '', network) ? lbtcUnit : baseAssetTicker
          }`}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ span: 24 }}>
        <Button type="primary" htmlType="submit" className="w-100">
          UPDATE MARKET PRICE
        </Button>
      </Form.Item>
    </Form>
  );
};
