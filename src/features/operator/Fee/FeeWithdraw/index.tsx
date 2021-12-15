import './feeWithdraw.less';
import Icon from '@ant-design/icons';
import { Breadcrumb, Button, Col, Form, Input, notification, Row } from 'antd';
import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import { useTypedSelector } from '../../../../app/store';
import { ReactComponent as chevronRight } from '../../../../assets/images/chevron-right.svg';
import { CurrencyIcon } from '../../../../common/CurrencyIcon';
import { HOME_ROUTE } from '../../../../routes/constants';
import { formatSatsToUnit, LBTC_TICKER } from '../../../../utils';
import { useGetFeeBalanceQuery, useWithdrawFeeMutation } from '../../operator.api';

interface IFormInputs {
  amount: number;
  millisatsPerByte: number;
  address: string;
  asset: string;
}

export const FeeWithdraw = (): JSX.Element => {
  const [form] = Form.useForm<IFormInputs>();
  const [withdrawFee, { error: withdrawFeeError, isLoading: withdrawFeeIsLoading }] =
    useWithdrawFeeMutation();
  const { data: feeBalance, refetch: refetchFeeBalance } = useGetFeeBalanceQuery();
  const { lbtcUnit } = useTypedSelector(({ settings }) => settings);
  const feeAvailableBalanceFormatted =
    feeBalance?.availableBalance !== undefined
      ? formatSatsToUnit(feeBalance?.availableBalance, lbtcUnit)
      : 'N/A';
  const feeTotalBalanceFormatted =
    feeBalance?.totalBalance !== undefined ? formatSatsToUnit(feeBalance?.totalBalance, lbtcUnit) : 'N/A';

  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      const res = await withdrawFee({
        amount: values.amount,
        millisatsPerByte: 100,
        address: values.address,
        asset: values.asset,
      });
      // @ts-ignore
      if (res?.error) throw new Error(res?.error);
      form.resetFields();
      // Refetch after some time, waiting available balance to equal total balance
      setTimeout(() => refetchFeeBalance(), 1000);
      setTimeout(() => refetchFeeBalance(), 5000);
      setTimeout(() => refetchFeeBalance(), 10000);
      notification.success({ message: 'Fee withdrawal successful' });
    } catch (err) {
      // @ts-ignore
      notification.error({ message: err.message, key: err.message });
    }
  };

  return (
    <>
      <Breadcrumb separator={<Icon component={chevronRight} />} className="mb-2">
        <Breadcrumb.Item>
          <Link to={HOME_ROUTE}>Dashboard</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Fee Withdraw</Breadcrumb.Item>
      </Breadcrumb>
      <Row className="panel">
        <Col span={12} offset={12}>
          <Form
            layout="vertical"
            form={form}
            name="withdraw_fee_form"
            wrapperCol={{ span: 24 }}
            validateTrigger="onBlur"
            onFinish={onFinish}
            initialValues={{ amount: 0 }}
          >
            <div className="panel panel__grey mb-6">
              <Row>
                <Col span={12}>
                  <CurrencyIcon currency={LBTC_TICKER} />
                  <span className="dm-sans dm-sans__xx ml-2">{LBTC_TICKER}</span>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="amount"
                    className={classNames('balance-input-container d-flex justify-end dm-mono', {
                      'has-error': withdrawFeeError,
                    })}
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>
              </Row>
              <Row className="residual-balance-container">
                <Col span={12}>
                  <span className="dm-mono dm-mono__bold">Available balance:</span>
                  <Button
                    type="ghost"
                    className="dm-mono dm-mono__bold pl-1"
                    onClick={() => {
                      if (feeAvailableBalanceFormatted !== 'N/A') {
                        form.setFieldsValue({
                          amount: Number(feeAvailableBalanceFormatted),
                        });
                      }
                    }}
                  >
                    {`${feeAvailableBalanceFormatted} ${lbtcUnit}`}
                  </Button>
                  <span className="dm-mono dm-mono__bold d-block">{`Total balance: ${feeTotalBalanceFormatted} ${lbtcUnit}`}</span>
                </Col>
                <Col className="dm-mono dm-mono__bold d-flex justify-end" span={12}>
                  0.00 USD
                </Col>
              </Row>
            </div>

            <Form.Item name="address" className={classNames({ 'has-error': withdrawFeeError })}>
              <Input placeholder="Paste address here or scan QR code" className="input__big" />
            </Form.Item>

            <Form.Item className="submit-btn-container" wrapperCol={{ span: 12, offset: 6 }}>
              <Button htmlType="submit" loading={withdrawFeeIsLoading} className="w-100">
                WITHDRAW
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};
