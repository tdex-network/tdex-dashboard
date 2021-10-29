import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, notification, Modal } from 'antd';
import classNames from 'classnames';
import React, { useState } from 'react';

import { useNewMarketMutation } from '../operator.api';

interface IFormInputs {
  baseAsset: string;
  quoteAsset: string;
}

export const NewMarketForm = (): JSX.Element => {
  const [form] = Form.useForm<IFormInputs>();
  const [newMarket, { error: newMarketError, isLoading: newMarketIsLoading }] = useNewMarketMutation();

  const [isAddMarketModalVisible, setIsAddMarketModalVisible] = useState(false);
  const showAddMarketModal = () => {
    setIsAddMarketModalVisible(true);
  };
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
        setIsAddMarketModalVisible(false);
      }
    } catch (err) {
      // @ts-ignore
      notification.error({ message: err.message });
    }
  };

  const handleAddMarketModalCancel = () => {
    setIsAddMarketModalVisible(false);
  };

  return (
    <>
      <Button icon={<PlusCircleOutlined />} onClick={showAddMarketModal}>
        CREATE NEW MARKET
      </Button>
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
