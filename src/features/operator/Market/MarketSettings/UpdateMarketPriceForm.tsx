import { Button, Form, Input, notification } from 'antd';
import React from 'react';

import type { Market } from '../../../../api-spec/generated/js/types_pb';
import type { RootState } from '../../../../app/store';
import { useTypedDispatch, useTypedSelector } from '../../../../app/store';
import { formatFiatToSats, formatLbtcUnitToSats, isLbtcAssetId } from '../../../../utils';
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
        if (!values.basePrice) {
          return notification.error({ message: 'Base price is missing', key: 'Base price is missing' });
        }
        if (!values.quotePrice) {
          return notification.error({ message: 'Quote price is missing', key: 'Quote price is missing' });
        }
        await dispatch(
          operatorApi.endpoints.updateMarketPrice.initiate({
            market,
            price: {
              basePrice: isLbtcAssetId(market?.baseAsset, network)
                ? Number(formatLbtcUnitToSats(values.basePrice, lbtcUnit))
                : Number(formatFiatToSats(values.basePrice)),
              quotePrice: isLbtcAssetId(market?.quoteAsset, network)
                ? Number(formatLbtcUnitToSats(values.quotePrice, lbtcUnit))
                : Number(formatFiatToSats(values.quotePrice)),
            },
          })
        ).unwrap();
        form.resetFields();
        handleMarketSettingsModalCancel();
      } catch (err) {
        if (typeof err === 'string') {
          notification.error({ message: err, key: 'onUpdateMarketFinish error' });
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
      <Form.Item label="Base asset price" name="basePrice">
        <Input
          type="number"
          suffix={isLbtcAssetId(market?.baseAsset || '', network) ? lbtcUnit : baseAssetTicker}
        />
      </Form.Item>
      <Form.Item label="Quote asset price" name="quotePrice">
        <Input
          type="number"
          suffix={isLbtcAssetId(market?.quoteAsset || '', network) ? lbtcUnit : quoteAssetTicker}
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
