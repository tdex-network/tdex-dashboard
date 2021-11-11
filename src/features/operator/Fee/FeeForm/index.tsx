import './feeForm.less';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Row, Col, Typography, Input, Divider, Form, Button, notification } from 'antd';
import React from 'react';

import { CurrencyIcon } from '../../../../common/CurrencyIcon';
import { MarketIcons } from '../../../../common/MarketIcons';
import type { Asset } from '../../../../domain/asset';
import { useUpdateMarketFixedFeeMutation, useUpdateMarketPercentageFeeMutation } from '../../operator.api';

const { Title } = Typography;

interface IFormInputs {
  feeAbsoluteBaseInput: string;
  feeAbsoluteQuoteInput: string;
  feeRelativeInput: string;
}

interface FeeFormProps {
  baseAsset: Asset;
  quoteAsset: Asset;
  feeAbsoluteBase?: string;
  feeAbsoluteQuote?: string;
  feeRelative?: string;
  className?: string;
  setStep?: (step: number) => void;
}

const FEE_ABSOLUTE_BASE_DEFAULT = '0';
const FEE_ABSOLUTE_QUOTE_DEFAULT = '0';
const FEE_RELATIVE_DEFAULT = '25';

export const FeeForm = ({
  baseAsset,
  quoteAsset,
  className,
  setStep,
  feeAbsoluteBase = FEE_ABSOLUTE_BASE_DEFAULT,
  feeAbsoluteQuote = FEE_ABSOLUTE_QUOTE_DEFAULT,
  feeRelative = FEE_RELATIVE_DEFAULT,
}: FeeFormProps): JSX.Element => {
  const [form] = Form.useForm<IFormInputs>();
  const [updateMarketPercentageFee] = useUpdateMarketPercentageFeeMutation();
  const [updateMarketFixedFee] = useUpdateMarketFixedFeeMutation();

  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      const updateMarketPercentageFeeRes = await updateMarketPercentageFee({
        basisPoint: Number(values.feeRelativeInput) * 100,
        market: { baseAsset: baseAsset.asset_id, quoteAsset: quoteAsset.asset_id },
      });
      // @ts-ignore
      if (updateMarketPercentageFeeRes?.error) throw new Error(updateMarketPercentageFeeRes?.error);
      const updateMarketFixedFeeRes = await updateMarketFixedFee({
        fixedFee: {
          baseFee: Number(values.feeAbsoluteBaseInput),
          quoteFee: Number(values.feeAbsoluteQuoteInput),
        },
        market: { baseAsset: baseAsset.asset_id, quoteAsset: quoteAsset.asset_id },
      });
      // @ts-ignore
      if (updateMarketFixedFeeRes?.error) throw new Error(updateMarketFixedFeeRes?.error);
      setStep?.(2);
      notification.success({ message: 'Market fees updated successfully' });
    } catch (err) {
      // @ts-ignore
      notification.error({ message: err.message });
    }
  };

  const resetAll = async () => {
    form.setFieldsValue({
      feeAbsoluteBaseInput: FEE_ABSOLUTE_BASE_DEFAULT,
      feeAbsoluteQuoteInput: FEE_ABSOLUTE_QUOTE_DEFAULT,
      feeRelativeInput: String(Number(FEE_RELATIVE_DEFAULT) / 100),
    });
    await onFinish();
  };

  return (
    <Form
      layout="vertical"
      form={form}
      name="fee_form"
      initialValues={{
        feeAbsoluteBaseInput: feeAbsoluteBase,
        feeAbsoluteQuoteInput: feeAbsoluteQuote,
        feeRelativeInput: Number(feeRelative) / 100,
      }}
      onFinish={onFinish}
      className={`${className} mb-4`}
    >
      <div className="panel panel__grey h-100">
        <Row>
          <Col span={24}>
            <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey d-inline mr-4" level={3}>
              Set Absolute Fee
            </Title>
            <InfoCircleOutlined />
          </Col>
        </Row>
        <Row align="middle">
          <Col span={14}>
            <CurrencyIcon currency={baseAsset.ticker} />
            <span className="dm-sans dm-sans__xx ml-2">{baseAsset.ticker}</span>
          </Col>
          <Col span={10}>
            <Form.Item name="feeAbsoluteBaseInput" noStyle>
              <Input
                type="number"
                min="0"
                onBlur={(ev) => {
                  if (!ev.target.value) form.setFieldsValue({ feeAbsoluteBaseInput: '0' });
                }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Divider />
        <Row align="middle">
          <Col span={14}>
            <CurrencyIcon currency={quoteAsset.ticker} />
            <span className="dm-sans dm-sans__xx ml-2">{quoteAsset.ticker}</span>
          </Col>
          <Col span={10}>
            <Form.Item name="feeAbsoluteQuoteInput" noStyle>
              <Input
                type="number"
                min="0"
                onBlur={(ev) => {
                  if (!ev.target.value) form.setFieldsValue({ feeAbsoluteQuoteInput: '0' });
                }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col span={24}>
            <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey d-inline mr-4" level={3}>
              Set Relative Fee
            </Title>
            <InfoCircleOutlined />
          </Col>
        </Row>
        <Row align="middle" className="fee-relative-container">
          <Col span={14}>
            <MarketIcons baseAsset={baseAsset.ticker} quoteAsset={quoteAsset.ticker} size="medium" />
            <span className="dm-sans dm-sans__xx">
              {baseAsset.ticker} / {quoteAsset.ticker}
            </span>
          </Col>
          <Col span={10}>
            <Form.Item name="feeRelativeInput" noStyle>
              <Input
                type="number"
                min="0"
                step="any"
                suffix={'%'}
                onBlur={(ev) => {
                  if (!ev.target.value) form.setFieldsValue({ feeRelativeInput: '0' });
                }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row align="middle" className="fee-relative-btn-container">
          <Col span={14}>
            <Button onClick={() => form.setFieldsValue({ feeRelativeInput: '0.25' })}>0.25%</Button>
            <Button onClick={() => form.setFieldsValue({ feeRelativeInput: '3' })}>3%</Button>
            <Button onClick={() => form.setFieldsValue({ feeRelativeInput: '10' })}>10%</Button>
          </Col>
        </Row>
        <Row className="confirm-btn-container">
          <Col span={24}>
            <Form.Item noStyle>
              <Button type="ghost" onClick={resetAll}>
                Reset all
              </Button>
            </Form.Item>
            <Form.Item noStyle>
              <Button htmlType="submit">CONFIRM FEES</Button>
            </Form.Item>
          </Col>
        </Row>
      </div>
    </Form>
  );
};
