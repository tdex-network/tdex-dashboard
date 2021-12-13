import './marketWithdraw.less';
import Icon from '@ant-design/icons';
import { Breadcrumb, Button, Col, Form, Input, notification, Row, Typography } from 'antd';
import classNames from 'classnames';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useTypedSelector } from '../../../../app/store';
import { ReactComponent as chevronRight } from '../../../../assets/images/chevron-right.svg';
import { CurrencyIcon } from '../../../../common/CurrencyIcon';
import { SelectMarket } from '../../../../common/SelectMarket';
import type { Asset } from '../../../../domain/asset';
import { HOME_ROUTE } from '../../../../routes/constants';
import { formatFiatToSats, formatSatsToUnit } from '../../../../utils';
import { useGetMarketBalanceQuery, useListMarketsQuery, useWithdrawMarketMutation } from '../../operator.api';

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
  const [selectedMarket, setSelectedMarket] = useState<{ baseAsset?: Asset; quoteAsset?: Asset }>({
    baseAsset: state?.baseAsset,
    quoteAsset: state?.quoteAsset,
  });
  const [withdrawMarket, { error: withdrawMarketError, isLoading: withdrawMarketIsLoading }] =
    useWithdrawMarketMutation();
  const { data: listMarkets } = useListMarketsQuery();
  const { assets: savedAssets, lbtcUnit } = useTypedSelector(({ settings }) => settings);
  const marketList: [Asset?, Asset?][] =
    listMarkets?.marketsList.map(({ market }) => {
      const baseAsset = savedAssets.find(({ asset_id }) => asset_id === market?.baseAsset);
      const quoteAsset = savedAssets.find(({ asset_id }) => asset_id === market?.quoteAsset);
      return [baseAsset, quoteAsset];
    }) || [];
  const { data: marketBalance, refetch: refetchMarketBalance } = useGetMarketBalanceQuery({
    baseAsset: state?.baseAsset.asset_id,
    quoteAsset: state?.quoteAsset.asset_id,
  });

  const onFinish = async () => {
    try {
      const selectedAssetMarket = marketList.find(
        ([baseAsset, quoteAsset]) =>
          baseAsset?.asset_id === selectedMarket.baseAsset?.asset_id &&
          quoteAsset?.asset_id === selectedMarket.quoteAsset?.asset_id
      );
      if (!selectedAssetMarket?.[0] || !selectedAssetMarket?.[1]) throw new Error('Market selection error');
      const values = await form.validateFields();
      const res = await withdrawMarket({
        market: {
          baseAsset: selectedAssetMarket?.[0].asset_id,
          quoteAsset: selectedAssetMarket?.[1].asset_id,
        },
        balance: {
          baseAmount: values.balanceBaseAmount,
          quoteAmount: Number(formatFiatToSats(values.balanceQuoteAmount)),
        },
        address: values.address,
        millisatsPerByte: 100,
      });
      // @ts-ignore
      if (res?.error) throw new Error(res?.error);
      form.resetFields();
      // Refetch after some time, waiting available balance to equal total balance
      setTimeout(() => refetchMarketBalance(), 1000);
      setTimeout(() => refetchMarketBalance(), 10000);
      notification.success({ message: 'Market withdrawal successful' });
    } catch (err) {
      // @ts-ignore
      notification.error({ message: err.message });
    }
  };

  const baseAmountFormatted =
    marketBalance?.availableBalance?.baseAmount !== undefined
      ? formatSatsToUnit(
          marketBalance?.availableBalance?.baseAmount,
          lbtcUnit,
          selectedMarket.baseAsset?.asset_id
        )
      : 'N/A';

  const quoteAmountFormatted =
    marketBalance?.availableBalance?.quoteAmount !== undefined
      ? formatSatsToUnit(
          marketBalance?.availableBalance?.quoteAmount,
          lbtcUnit,
          selectedMarket.quoteAsset?.asset_id
        )
      : 'N/A';

  return (
    <>
      <Breadcrumb separator={<Icon component={chevronRight} />} className="mb-2">
        <Breadcrumb.Item>
          <Link to={HOME_ROUTE}>Dashboard</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Market Withdraw</Breadcrumb.Item>
      </Breadcrumb>
      <Row className="panel">
        <Col span={12} className="pr-10">
          <SelectMarket
            selectedMarket={selectedMarket}
            setSelectedMarket={setSelectedMarket}
            marketList={marketList}
          />
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
                  <CurrencyIcon currency={selectedMarket?.baseAsset?.ticker || ''} />
                  <span className="dm-sans dm-sans__xx ml-2">{selectedMarket.baseAsset?.ticker}</span>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="balanceBaseAmount"
                    className={classNames('balance-input-container d-flex justify-end dm-mono mb-2', {
                      'has-error': withdrawMarketError,
                    })}
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>
              </Row>
              <Row align="middle" className="residual-balance-container">
                <Col span={12}>
                  <span className="dm-mono dm-mono__bold mr-2">Residual balance:</span>
                  <Button
                    type="ghost"
                    className="dm-mono dm-mono__bold pl-1"
                    onClick={() => {
                      if (baseAmountFormatted !== 'N/A') {
                        form.setFieldsValue({
                          balanceBaseAmount: Number(baseAmountFormatted),
                        });
                      }
                    }}
                  >{`${baseAmountFormatted} ${selectedMarket.baseAsset?.ticker}`}</Button>
                </Col>
                <Col className="dm-mono dm-mono__bold d-flex justify-end" span={12}>
                  0.00 USD
                </Col>
              </Row>
            </div>
            <div className="panel panel__grey panel__bottom mb-6">
              <Row>
                <Col span={12}>
                  <CurrencyIcon currency={selectedMarket.quoteAsset?.ticker || ''} />
                  <span className="dm-sans dm-sans__xx ml-2">{selectedMarket.quoteAsset?.ticker}</span>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="balanceQuoteAmount"
                    className={classNames('balance-input-container d-flex justify-end dm-mono mb-2', {
                      'has-error': withdrawMarketError,
                    })}
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>
              </Row>
              <Row align="middle" className="residual-balance-container">
                <Col span={12}>
                  <span className="dm-mono dm-mono__bold mr-2">Residual balance:</span>
                  <Button
                    type="ghost"
                    className="dm-mono dm-mono__bold pl-1"
                    onClick={() => {
                      if (quoteAmountFormatted !== 'N/A') {
                        form.setFieldsValue({
                          balanceQuoteAmount: Number(quoteAmountFormatted),
                        });
                      }
                    }}
                  >{`${quoteAmountFormatted} ${selectedMarket.quoteAsset?.ticker}`}</Button>
                </Col>
                <Col className="dm-mono dm-mono__bold d-flex justify-end" span={12}>
                  0.00 USD
                </Col>
              </Row>
            </div>

            <Form.Item name="address" className={classNames({ 'has-error': withdrawMarketError })}>
              <Input placeholder="Paste address here or scan QR code" className="input__big" />
            </Form.Item>

            <Form.Item className="submit-btn-container" wrapperCol={{ span: 12, offset: 6 }}>
              <Button htmlType="submit" loading={withdrawMarketIsLoading} className="w-100">
                WITHDRAW
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};
