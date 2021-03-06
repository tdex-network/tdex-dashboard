import './feeWithdraw.less';
import Icon from '@ant-design/icons';
import { Breadcrumb, Button, Col, Form, Input, Modal, notification, Row } from 'antd';
import classNames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import type { RootState } from '../../../../app/store';
import { useTypedSelector } from '../../../../app/store';
import { ReactComponent as chevronRight } from '../../../../assets/images/chevron-right.svg';
import { CurrencyIcon } from '../../../../common/CurrencyIcon';
import { InputAmount } from '../../../../common/InputAmount';
import { HOME_ROUTE } from '../../../../routes/constants';
import { formatLbtcUnitToSats, fromSatsToUnitOrFractional, LBTC_TICKER, LBTC_ASSET } from '../../../../utils';
import { useLatestPriceFeedFromCoinGeckoQuery, convertAmountToFavoriteCurrency } from '../../../rates.api';
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
  const [isConfirmWithdrawModalVisible, setIsConfirmWithdrawModalVisible] = useState<boolean>();
  const [unitAmount, setUnitAmount] = useState<number>(0);
  const [address, setAddress] = useState<string>();

  const feeTickerAsFavoriteCurrency = convertAmountToFavoriteCurrency({
    asset: LBTC_ASSET[network],
    amount: unitAmount,
    network: network,
    preferredCurrency: currency,
    preferredLbtcUnit: lbtcUnit,
    prices: prices,
  });

  const withdraw = async () => {
    try {
      if (!unitAmount || !address) return;
      const res = await withdrawFee({
        amount: Number(formatLbtcUnitToSats(unitAmount, lbtcUnit)),
        millisatsPerByte: 100,
        address: address,
        asset: LBTC_ASSET[network].asset_id,
      });
      // @ts-ignore
      if (res?.error) throw new Error(res?.error);
      form.resetFields();
      setUnitAmount(0);
      setAddress('');
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
      <Breadcrumb separator={<Icon component={chevronRight} />}>
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
            onFinish={() => setIsConfirmWithdrawModalVisible(true)}
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
                      setUnitAmount(Number(value));
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
                        setUnitAmount(Number(feeAvailableBalanceFormatted));
                      }
                    }}
                  >
                    {`${feeAvailableBalanceFormatted} ${lbtcUnit}`}
                  </Button>
                  <span className="dm-mono dm-mono__bold d-block">{`Total balance: ${feeTotalBalanceFormatted} ${lbtcUnit}`}</span>
                </Col>
                <Col className="dm-mono dm-mono__bold d-flex justify-end" span={12}>
                  <span>{!isLoadingPrices && !isErrorPrices && feeTickerAsFavoriteCurrency}</span>
                  <span className="ml-2">
                    {currency.value === 'btc' ? lbtcUnit : currency.value.toUpperCase()}
                  </span>
                </Col>
              </Row>
            </div>

            <Form.Item name="address" className={classNames({ 'has-error': withdrawFeeError })}>
              <Input
                placeholder="Paste address here or scan QR code"
                className="input__big"
                onChange={(ev) => setAddress(ev.target.value)}
              />
            </Form.Item>

            <Form.Item className="submit-btn-container" wrapperCol={{ span: 12, offset: 6 }}>
              <Button
                htmlType="submit"
                loading={withdrawFeeIsLoading}
                className="w-100"
                disabled={unitAmount === 0 || unitAmount > Number(feeAvailableBalanceFormatted) || !address}
              >
                WITHDRAW
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Modal
        title="Withdrawal Confirmation"
        visible={isConfirmWithdrawModalVisible}
        onOk={async () => {
          await withdraw();
          setIsConfirmWithdrawModalVisible(false);
        }}
        onCancel={() => setIsConfirmWithdrawModalVisible(false)}
      >
        <p>
          Are you sure you want to withdraw {unitAmount} {lbtcUnit} to address
          <span className="address ml-1">{address}</span> ?
        </p>
      </Modal>
    </>
  );
};
