import './marketWithdraw.less';
import Icon from '@ant-design/icons';
import { Breadcrumb, Button, Col, Form, Input, notification, Row } from 'antd';
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import type { RootState } from '../../../../app/store';
import { useTypedSelector } from '../../../../app/store';
import { ReactComponent as chevronRight } from '../../../../assets/images/chevron-right.svg';
import { CurrencyIcon } from '../../../../common/CurrencyIcon';
import { SelectMarket } from '../../../../common/SelectMarket';
import type { Asset } from '../../../../domain/asset';
import { HOME_ROUTE } from '../../../../routes/constants';
import {
  formatFiatToSats,
  formatLbtcUnitToSats,
  formatSatsToUnit,
  isLbtcAssetId,
  isLbtcTicker,
  LBTC_ASSET,
} from '../../../../utils';
import { useGetMarketBalanceQuery, useListMarketsQuery, useWithdrawMarketMutation } from '../../operator.api';

interface IFormInputs {
  balanceBaseAmount: string;
  balanceQuoteAmount: string;
  address: string;
  millisatPerByte: number;
}

export const MarketWithdraw = (): JSX.Element => {
  const [form] = Form.useForm<IFormInputs>();
  const { explorerLiquidAPI, network } = useTypedSelector(({ settings }: RootState) => settings);
  const { state } = useLocation() as { state: { baseAsset: Asset; quoteAsset: Asset } };
  const [selectedMarket, setSelectedMarket] = useState<{ baseAsset?: Asset; quoteAsset?: Asset }>({
    baseAsset: state?.baseAsset,
    quoteAsset: state?.quoteAsset,
  });
  const [withdrawMarket, { error: withdrawMarketError, isLoading: withdrawMarketIsLoading }] =
    useWithdrawMarketMutation();
  const { data: listMarkets } = useListMarketsQuery();
  const { data: marketBalance, refetch: refetchMarketBalance } = useGetMarketBalanceQuery({
    baseAsset: state?.baseAsset.asset_id,
    quoteAsset: state?.quoteAsset.asset_id,
  });
  const { lbtcUnit } = useTypedSelector(({ settings }) => settings);
  const marketList = useRef<[Asset?, Asset?][]>([]);

  useEffect(() => {
    (async () => {
      const fetchPromises = [];
      for (const { market } of listMarkets!.marketsList) {
        fetchPromises.push([
          fetch(`${explorerLiquidAPI}/asset/${market?.baseAsset}`).then((response) => response.json()),
          fetch(`${explorerLiquidAPI}/asset/${market?.quoteAsset}`).then((response) => response.json()),
        ]);
      }
      const marketListTmp = (await Promise.all(fetchPromises.map((pair) => Promise.all(pair)))) as [
        Asset?,
        Asset?
      ][];
      // Add L-BTC ticker since it's not returned by chain asset data
      marketList.current = marketListTmp.map((market) =>
        market.map((asset) => {
          if (isLbtcAssetId(asset?.asset_id || '', network)) {
            return LBTC_ASSET[network];
          }
          return asset;
        })
      ) as [Asset?, Asset?][];
    })();
  }, [explorerLiquidAPI, listMarkets, network]);

  const onFinish = async () => {
    try {
      const selectedAssetMarket = marketList.current?.find(
        ([baseAsset, quoteAsset]) =>
          baseAsset?.ticker === selectedMarket.baseAsset?.ticker &&
          quoteAsset?.ticker === selectedMarket.quoteAsset?.ticker
      );
      if (!selectedAssetMarket?.[0] || !selectedAssetMarket?.[1]) throw new Error('Market selection error');
      const values = await form.validateFields();
      const res = await withdrawMarket({
        market: {
          baseAsset: selectedAssetMarket?.[0].asset_id,
          quoteAsset: selectedAssetMarket?.[1].asset_id,
        },
        // Expect lbtc amount to be in favorite user unit
        balance: {
          baseAmount: isLbtcTicker(selectedAssetMarket?.[0].ticker)
            ? Number(formatLbtcUnitToSats(Number(values.balanceBaseAmount), lbtcUnit))
            : Number(formatFiatToSats(Number(values.balanceBaseAmount))),
          quoteAmount: isLbtcTicker(selectedAssetMarket?.[1].ticker)
            ? Number(formatLbtcUnitToSats(Number(values.balanceQuoteAmount), lbtcUnit))
            : Number(formatFiatToSats(Number(values.balanceQuoteAmount))),
        },
        address: values.address,
        millisatsPerByte: 100,
      });
      // @ts-ignore
      if (res?.error) throw new Error(res?.error);
      form.resetFields();
      // Refetch after some time, waiting available balance to equal total balance
      setTimeout(() => refetchMarketBalance(), 1000);
      setTimeout(() => refetchMarketBalance(), 5000);
      setTimeout(() => refetchMarketBalance(), 10000);
      notification.success({ message: 'Market withdrawal successful' });
    } catch (err) {
      // @ts-ignore
      notification.error({ message: err.message });
    }
  };

  const baseAvailableAmountFormatted =
    marketBalance?.availableBalance?.baseAmount !== undefined
      ? formatSatsToUnit(
          marketBalance?.availableBalance?.baseAmount,
          lbtcUnit,
          selectedMarket.baseAsset?.asset_id
        )
      : 'N/A';
  const baseTotalAmountFormatted =
    marketBalance?.totalBalance?.baseAmount !== undefined
      ? formatSatsToUnit(
          marketBalance?.totalBalance?.baseAmount,
          lbtcUnit,
          selectedMarket.baseAsset?.asset_id
        )
      : 'N/A';
  const quoteAvailableAmountFormatted =
    marketBalance?.availableBalance?.quoteAmount !== undefined
      ? formatSatsToUnit(
          marketBalance?.availableBalance?.quoteAmount,
          lbtcUnit,
          selectedMarket.quoteAsset?.asset_id
        )
      : 'N/A';
  const quoteTotalAmountFormatted =
    marketBalance?.totalBalance?.quoteAmount !== undefined
      ? formatSatsToUnit(
          marketBalance?.totalBalance?.quoteAmount,
          lbtcUnit,
          selectedMarket.quoteAsset?.asset_id
        )
      : 'N/A';
  const baseTickerFormatted = isLbtcTicker(selectedMarket?.baseAsset?.ticker)
    ? lbtcUnit
    : selectedMarket?.baseAsset?.ticker || 'N/A';
  const quoteTickerFormatted = isLbtcTicker(selectedMarket?.quoteAsset?.ticker)
    ? lbtcUnit
    : selectedMarket?.quoteAsset?.ticker || 'N/A';

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
            marketList={marketList.current}
          />
        </Col>
        <Col span={12}>
          <Form
            layout="vertical"
            form={form}
            name="withdraw_market_form"
            wrapperCol={{ span: 24 }}
            validateTrigger="onBlur"
            onFinish={onFinish}
            initialValues={{ balanceBaseAmount: '0', balanceQuoteAmount: '0' }}
          >
            <div className="base-amount-container panel panel__grey panel__top">
              <Row>
                <Col span={12}>
                  <CurrencyIcon currency={baseTickerFormatted} />
                  <span className="dm-sans dm-sans__xx ml-2">{selectedMarket.baseAsset?.ticker}</span>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="balanceBaseAmount"
                    className={classNames('balance-input-container d-flex justify-end dm-mono mb-2', {
                      'has-error': withdrawMarketError,
                    })}
                  >
                    <Input
                      type="number"
                      placeholder="0"
                      onBlur={(ev) => {
                        if (ev.target.value === '') form.setFieldsValue({ balanceBaseAmount: '0' });
                      }}
                      onFocus={(ev) => {
                        if (ev.target.value === '0') form.setFieldsValue({ balanceBaseAmount: '' });
                      }}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row align="middle" className="residual-balance-container">
                <Col span={12}>
                  <span className="dm-mono dm-mono__bold mr-2">Available balance:</span>
                  <Button
                    type="ghost"
                    className="dm-mono dm-mono__bold pl-0"
                    onClick={() => {
                      if (baseAvailableAmountFormatted !== 'N/A') {
                        form.setFieldsValue({
                          balanceBaseAmount: baseAvailableAmountFormatted,
                        });
                      }
                    }}
                  >{`${baseAvailableAmountFormatted} ${baseTickerFormatted}`}</Button>
                  <span className="dm-mono dm-mono__bold d-block">{`Total balance: ${baseTotalAmountFormatted} ${baseTickerFormatted}`}</span>
                </Col>
                <Col className="dm-mono dm-mono__bold d-flex justify-end" span={12}>
                  0.00 USD
                </Col>
              </Row>
            </div>
            <div className="panel panel__grey panel__bottom mb-6">
              <Row>
                <Col span={12}>
                  <CurrencyIcon currency={quoteTickerFormatted} />
                  <span className="dm-sans dm-sans__xx ml-2">{quoteTickerFormatted}</span>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="balanceQuoteAmount"
                    className={classNames('balance-input-container d-flex justify-end dm-mono mb-2', {
                      'has-error': withdrawMarketError,
                    })}
                  >
                    <Input
                      type="number"
                      placeholder="0"
                      onBlur={(ev) => {
                        if (ev.target.value === '') form.setFieldsValue({ balanceQuoteAmount: '0' });
                      }}
                      onFocus={(ev) => {
                        if (ev.target.value === '0') form.setFieldsValue({ balanceQuoteAmount: '' });
                      }}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row align="middle" className="residual-balance-container">
                <Col span={12}>
                  <span className="dm-mono dm-mono__bold mr-2">Available balance:</span>
                  <Button
                    type="ghost"
                    className="dm-mono dm-mono__bold pl-1"
                    onClick={() => {
                      if (quoteAvailableAmountFormatted !== 'N/A') {
                        form.setFieldsValue({
                          balanceQuoteAmount: quoteAvailableAmountFormatted,
                        });
                      }
                    }}
                  >{`${quoteAvailableAmountFormatted} ${quoteTickerFormatted}`}</Button>
                  <span className="dm-mono dm-mono__bold d-block">{`Total balance: ${quoteTotalAmountFormatted} ${quoteTickerFormatted}`}</span>
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
