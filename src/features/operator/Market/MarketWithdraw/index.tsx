import './marketWithdraw.less';
import Icon, { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Breadcrumb, Button, Col, Form, Input, Modal, notification, Row } from 'antd';
import classNames from 'classnames';
import { address as addressLiquidJS } from 'liquidjs-lib';
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
import { useLatestPriceFeedFromCoinGeckoQuery, convertAmountToFavoriteCurrency } from '../../../rates.api';
import { useGetMarketInfoQuery, useListMarketsQuery, useWithdrawMarketMutation } from '../../operator.api';

interface IFormInputs {
  baseAmount: string;
  quoteAmount: string;
  address: string;
  millisatPerByte: number;
}

interface IPasswordFormInputs {
  password: string;
}

export const MarketWithdraw = (): JSX.Element => {
  const navigate = useNavigate();
  const [form] = Form.useForm<IFormInputs>();
  const [passwordForm] = Form.useForm<IPasswordFormInputs>();

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
  const { data: marketInfo, refetch: refetchMarketInfo } = useGetMarketInfoQuery({
    baseAsset: selectedMarket.baseAsset?.asset_id || '',
    quoteAsset: selectedMarket.quoteAsset?.asset_id || '',
  });
  const {
    data: prices,
    isLoading: isLoadingPrices,
    isError: isErrorPrices,
  } = useLatestPriceFeedFromCoinGeckoQuery();
  const [marketList, setMarketList] = useState<[Asset?, Asset?][]>([[state?.baseAsset, state?.quoteAsset]]);
  const [isConfirmWithdrawModalVisible, setIsConfirmWithdrawModalVisible] = useState<boolean>();
  const [isPasswordModalVisible, setIsPasswordModalVisible] = useState<boolean>();
  const [baseAmount, setBaseAmount] = useState<number>(0);
  const [quoteAmount, setQuoteAmount] = useState<number>(0);
  const [address, setAddress] = useState<string>();

  useEffect(() => {
    if (listMarkets?.length) {
      for (const { market } of listMarkets) {
        const newMarket: [Asset?, Asset?] = [
          getAssetDataFromRegistry(market?.baseAsset ?? '', assets[network], lbtcUnit),
          getAssetDataFromRegistry(market?.quoteAsset ?? '', assets[network], lbtcUnit),
        ];
        marketList.forEach(([asset1, asset2]) => {
          if (asset1?.asset_id !== newMarket[0]?.asset_id || asset2?.asset_id !== newMarket[1]?.asset_id) {
            setMarketList([...marketList, newMarket]);
          }
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [assets, explorerLiquidAPI, lbtcUnit, listMarkets, network]);

  const withdraw = async () => {
    try {
      if ((!baseAmount && !quoteAmount) || !address) return;
      const selectedAssetMarket = marketList.find(
        ([baseAsset, quoteAsset]) =>
          baseAsset?.ticker === selectedMarket.baseAsset?.ticker &&
          quoteAsset?.ticker === selectedMarket.quoteAsset?.ticker
      );
      if (!selectedAssetMarket?.[0] || !selectedAssetMarket?.[1]) throw new Error('Market selection error');
      const { password } = await passwordForm.validateFields();
      const script = addressLiquidJS.fromConfidential(address).scriptPubKey?.toString('hex');
      if (!script) throw new Error('Invalid address');
      const outputs = selectedAssetMarket
        ?.map((asset, index) => {
          return {
            asset: asset?.asset_id ?? '',
            amount: isLbtcTicker(asset?.ticker)
              ? Number(formatLbtcUnitToSats(index === 0 ? baseAmount : quoteAmount, lbtcUnit))
              : Number(formatFiatToSats(index === 0 ? baseAmount : quoteAmount)),
            script,
            blindingKey: addressLiquidJS.fromConfidential(address).blindingKey.toString('hex'),
          };
        })
        .filter((output) => output.amount > 0);
      const res = await withdrawMarket({
        market: {
          baseAsset: selectedAssetMarket?.[0].asset_id,
          quoteAsset: selectedAssetMarket?.[1].asset_id,
        },
        outputs,
        millisatsPerByte: 100,
        password: password,
      });
      // @ts-ignore
      if (res?.error) throw new Error(res?.error);
      form.resetFields();
      setBaseAmount(0);
      setQuoteAmount(0);
      setAddress('');
      // Refetch after some time, waiting available balance to equal total balance
      setTimeout(() => refetchMarketInfo(), 1000);
      setTimeout(() => refetchMarketInfo(), 5000);
      setTimeout(() => refetchMarketInfo(), 10000);
      notification.success({ message: 'Market withdrawal successful' });
    } catch (err) {
      // @ts-ignore
      notification.error({ message: err.message });
    }
  };

  const baseToFavoriteCurrency = convertAmountToFavoriteCurrency({
    asset: selectedMarket?.baseAsset,
    amount: baseAmount,
    network: network,
    preferredCurrency: currency,
    preferredLbtcUnit: lbtcUnit,
    prices: prices,
  });

  const quoteToFavoriteCurrency = convertAmountToFavoriteCurrency({
    asset: selectedMarket?.quoteAsset,
    amount: quoteAmount,
    network: network,
    preferredCurrency: currency,
    preferredLbtcUnit: lbtcUnit,
    prices: prices,
  });

  const baseAvailableAmountFormatted =
    !selectedMarket.baseAsset?.asset_id ||
    marketInfo?.balance[selectedMarket.baseAsset.asset_id]?.confirmedBalance === undefined
      ? 'N/A'
      : fromSatsToUnitOrFractional(
          marketInfo?.balance[selectedMarket.baseAsset.asset_id]?.confirmedBalance,
          selectedMarket?.baseAsset?.precision,
          isLbtcTicker(selectedMarket?.baseAsset?.ticker),
          lbtcUnit
        );
  const baseTotalAmountFormatted =
    !selectedMarket.baseAsset?.asset_id ||
    marketInfo?.balance[selectedMarket.baseAsset.asset_id]?.confirmedBalance === undefined
      ? 'N/A'
      : fromSatsToUnitOrFractional(
          // TODO: use totalBalance once fixed
          marketInfo?.balance[selectedMarket.baseAsset.asset_id]?.confirmedBalance +
            marketInfo?.balance[selectedMarket.baseAsset.asset_id]?.unconfirmedBalance,
          selectedMarket?.baseAsset?.precision,
          isLbtcTicker(selectedMarket?.baseAsset?.ticker),
          lbtcUnit
        );
  const quoteAvailableAmountFormatted =
    !selectedMarket.quoteAsset?.asset_id ||
    marketInfo?.balance[selectedMarket.quoteAsset.asset_id]?.confirmedBalance === undefined
      ? 'N/A'
      : fromSatsToUnitOrFractional(
          marketInfo?.balance[selectedMarket.quoteAsset.asset_id]?.confirmedBalance,
          selectedMarket?.quoteAsset?.precision,
          isLbtcTicker(selectedMarket?.quoteAsset?.ticker),
          lbtcUnit
        );
  const quoteTotalAmountFormatted =
    !selectedMarket.quoteAsset?.asset_id ||
    marketInfo?.balance[selectedMarket.quoteAsset.asset_id]?.confirmedBalance === undefined
      ? 'N/A'
      : fromSatsToUnitOrFractional(
          // TODO: use totalBalance once fixed
          marketInfo?.balance[selectedMarket.quoteAsset.asset_id]?.confirmedBalance +
            marketInfo?.balance[selectedMarket.quoteAsset.asset_id]?.unconfirmedBalance,
          selectedMarket?.quoteAsset?.precision,
          isLbtcTicker(selectedMarket?.quoteAsset?.ticker),
          lbtcUnit
        );

  return (
    <>
      <Breadcrumb separator={<Icon component={chevronRight} />}>
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
        <Col xs={24} md={{ span: 12, offset: 12 }}>
          <SelectMarket
            selectedMarket={selectedMarket}
            setSelectedMarket={setSelectedMarket}
            marketList={marketList}
          />
        </Col>
        <Col xs={24} md={{ span: 12, offset: 12 }}>
          <Form
            layout="vertical"
            form={form}
            name="withdraw_market_form"
            wrapperCol={{ span: 24 }}
            validateTrigger="onBlur"
            onFinish={() => setIsConfirmWithdrawModalVisible(true)}
          >
            <div className="base-amount-container panel panel__grey panel__top">
              <Row className="align-center">
                <Col span={12} className="d-flex align-center">
                  <CurrencyIcon assetId={selectedMarket?.baseAsset?.asset_id || ''} />
                  <span className="dm-sans dm-sans__xx ml-2">
                    {selectedMarket?.baseAsset?.formattedTicker}
                  </span>
                </Col>
                <Col span={12}>
                  <InputAmount
                    assetPrecision={selectedMarket?.baseAsset?.precision ?? 8}
                    formItemName="baseAmount"
                    hasError={!!withdrawMarketError}
                    lbtcUnitOrTicker={selectedMarket?.baseAsset?.formattedTicker ?? ''}
                    setInputValue={(value) => {
                      form.setFieldsValue({ baseAmount: value });
                      setBaseAmount(Number(value));
                    }}
                  />
                </Col>
              </Row>
              <Row className="residual-balance-container">
                <Col span={16}>
                  <span className="dm-mono dm-mono__bold mr-1">Available balance:</span>
                  <Button
                    type="ghost"
                    className="dm-mono dm-mono__bold pl-0 pt-0 h-auto"
                    onClick={() => {
                      if (baseAvailableAmountFormatted !== 'N/A') {
                        form.setFieldsValue({
                          baseAmount: baseAvailableAmountFormatted,
                        });
                        setBaseAmount(Number(baseAvailableAmountFormatted));
                      }
                    }}
                  >{`${baseAvailableAmountFormatted} ${selectedMarket?.baseAsset?.formattedTicker}`}</Button>
                  <span className="dm-mono dm-mono__bold d-block">{`Total balance: ${baseTotalAmountFormatted} ${selectedMarket?.baseAsset?.formattedTicker}`}</span>
                </Col>
                <Col className="dm-mono dm-mono__bold d-flex justify-end" span={8}>
                  <span>{!isLoadingPrices && !isErrorPrices && baseToFavoriteCurrency}</span>
                  <span className="ml-2">
                    {currency.value === 'btc' ? lbtcUnit : currency.value.toUpperCase()}
                  </span>
                </Col>
              </Row>
            </div>
            <div className="panel panel__grey panel__bottom mb-6">
              <Row className="align-center">
                <Col span={12} className="d-flex align-center">
                  <CurrencyIcon assetId={selectedMarket?.quoteAsset?.asset_id || ''} />
                  <span className="dm-sans dm-sans__xx ml-2">
                    {selectedMarket?.quoteAsset?.formattedTicker}
                  </span>
                </Col>
                <Col span={12}>
                  <InputAmount
                    assetPrecision={selectedMarket?.quoteAsset?.precision ?? 8}
                    formItemName="quoteAmount"
                    hasError={!!withdrawMarketError}
                    lbtcUnitOrTicker={selectedMarket?.quoteAsset?.formattedTicker ?? ''}
                    setInputValue={(value) => {
                      form.setFieldsValue({ quoteAmount: value });
                      setQuoteAmount(Number(value));
                    }}
                  />
                </Col>
              </Row>
              <Row className="residual-balance-container">
                <Col span={16}>
                  <span className="dm-mono dm-mono__bold mr-1">Available balance:</span>
                  <Button
                    type="ghost"
                    className="dm-mono dm-mono__bold pl-0 pt-0 h-auto"
                    onClick={() => {
                      if (quoteAvailableAmountFormatted !== 'N/A') {
                        form.setFieldsValue({
                          quoteAmount: quoteAvailableAmountFormatted,
                        });
                        setQuoteAmount(Number(quoteAvailableAmountFormatted));
                      }
                    }}
                  >{`${quoteAvailableAmountFormatted} ${selectedMarket?.quoteAsset?.formattedTicker}`}</Button>
                  <span className="dm-mono dm-mono__bold d-block">{`Total balance: ${quoteTotalAmountFormatted} ${selectedMarket?.quoteAsset?.formattedTicker}`}</span>
                </Col>
                <Col className="dm-mono dm-mono__bold d-flex justify-end" span={8}>
                  <span>{(!isLoadingPrices && !isErrorPrices && quoteToFavoriteCurrency) || '0.00'}</span>
                  <span className="ml-2">
                    {currency.value === 'btc' ? lbtcUnit : currency.value.toUpperCase()}
                  </span>
                </Col>
              </Row>
            </div>

            <Form.Item name="address" className={classNames({ 'has-error': withdrawMarketError })}>
              <Input
                placeholder="Paste address here or scan QR code"
                className="input__big"
                onChange={(ev) => setAddress(ev.target.value)}
              />
            </Form.Item>

            <Form.Item
              className="submit-btn-container"
              wrapperCol={{ xs: { span: 24 }, md: { span: 12, offset: 6 } }}
            >
              <Button
                htmlType="submit"
                loading={withdrawMarketIsLoading}
                className="w-100"
                disabled={
                  (baseAmount === 0 && quoteAmount === 0) ||
                  baseAmount > Number(baseAvailableAmountFormatted) ||
                  quoteAmount > Number(quoteAvailableAmountFormatted) ||
                  !address
                }
              >
                WITHDRAW
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Modal
        title="Withdrawal Confirmation"
        open={isConfirmWithdrawModalVisible}
        onOk={async () => {
          setIsConfirmWithdrawModalVisible(false);
          setIsPasswordModalVisible(true);
        }}
        onCancel={() => setIsConfirmWithdrawModalVisible(false)}
      >
        <p>
          Are you sure you want to withdraw
          {baseAmount ? (
            <span className="mx-2">
              {`${baseAmount} ${selectedMarket?.baseAsset?.formattedTicker ?? ''}`}
            </span>
          ) : null}
          {baseAmount && quoteAmount ? `and` : null}
          {quoteAmount ? (
            <span className="mx-2">{`${quoteAmount} ${
              selectedMarket?.quoteAsset?.formattedTicker ?? ''
            }`}</span>
          ) : null}
          to address <span className="address">{address}</span> ?
        </p>
      </Modal>
      <Modal
        destroyOnClose={true}
        title="Withdrawal Password Confirmation"
        open={isPasswordModalVisible}
        onOk={async () => {
          await withdraw();
          setIsPasswordModalVisible(false);
          passwordForm.resetFields();
        }}
        onCancel={() => {
          setIsPasswordModalVisible(false);
          passwordForm.resetFields();
        }}
      >
        <Form layout="vertical" form={passwordForm} name="withdraw_password_form" wrapperCol={{ span: 24 }}>
          <Form.Item noStyle label="Enter your password" name="password">
            <Input.Password
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              className="input__medium"
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
