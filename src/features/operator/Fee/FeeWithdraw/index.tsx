import './feeWithdraw.less';
import Icon from '@ant-design/icons';
import { Breadcrumb, Button, Col, Form, Input, notification, Row } from 'antd';
import Big from 'big.js';
import classNames from 'classnames';
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

import type { RootState } from '../../../../app/store';
import { useTypedSelector } from '../../../../app/store';
import { ReactComponent as chevronRight } from '../../../../assets/images/chevron-right.svg';
import { CurrencyIcon } from '../../../../common/CurrencyIcon';
import { InputAmount } from '../../../../common/InputAmount';
import { HOME_ROUTE } from '../../../../routes/constants';
import {
  formatLbtcUnitToSats,
  fromSatsToUnitOrFractional,
  LBTC_COINGECKOID,
  LBTC_TICKER,
} from '../../../../utils';
import { useLatestPriceFeedFromCoinGeckoQuery } from '../../../rates.api';
import { useGetFeeBalanceQuery, useWithdrawFeeMutation } from '../../operator.api';

interface IFormInputs {
  amount: string;
  millisatsPerByte: number;
  address: string;
  asset: string;
}

export const FeeWithdraw = (): JSX.Element => {
  const { lbtcUnit, network, currency } = useTypedSelector(({ settings }: RootState) => settings);
  const [form] = Form.useForm<IFormInputs>();
  const [feeWithdrawAmount, setFeeWithdrawAmount] = useState<string>('');
  const [withdrawFee, { error: withdrawFeeError, isLoading: withdrawFeeIsLoading }] =
    useWithdrawFeeMutation();
  const { data: feeBalance, refetch: refetchFeeBalance } = useGetFeeBalanceQuery();
  const {
    data: prices,
    isLoading: isLoadingPrices,
    isError: isErrorPrices,
  } = useLatestPriceFeedFromCoinGeckoQuery();

  const feeAvailableBalanceFormatted =
    feeBalance?.availableBalance === undefined
      ? 'N/A'
      : fromSatsToUnitOrFractional(feeBalance?.availableBalance, 8, true, lbtcUnit);
  const feeTotalBalanceFormatted =
    feeBalance?.totalBalance === undefined
      ? 'N/A'
      : fromSatsToUnitOrFractional(feeBalance?.totalBalance, 8, true, lbtcUnit);

  const feeFiatAmount = useMemo(() => {
    // display fiat value as 0 in case of api loading or error
    if (isLoadingPrices || isErrorPrices) {
      return <>{currency.symbol}0</>;
    }
    try {
      const feeAMNT = Number(feeWithdrawAmount);
      const feeLSAT = Number(formatLbtcUnitToSats(feeAMNT, lbtcUnit));
      const feeLBTC = fromSatsToUnitOrFractional(feeLSAT, 8, true, 'L-BTC');
      const feeRATE = prices?.[LBTC_COINGECKOID]?.[currency.value] || 1;
      const feeFIAT =
        currency.value === 'btc'
          ? Big(feeLBTC).times(feeRATE).toFixed(8)
          : Big(feeLBTC).times(feeRATE).toFixed(2);
      return <>{feeFIAT}</>;
    } catch (e) {
      return <>0</>;
    }
  }, [feeWithdrawAmount, currency, isLoadingPrices, isErrorPrices, lbtcUnit, prices]);

  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      const res = await withdrawFee({
        amount: Number(formatLbtcUnitToSats(Number(values.amount), lbtcUnit)),
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
            onValuesChange={(_, values) => {
              setFeeWithdrawAmount(values['amount']);
            }}
            initialValues={{ amount: '0' }}
          >
            <div className="panel panel__grey mb-6">
              <Row className="align-center">
                <Col span={12}>
                  <CurrencyIcon currency={LBTC_TICKER[network]} />
                  <span className="dm-sans dm-sans__xx ml-2">{lbtcUnit}</span>
                </Col>
                <Col span={12}>
                  <InputAmount
                    assetPrecision={8}
                    formItemName="amount"
                    hasError={!!withdrawFeeError}
                    setInputValue={(value) => {
                      form.setFieldsValue({ amount: value });
                    }}
                    lbtcUnitOrTicker={lbtcUnit}
                  />
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
                          amount: feeAvailableBalanceFormatted,
                        });
                        setFeeWithdrawAmount(feeAvailableBalanceFormatted);
                      }
                    }}
                  >
                    {`${feeAvailableBalanceFormatted} ${lbtcUnit}`}
                  </Button>
                  <span className="dm-mono dm-mono__bold d-block">{`Total balance: ${feeTotalBalanceFormatted} ${lbtcUnit}`}</span>
                </Col>
                <Col className="dm-mono dm-mono__bold d-flex justify-end" span={12}>
                  {feeFiatAmount} {currency.value.toUpperCase()}
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
