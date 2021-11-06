import type { SerializedError } from '@reduxjs/toolkit';
import type { FormInstance } from 'antd';
import { Button, Form, Select, Modal, notification } from 'antd';
import classNames from 'classnames';
import React, { useState } from 'react';

import { StrategyType } from '../../../api-spec/generated/js/operator_pb';
import type { Market } from '../../../api-spec/generated/js/types_pb';
import { useUpdateMarketStrategyMutation } from '../operator.api';

const { Option } = Select;

export interface UpdateMarketStrategyFormInputs {
  strategyType: any;
}

interface UpdateMarketStrategyProps {
  market?: Market.AsObject;
}

interface UpdateMarketStrategyFormProps {
  form: FormInstance<UpdateMarketStrategyFormInputs>;
  updateMarketStrategyError?: string | SerializedError;
}

export const UpdateMarketStrategyForm = ({
  form,
  updateMarketStrategyError,
}: UpdateMarketStrategyFormProps): JSX.Element => {
  const handleStrategyChange = (value: StrategyType) => {
    form.setFieldsValue({ strategyType: value });
  };

  return (
    <Form
      layout="vertical"
      form={form}
      name="update_market_strategy_form"
      wrapperCol={{ span: 24 }}
      validateTrigger="onBlur"
    >
      <Form.Item
        label="Market Strategy"
        name="strategyType"
        className={classNames({ 'has-error': updateMarketStrategyError })}
      >
        <Select defaultValue={StrategyType.PLUGGABLE} style={{ width: 120 }} onChange={handleStrategyChange}>
          <Option value={StrategyType.PLUGGABLE}>Pluggable</Option>
          <Option value={StrategyType.BALANCED}>Balanced</Option>
          <Option value={StrategyType.UNBALANCED}>Unbalanced</Option>
        </Select>
      </Form.Item>
      {updateMarketStrategyError && <p className="error">{updateMarketStrategyError}</p>}
    </Form>
  );
};

export const UpdateMarketStrategy = ({ market }: UpdateMarketStrategyProps): JSX.Element => {
  const [form] = Form.useForm<UpdateMarketStrategyFormInputs>();
  const [
    updateMarketStrategy,
    { error: updateMarketStrategyError, isLoading: updateMarketStrategyIsLoading },
  ] = useUpdateMarketStrategyMutation();
  const [isUpdateMarketStrategyModalVisible, setIsUpdateMarketStrategyModalVisible] = useState(false);
  const showUpdateMarketStrategyModal = () => {
    setIsUpdateMarketStrategyModalVisible(true);
  };
  const handleUpdateMarketStrategyModalOk = async () => {
    try {
      if (!market) return;
      const values = await form.validateFields();
      const res = await updateMarketStrategy({ market, strategyType: values.strategyType, meta: '' });
      form.resetFields();
      // @ts-ignore
      if (res?.error) {
        // @ts-ignore
        throw new Error(res?.error);
      } else {
        notification.success({ message: 'Market strategy updated successfully' });
        setIsUpdateMarketStrategyModalVisible(false);
      }
    } catch (err) {
      // @ts-ignore
      notification.error({ message: err.message });
    }
  };

  const handleUpdateMarketStrategyModalCancel = () => {
    setIsUpdateMarketStrategyModalVisible(false);
  };

  return (
    <>
      <Button onClick={showUpdateMarketStrategyModal}>Update Market Strategy</Button>
      <Modal
        title="Update Market Strategy"
        visible={isUpdateMarketStrategyModalVisible}
        onOk={handleUpdateMarketStrategyModalOk}
        onCancel={handleUpdateMarketStrategyModalCancel}
        confirmLoading={updateMarketStrategyIsLoading}
      >
        <UpdateMarketStrategyForm form={form} updateMarketStrategyError={updateMarketStrategyError} />
      </Modal>
    </>
  );
};
