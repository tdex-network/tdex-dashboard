import './feeForm.less';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Row, Col, Typography, Divider, Form, Button, notification } from 'antd';
import React from 'react';

import type { RootState } from '../../../../app/store';
import { useTypedSelector } from '../../../../app/store';
import { CurrencyIcon } from '../../../../common/CurrencyIcon';
import { InputAmount } from '../../../../common/InputAmount';
import { MarketIcons } from '../../../../common/MarketIcons';
import type { Asset } from '../../../../domain/asset';
import {
  formatFiatToSats,
  formatLbtcUnitToSats,
  fromSatoshiToUnitOrFractional,
  isLbtcAssetId,
  sleep,
} from '../../../../utils';
import {
  useGetMarketInfoQuery,
  useUpdateMarketFixedFeeMutation,
  useUpdateMarketPercentageFeeMutation,
} from '../../operator.api';

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
  incrementStep?: () => void;
  marketInfoRefetch?: () => void;
}

const FEE_ABSOLUTE_BASE_DEFAULT = '0';
const FEE_ABSOLUTE_QUOTE_DEFAULT = '0';
const FEE_RELATIVE_DEFAULT = '25';

export const FeeForm = ({
  baseAsset,
  quoteAsset,
  className,
  incrementStep,
  feeAbsoluteBase = FEE_ABSOLUTE_BASE_DEFAULT,
  feeAbsoluteQuote = FEE_ABSOLUTE_QUOTE_DEFAULT,
  feeRelative = FEE_RELATIVE_DEFAULT,
  marketInfoRefetch,
}: FeeFormProps): JSX.Element => {
  const { lbtcUnit, network } = useTypedSelector(({ settings }: RootState) => settings);
  const [form] = Form.useForm<IFormInputs>();
  const [updateMarketPercentageFee] = useUpdateMarketPercentageFeeMutation();
  const [updateMarketFixedFee] = useUpdateMarketFixedFeeMutation();
  const { data: marketInfo } = useGetMarketInfoQuery({
    baseAsset: baseAsset.asset_id,
    quoteAsset: quoteAsset.asset_id,
  });

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
          baseFee: isLbtcAssetId(baseAsset.asset_id, network)
            ? Number(formatLbtcUnitToSats(Number(values.feeAbsoluteBaseInput), lbtcUnit))
            : Number(formatFiatToSats(Number(values.feeAbsoluteBaseInput))),
          quoteFee: isLbtcAssetId(quoteAsset.asset_id, network)
            ? Number(formatLbtcUnitToSats(Number(values.feeAbsoluteQuoteInput), lbtcUnit))
            : Number(formatFiatToSats(Number(values.feeAbsoluteQuoteInput))),
        },
        market: { baseAsset: baseAsset.asset_id, quoteAsset: quoteAsset.asset_id },
      });
      // @ts-ignore
      if (updateMarketFixedFeeRes?.error) throw new Error(updateMarketFixedFeeRes?.error);
      incrementStep?.();
      notification.success({ message: 'Market fees updated successfully' });
      await sleep(500);
      marketInfoRefetch?.();
    } catch (err) {
      // @ts-ignore
      notification.error({ message: err.message });
    }
  };

  const resetAll = async () => {
    if (!marketInfo?.fee?.fixed) return;
    form.setFieldsValue({
      feeAbsoluteBaseInput: fromSatoshiToUnitOrFractional(
        marketInfo.fee.fixed.baseFee,
        baseAsset.precision,
        baseAsset.unitOrTicker ?? ''
      ),
      feeAbsoluteQuoteInput: fromSatoshiToUnitOrFractional(
        marketInfo.fee.fixed.quoteFee,
        quoteAsset.precision,
        quoteAsset.unitOrTicker ?? ''
      ),
      feeRelativeInput: String(marketInfo.fee.basisPoint / 100),
    });
  };

  return (
    <Form
      layout="vertical"
      form={form}
      name="fee_form"
      initialValues={{
        feeAbsoluteBaseInput: fromSatoshiToUnitOrFractional(
          Number(feeAbsoluteBase),
          baseAsset.precision,
          baseAsset.unitOrTicker ?? ''
        ),
        feeAbsoluteQuoteInput: fromSatoshiToUnitOrFractional(
          Number(feeAbsoluteQuote),
          quoteAsset.precision,
          quoteAsset.unitOrTicker ?? ''
        ),
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
            <InfoCircleOutlined className="grey" />
          </Col>
        </Row>
        <Row align="middle">
          <Col span={8}>
            <CurrencyIcon currency={baseAsset.ticker} />
            <span className="dm-sans dm-sans__xx ml-2">{baseAsset.unitOrTicker ?? ''}</span>
          </Col>
          <Col span={16}>
            <InputAmount
              assetPrecision={baseAsset.precision}
              formItemName="feeAbsoluteBaseInput"
              lbtcUnitOrTicker={baseAsset.unitOrTicker ?? ''}
              setInputValue={(value) => form.setFieldsValue({ feeAbsoluteBaseInput: value })}
            />
          </Col>
        </Row>
        <Divider />
        <Row align="middle">
          <Col span={8}>
            <CurrencyIcon currency={quoteAsset.ticker} />
            <span className="dm-sans dm-sans__xx ml-2">
              {isLbtcAssetId(quoteAsset.asset_id, network) ? lbtcUnit : quoteAsset.ticker}
            </span>
          </Col>
          <Col span={16}>
            <InputAmount
              assetPrecision={quoteAsset.precision}
              formItemName="feeAbsoluteQuoteInput"
              lbtcUnitOrTicker={quoteAsset.unitOrTicker ?? ''}
              setInputValue={(value) => form.setFieldsValue({ feeAbsoluteQuoteInput: value })}
            />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col span={24}>
            <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey d-inline mr-4" level={3}>
              Set Relative Fee
            </Title>
            <InfoCircleOutlined className="grey" />
          </Col>
        </Row>
        <Row align="middle" className="fee-relative-container">
          <Col span={14}>
            <MarketIcons
              baseAssetTicker={baseAsset.ticker}
              quoteAssetTicker={quoteAsset.ticker}
              size="medium"
            />
            <span className="dm-sans dm-sans__xx">
              {baseAsset.ticker} / {quoteAsset.ticker}
            </span>
          </Col>
          <Col span={10}>
            <InputAmount
              assetPrecision={2}
              formItemName="feeRelativeInput"
              lbtcUnitOrTicker=""
              setInputValue={(value) => form.setFieldsValue({ feeRelativeInput: value })}
              suffix="%"
            />
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
