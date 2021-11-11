import './marketWithdraw.less';
import Icon from '@ant-design/icons';
import { Breadcrumb, Button, Col, Form, Input, notification, Row, Typography } from 'antd';
import classNames from 'classnames';
import React from 'react';
import { useLocation } from 'react-router-dom';

import { ReactComponent as chevronRight } from '../../../../assets/images/chevron-right.svg';
import { CurrencyIcon } from '../../../../common/CurrencyIcon';
import type { Asset } from '../../../../domain/asset';
import { HOME_ROUTE } from '../../../../routes/constants';
import { useWithdrawMarketMutation } from '../../operator.api';

const { Title } = Typography;

interface IFormInputs {
  balanceBaseAmount: number;
  balanceQuoteAmount: number;
  address: string;
  millisatPerByte: number;
}

export const MarketWithdraw = (): JSX.Element => {
  const [form] = Form.useForm<IFormInputs>();
  const { state } = useLocation() as { state: { baseAsset: Asset; quoteAsset: Asset } };
  const [withdrawMarket, { error: withdrawMarketError, isLoading: withdrawMarketIsLoading }] =
    useWithdrawMarketMutation();

  const onFinish = async () => {
    try {
      if (!state?.baseAsset) throw new Error('base asset missing');
      if (!state?.quoteAsset) throw new Error('quote asset missing');
      const values = await form.validateFields();
      const res = await withdrawMarket({
        market: { baseAsset: state?.baseAsset.asset_id, quoteAsset: state?.quoteAsset.asset_id },
        balance: { baseAmount: values.balanceBaseAmount, quoteAmount: values.balanceQuoteAmount },
        address: values.address,
        millisatPerByte: 100,
      });
      // @ts-ignore
      if (res?.error) throw new Error(res?.error);
      form.resetFields();
      notification.success({ message: 'Market withdrawal successful' });
    } catch (err) {
      // @ts-ignore
      notification.error({ message: err.message });
    }
  };

  return (
    <>
      <Breadcrumb separator={<Icon component={chevronRight} />} className="mb-2">
        <Breadcrumb.Item>
          <a href={HOME_ROUTE}>Dashboard</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Market Withdraw</Breadcrumb.Item>
      </Breadcrumb>
      <Row className="panel">
        <Col span={12} className="pr-10">
          <Title level={4}>READ CAREFULLY!</Title>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.,Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.,,- It has survived not only five centuries,-
            but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <p>
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
        </Col>
        <Col span={12}>
          <Form
            layout="vertical"
            form={form}
            name="withdraw_market_form"
            wrapperCol={{ span: 24 }}
            validateTrigger="onBlur"
            onFinish={onFinish}
            initialValues={{ balanceBaseAmount: 0, balanceQuoteAmount: 0 }}
          >
            <div className="base-amount-container panel panel__grey panel__top">
              <Row>
                <Col span={12}>
                  <CurrencyIcon currency={state?.baseAsset?.ticker} />
                  <span className="dm-sans dm-sans__xx ml-2">{state?.baseAsset?.ticker}</span>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="balanceBaseAmount"
                    className={classNames('balance-input-container d-flex justify-end dm-mono', {
                      'has-error': withdrawMarketError,
                    })}
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <span className="dm-mono dm-mono__bold mr-2">Residual balance:</span>
                  <span className="dm-mono dm-mono__bold">{`3,00 ${state?.baseAsset?.ticker}`}</span>
                </Col>
                <Col className="dm-mono dm-mono__bold d-flex justify-end" span={12}>
                  0.00 USD
                </Col>
              </Row>
            </div>
            <div className="panel panel__grey panel__bottom mb-6">
              <Row>
                <Col span={12}>
                  <CurrencyIcon currency={state?.quoteAsset?.ticker} />
                  <span className="dm-sans dm-sans__xx ml-2">{state?.quoteAsset?.ticker}</span>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="balanceQuoteAmount"
                    className={classNames('balance-input-container d-flex justify-end dm-mono', {
                      'has-error': withdrawMarketError,
                    })}
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <span className="dm-mono dm-mono__bold mr-2">Residual balance:</span>
                  <span className="dm-mono dm-mono__bold">{`12.000,00 ${state?.quoteAsset?.ticker}`}</span>
                </Col>
                <Col className="dm-mono dm-mono__bold d-flex justify-end" span={12}>
                  0.00 USD
                </Col>
              </Row>
            </div>

            <Form.Item name="address" className={classNames({ 'has-error': withdrawMarketError })}>
              <Input placeholder="Paste address here or scan QR code" />
            </Form.Item>

            <Form.Item className="submit-btn-container">
              <Button htmlType="submit" loading={withdrawMarketIsLoading}>
                CONFIRM WITHDRAW
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};
