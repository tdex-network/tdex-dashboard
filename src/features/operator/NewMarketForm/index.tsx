import { Form, Input, notification, Modal } from 'antd';
import classNames from 'classnames';
import React from 'react';

import { useNewMarketMutation } from '../operator.api';

interface IFormInputs {
  baseAsset: string;
  quoteAsset: string;
}

interface NewMarketFormProps {
  isAddMarketModalVisible: boolean;
  handleAddMarketModalCancel: () => void;
}

export const NewMarketForm = ({
  isAddMarketModalVisible,
  handleAddMarketModalCancel,
}: NewMarketFormProps): JSX.Element => {
  const [form] = Form.useForm<IFormInputs>();
  const [newMarket, { error: newMarketError, isLoading: newMarketIsLoading }] = useNewMarketMutation();

  const handleAddMarketModalOk = async () => {
    try {
      const values = await form.validateFields();
      const res = await newMarket({ baseAsset: values.baseAsset, quoteAsset: values.quoteAsset });
      // @ts-ignore
      if (res?.error) {
        // @ts-ignore
        throw new Error(res?.error);
      } else {
        form.resetFields();
        notification.success({ message: 'New market created successfully' });
        handleAddMarketModalCancel();
      }
    } catch (err) {
      // @ts-ignore
      notification.error({ message: err.message });
    }
  };

  return (
    <>
      <Modal
        title="Add Market"
        visible={isAddMarketModalVisible}
        onOk={handleAddMarketModalOk}
        onCancel={handleAddMarketModalCancel}
        confirmLoading={newMarketIsLoading}
      >
        <Form
          layout="vertical"
          form={form}
          name="new_market_form"
          wrapperCol={{ span: 24 }}
          validateTrigger="onBlur"
        >
          <Form.Item
            label="Base Asset"
            name="baseAsset"
            className={classNames({ 'has-error': newMarketError })}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Quote Asset"
            name="quoteAsset"
            className={classNames({ 'has-error': newMarketError })}
          >
            <Input />
          </Form.Item>
          {newMarketError && <p className="error">{newMarketError}</p>}
        </Form>
      </Modal>
    </>
  );
};
