import Icon from '@ant-design/icons';
import { Button, Form, Input, Modal, notification } from 'antd';
import classNames from 'classnames';
import React, { useState } from 'react';

import { ReactComponent as depositIcon } from '../../../assets/images/deposit-green.svg';
import {
  useFragmentFeeDepositsMutation,
  useGetFeeBalanceQuery,
  useGetFeeFragmenterAddressQuery,
} from '../operator.api';

interface IFormInputs {
  recoverAddress: string;
  maxFragments: number;
}

export const FragmentFeeDepositsFormModal = (): JSX.Element => {
  const [form] = Form.useForm<IFormInputs>();
  const { refetch: refetchGetFeeBalance } = useGetFeeBalanceQuery();
  const { refetch: refetchGetFeeFragmenterAddress } = useGetFeeFragmenterAddressQuery();
  const [fragmentFeeDeposits, { error: fragmentFeeDepositsError, isLoading: fragmentFeeDepositsLoading }] =
    useFragmentFeeDepositsMutation();

  const [isFragmenting, setIsFragmenting] = useState(false);
  const [isFragmentFeeDepositsModalVisible, setIsFragmentFeeDepositsModalVisible] = useState(false);
  const showFragmentFeeDepositsModal = () => setIsFragmentFeeDepositsModalVisible(true);
  const handleFragmentFeeDepositsModalCancel = () => setIsFragmentFeeDepositsModalVisible(false);
  const handleFragmentFeeDepositsModalOk = async () => {
    try {
      setIsFragmenting(true);
      const values = await form.validateFields();
      // @ts-ignore
      const { data } = await fragmentFeeDeposits({
        recoverAddress: values.recoverAddress,
        maxFragments: values.maxFragments,
      });
      data.on('status', async (status: any) => {
        if (status.code === 0) {
          setIsFragmenting(false);
          notification.success({ message: 'Fragmentation successful' });
          form.resetFields();
          handleFragmentFeeDepositsModalCancel();
          await refetchGetFeeBalance();
          await refetchGetFeeFragmenterAddress();
        } else {
          console.error('status', status);
          notification.error({ message: status.details });
          setIsFragmenting(false);
        }
      });
    } catch (err) {
      // @ts-ignore
      notification.error({ message: err.message });
    }
  };

  return (
    <>
      <Button
        onClick={showFragmentFeeDepositsModal}
        className="w-100 justify-center"
        icon={<Icon component={depositIcon} />}
      >
        DEPOSIT
      </Button>
      <Modal
        title="Fragment Fee Deposits"
        visible={isFragmentFeeDepositsModalVisible}
        onOk={handleFragmentFeeDepositsModalOk}
        onCancel={handleFragmentFeeDepositsModalCancel}
        confirmLoading={fragmentFeeDepositsLoading || isFragmenting}
      >
        <Form
          layout="vertical"
          form={form}
          name="fragment_fee_deposits_form"
          wrapperCol={{ span: 24 }}
          validateTrigger="onBlur"
        >
          <Form.Item
            label="Recover address"
            name="recoverAddress"
            className={classNames({ 'has-error': fragmentFeeDepositsError })}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Max fragments"
            name="maxFragments"
            className={classNames({ 'has-error': fragmentFeeDepositsError })}
          >
            <Input />
          </Form.Item>
          {fragmentFeeDepositsError && <p className="error">{fragmentFeeDepositsError}</p>}
        </Form>
      </Modal>
    </>
  );
};
