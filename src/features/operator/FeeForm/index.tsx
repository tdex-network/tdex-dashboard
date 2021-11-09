import './feeForm.less';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Row, Col, Typography, Input, Divider, Form, Button, notification } from 'antd';
import React from 'react';

import { CurrencyIcon } from '../../../common/CurrencyIcon';
import { MarketIcons } from '../../../common/MarketIcons';
import type { Asset } from '../../../domain/asset';
import { useUpdateMarketFixedFeeMutation, useUpdateMarketPercentageFeeMutation } from '../operator.api';

const { Title } = Typography;

interface IFormInputs {
  feeAbsoluteBase: string;
  feeAbsoluteQuote: string;
  feeRelative: string;
}

interface FeeFormProps {
  baseAsset: Asset;
  quoteAsset: Asset;
  className: string;
  setStep: (step: number) => void;
}

export const FeeForm = ({ baseAsset, quoteAsset, className, setStep }: FeeFormProps): JSX.Element => {
  const [form] = Form.useForm<IFormInputs>();
  const [updateMarketPercentageFee] = useUpdateMarketPercentageFeeMutation();
  const [updateMarketFixedFee] = useUpdateMarketFixedFeeMutation();

  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      const updateMarketPercentageFeeRes = await updateMarketPercentageFee({
        basisPoint: Number(values.feeRelative),
        market: { baseAsset: baseAsset.asset_id, quoteAsset: quoteAsset.asset_id },
      });
      // @ts-ignore
      if (updateMarketPercentageFeeRes?.error) throw new Error(updateMarketPercentageFeeRes?.error);
      const updateMarketFixedFeeRes = await updateMarketFixedFee({
        fixedFee: { baseFee: Number(values.feeAbsoluteBase), quoteFee: Number(values.feeAbsoluteQuote) },
        market: { baseAsset: baseAsset.asset_id, quoteAsset: quoteAsset.asset_id },
      });
      // @ts-ignore
      if (updateMarketFixedFeeRes?.error) throw new Error(updateMarketFixedFeeRes?.error);
      setStep(2);
      notification.success({ message: 'Market fees updated successfully' });
    } catch (err) {
      // @ts-ignore
      notification.error({ message: err.message });
    }
  };

  const resetAll = () => {
    form.resetFields();
  };

  return (
    <Form
      layout="vertical"
      form={form}
      name="fee_form"
      initialValues={{ feeAbsoluteBase: 0, feeAbsoluteQuote: 0, feeRelative: 3 }}
      onFinish={onFinish}
      className={`${className} mb-4`}
    >
      <div className="panel panel__grey">
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
            <Form.Item name="feeAbsoluteBase" noStyle>
              <Input
                type="number"
                onBlur={(ev) => {
                  if (!ev.target.value) form.setFieldsValue({ feeAbsoluteBase: '0' });
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
            <Form.Item name="feeAbsoluteQuote" noStyle>
              <Input
                type="number"
                onBlur={(ev) => {
                  if (!ev.target.value) form.setFieldsValue({ feeAbsoluteQuote: '0' });
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
            <MarketIcons baseAsset={baseAsset.ticker} quoteAsset={quoteAsset.ticker} />
            <span className="dm-sans dm-sans__xx">
              {baseAsset.ticker} / {quoteAsset.ticker}
            </span>
          </Col>
          <Col span={10}>
            <Form.Item name="feeRelative" noStyle>
              <Input
                type="number"
                suffix={'%'}
                onBlur={(ev) => {
                  if (!ev.target.value) form.setFieldsValue({ feeRelative: '0' });
                }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row align="middle" className="fee-relative-btn-container">
          <Col span={14}>
            <Button onClick={() => form.setFieldsValue({ feeRelative: '0.25' })}>0.25%</Button>
            <Button onClick={() => form.setFieldsValue({ feeRelative: '3' })}>3%</Button>
            <Button onClick={() => form.setFieldsValue({ feeRelative: '10' })}>10%</Button>
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
