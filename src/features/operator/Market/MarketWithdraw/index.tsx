import './marketWithdraw.less';
import Icon from '@ant-design/icons';
import { Breadcrumb, Button, Col, Form, Input, notification, Row } from 'antd';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import type { RootState } from '../../../../app/store';
import { useTypedSelector } from '../../../../app/store';
import { ReactComponent as chevronRight } from '../../../../assets/images/chevron-right.svg';
import { CurrencyIcon } from '../../../../common/CurrencyIcon';
import { InputAmount } from '../../../../common/InputAmount';
import { SelectMarket } from '../../../../common/SelectMarket';
import type { Asset } from '../../../../domain/asset';
import { HOME_ROUTE, MARKET_OVERVIEW_ROUTE } from '../../../../routes/constants';
import {
  formatFiatToSats,
  formatLbtcUnitToSats,
  fromSatsToUnitOrFractional,
  getAssetDataFromRegistry,
  isLbtcTicker,
} from '../../../../utils';
import { useLatestPriceFeedFromCoinGeckoQuery, convertAssetToCurrency } from '../../../rates.api';
import { useGetMarketBalanceQuery, useListMarketsQuery, useWithdrawMarketMutation } from '../../operator.api';

interface IFormInputs {
  balanceBaseAmount: string;
  balanceQuoteAmount: string;
  address: string;
  millisatPerByte: number;
}

