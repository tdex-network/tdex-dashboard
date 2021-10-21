import { Button, Form, Input, Modal, notification } from 'antd';
import classNames from 'classnames';
import React, { useState } from 'react';

import type { Market } from '../../../api-spec/generated/js/types_pb';
import { useUpdateMarketPercentageFeeMutation } from '../operator.api';

interface IFormInputs {
  basisPoint: number;
}

interface UpdateMarketPercentageFeeFormProps {
  market?: Market.AsObject;
}

export const UpdateMarketPercentageFeeForm = ({
  market,
}: UpdateMarketPercentageFeeFormProps): JSX.Element => {
  const [form] = Form.useForm<IFormInputs>();
  const [
    updateMarketPercentageFee,
    { error: updateMarketPercentageFeeError, isLoading: updateMarketPercentageFeeIsLoading },
  ] = useUpdateMarketPercentageFeeMutation();

  const [isUpdateMarketPercentageFeeModalVisible, setIsUpdateMarketPercentageFeeModalVisible] =
    useState(false);
  const showUpdateMarketPercentageFeeModal = () => {
    setIsUpdateMarketPercentageFeeModalVisible(true);
  };
  const handleUpdateMarketPercentageFeeModalOk = async () => {
    try {
      if (!market) return;
      const values = await form.validateFields();
      const res = await updateMarketPercentageFee({ basisPoint: values.basisPoint, market: market });
      form.resetFields();
      // @ts-ignore
      if (res?.error) {
        // @ts-ignore
        throw new Error(res?.error);
      } else {
        notification.success({ message: 'Market percentage fee updated successfully' });
        setIsUpdateMarketPercentageFeeModalVisible(false);
      }
    } catch (err) {
      // @ts-ignore
      notification.error({ message: err.message });
    }
  };

  const handleUpdateMarketPercentageFeeModalCancel = () => {
    setIsUpdateMarketPercentageFeeModalVisible(false);
  };

  return (
    <>
      <Button onClick={showUpdateMarketPercentageFeeModal}>Update Market Percentage Fee</Button>
      <Modal
        title="Update Market Percentage Fee"
        visible={isUpdateMarketPercentageFeeModalVisible}
        onOk={handleUpdateMarketPercentageFeeModalOk}
        onCancel={handleUpdateMarketPercentageFeeModalCancel}
        confirmLoading={updateMarketPercentageFeeIsLoading}
      >
        <Form
          layout="vertical"
          form={form}
          name="update_market_percentage_fee_form"
          wrapperCol={{ span: 24 }}
          validateTrigger="onBlur"
        >
          <Form.Item
            label="Basis Point"
            name="basisPoint"
            className={classNames({ 'has-error': updateMarketPercentageFeeError })}
          >
            <Input type="number" />
          </Form.Item>
          {updateMarketPercentageFeeError && <p className="error">{updateMarketPercentageFeeError}</p>}
        </Form>
      </Modal>
    </>
  );
};