export const MarketWithdraw = (): JSX.Element => {
  const navigate = useNavigate();
  const [form] = Form.useForm<IFormInputs>();
  const { explorerLiquidAPI, network, lbtcUnit, assets, currency } = useTypedSelector(
    ({ settings }: RootState) => settings
  );
  const { state } = useLocation() as { state: { baseAsset: Asset; quoteAsset: Asset } };
  const [selectedMarket, setSelectedMarket] = useState<{ baseAsset?: Asset; quoteAsset?: Asset }>({
    baseAsset: state?.baseAsset,
    quoteAsset: state?.quoteAsset,
  });
  const [withdrawMarket, { error: withdrawMarketError, isLoading: withdrawMarketIsLoading }] =
    useWithdrawMarketMutation();
  const { data: listMarkets } = useListMarketsQuery();
  const { data: marketBalance, refetch: refetchMarketBalance } = useGetMarketBalanceQuery({
    baseAsset: selectedMarket.baseAsset?.asset_id || '',
    quoteAsset: selectedMarket.quoteAsset?.asset_id || '',
  });
  const {
    data: prices,
    isLoading: isLoadingPrices,
    isError: isErrorPrices,
  } = useLatestPriceFeedFromCoinGeckoQuery();
  const [marketList, setMarketList] = useState<[Asset?, Asset?][]>([[state?.baseAsset, state?.quoteAsset]]);
  const [balanceBaseAmount, setBalanceBaseAmount] = useState<string>('');
  const [balanceQuoteAmount, setBalanceQuoteAmount] = useState<string>('');

  useEffect(() => {
    if (listMarkets) {
      for (const { market } of listMarkets.marketsList) {
        const newMarket: [Asset?, Asset?] = [
          getAssetDataFromRegistry(market?.baseAsset ?? '', assets[network], lbtcUnit),
          getAssetDataFromRegistry(market?.quoteAsset ?? '', assets[network], lbtcUnit),
        ];
        setMarketList([...marketList, newMarket]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [assets, explorerLiquidAPI, lbtcUnit, listMarkets, network]);

  const onFinish = async () => {
    try {
      const selectedAssetMarket = marketList.find(
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

  const baseToPreferredCurrency = convertAssetToCurrency({
    asset: selectedMarket?.baseAsset,
    amount: balanceBaseAmount,
    network: network,
    preferredCurrency: currency,
    preferredLbtcUnit: lbtcUnit,
    prices: prices,
  });

  const quoteToPreferredCurrency = convertAssetToCurrency({
    asset: selectedMarket?.quoteAsset,
    amount: balanceQuoteAmount,
    network: network,
    preferredCurrency: currency,
    preferredLbtcUnit: lbtcUnit,
    prices: prices,
  });

  const baseAvailableAmountFormatted =
    marketBalance?.availableBalance?.baseAmount === undefined || !selectedMarket.baseAsset?.asset_id
      ? 'N/A'
      : fromSatsToUnitOrFractional(
          marketBalance?.availableBalance?.baseAmount,
          selectedMarket?.baseAsset?.precision,
          isLbtcTicker(selectedMarket?.baseAsset?.ticker),
          lbtcUnit
        );
  const baseTotalAmountFormatted =
    marketBalance?.totalBalance?.baseAmount === undefined || !selectedMarket.baseAsset?.asset_id
      ? 'N/A'
      : fromSatsToUnitOrFractional(
          marketBalance?.totalBalance?.baseAmount,
          selectedMarket?.baseAsset?.precision,
          isLbtcTicker(selectedMarket?.baseAsset?.ticker),
          lbtcUnit
        );
  const quoteAvailableAmountFormatted =
    marketBalance?.availableBalance?.baseAmount === undefined || !selectedMarket.quoteAsset?.asset_id
      ? 'N/A'
      : fromSatsToUnitOrFractional(
          marketBalance?.availableBalance?.quoteAmount,
          selectedMarket?.quoteAsset?.precision,
          isLbtcTicker(selectedMarket?.quoteAsset?.ticker),
          lbtcUnit
        );
  const quoteTotalAmountFormatted =
    marketBalance?.totalBalance?.baseAmount === undefined || !selectedMarket.quoteAsset?.asset_id
      ? 'N/A'
      : fromSatsToUnitOrFractional(
          marketBalance?.totalBalance?.quoteAmount,
          selectedMarket?.quoteAsset?.precision,
          isLbtcTicker(selectedMarket?.quoteAsset?.ticker),
          lbtcUnit
        );

  return (
    <>
      <Breadcrumb separator={<Icon component={chevronRight} />} className="mb-2">
        <Breadcrumb.Item>
          <Link to={HOME_ROUTE}>Dashboard</Link>
        </Breadcrumb.Item>
        {selectedMarket && (
          // We can't use Link to pass market state because of HashRouter limitation
          <Breadcrumb.Item>
            <Button
              type="link"
              className="dm-sans dm-sans__x"
              onClick={() =>
                navigate(MARKET_OVERVIEW_ROUTE, {
                  state: selectedMarket,
                })
              }
            >
              Market Overview
            </Button>
          </Breadcrumb.Item>
        )}
        <Breadcrumb.Item>Market Withdraw</Breadcrumb.Item>
      </Breadcrumb>
      <Row className="panel">
        <Col span={12} className="pr-10">
          <SelectMarket
            selectedMarket={selectedMarket}
            setSelectedMarket={setSelectedMarket}
            marketList={marketList}
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
            onValuesChange={(_, values) => {
              setBalanceBaseAmount(values['balanceBaseAmount']);
              setBalanceQuoteAmount(values['balanceQuoteAmount']);
            }}
            initialValues={{ balanceBaseAmount: '0', balanceQuoteAmount: '0' }}
          >
            <div className="base-amount-container panel panel__grey panel__top">
              <Row className="align-center">
                <Col span={12}>
                  <CurrencyIcon currency={selectedMarket?.baseAsset?.ticker || ''} />
                  <span className="dm-sans dm-sans__xx ml-2">
                    {selectedMarket?.baseAsset?.formattedTicker}
                  </span>
                </Col>
                <Col span={12}>
                  <InputAmount
                    assetPrecision={selectedMarket?.baseAsset?.precision ?? 8}
                    formItemName="balanceBaseAmount"
                    hasError={!!withdrawMarketError}
                    lbtcUnitOrTicker={selectedMarket?.baseAsset?.formattedTicker ?? ''}
                    setInputValue={(value) => form.setFieldsValue({ balanceBaseAmount: value })}
                  />
                </Col>
              </Row>
              <Row align="middle" className="residual-balance-container">
                <Col span={16}>
                  <span className="dm-mono dm-mono__bold mr-1">Available balance:</span>
                  <Button
                    type="ghost"
                    className="dm-mono dm-mono__bold pl-0"
                    onClick={() => {
                      if (baseAvailableAmountFormatted !== 'N/A') {
                        form.setFieldsValue({
                          balanceBaseAmount: baseAvailableAmountFormatted,
                        });
                        setBalanceBaseAmount(baseAvailableAmountFormatted);
                      }
                    }}
                  >{`${baseAvailableAmountFormatted} ${selectedMarket?.baseAsset?.formattedTicker}`}</Button>
                  <span className="dm-mono dm-mono__bold d-block">{`Total balance: ${baseTotalAmountFormatted} ${selectedMarket?.baseAsset?.formattedTicker}`}</span>
                </Col>
                <Col className="dm-mono dm-mono__bold d-flex justify-end" span={8}>
                  {!isLoadingPrices && !isErrorPrices && baseToPreferredCurrency}
                </Col>
              </Row>
            </div>
            <div className="panel panel__grey panel__bottom mb-6">
              <Row className="align-center">
                <Col span={12}>
                  <CurrencyIcon currency={selectedMarket?.quoteAsset?.ticker || ''} />
                  <span className="dm-sans dm-sans__xx ml-2">
                    {selectedMarket?.quoteAsset?.formattedTicker}
                  </span>
                </Col>
                <Col span={12}>
                  <InputAmount
                    assetPrecision={selectedMarket?.quoteAsset?.precision ?? 8}
                    formItemName="balanceQuoteAmount"
                    hasError={!!withdrawMarketError}
                    lbtcUnitOrTicker={selectedMarket?.quoteAsset?.formattedTicker ?? ''}
                    setInputValue={(value) => form.setFieldsValue({ balanceQuoteAmount: value })}
                  />
                </Col>
              </Row>
              <Row align="middle" className="residual-balance-container">
                <Col span={16}>
                  <span className="dm-mono dm-mono__bold mr-1">Available balance:</span>
                  <Button
                    type="ghost"
                    className="dm-mono dm-mono__bold pl-1"
                    onClick={() => {
                      if (quoteAvailableAmountFormatted !== 'N/A') {
                        form.setFieldsValue({
                          balanceQuoteAmount: quoteAvailableAmountFormatted,
                        });
                        setBalanceQuoteAmount(quoteAvailableAmountFormatted);
                      }
                    }}
                  >{`${quoteAvailableAmountFormatted} ${selectedMarket?.quoteAsset?.formattedTicker}`}</Button>
                  <span className="dm-mono dm-mono__bold d-block">{`Total balance: ${quoteTotalAmountFormatted} ${selectedMarket?.quoteAsset?.formattedTicker}`}</span>
                </Col>
                <Col className="dm-mono dm-mono__bold d-flex justify-end" span={8}>
                  {!isLoadingPrices && !isErrorPrices && quoteToPreferredCurrency}
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
