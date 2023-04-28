import './feeForm.less';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Row, Col, Typography, Divider, Form, Button, notification, Popover } from 'antd';

import type { MarketFee } from '../../../../../api-spec/protobuf/gen/js/tdex/v2/types_pb';
import type { RootState } from '../../../../../app/store';
import { useTypedSelector } from '../../../../../app/store';
import { CurrencyIcon } from '../../../../../common/CurrencyIcon';
import { InputAmount } from '../../../../../common/InputAmount';
import type { Asset } from '../../../../../domain/asset';
import {
  formatFiatToSats,
  formatLbtcUnitToSats,
  fromSatsToUnitOrFractional,
  isLbtcAssetId,
  isLbtcTicker,
} from '../../../../../utils';

const { Title } = Typography;

interface IFormInputs {
  feeAbsoluteBaseInput: string;
  feeAbsoluteQuoteInput: string;
  feeRelativeBaseInput: string;
  feeRelativeQuoteInput: string;
}

interface FeeFormProps {
  baseAsset: Asset;
  quoteAsset: Asset;
  feeAbsoluteBase?: string;
  feeAbsoluteQuote?: string;
  feeRelativeBase?: string;
  feeRelativeQuote?: string;
  className?: string;
  incrementStep?: () => void;
  marketInfoRefetch?: () => void;
  setFees: (fees: { percentageFee: MarketFee; fixedFee: MarketFee }) => void;
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
  feeRelativeBase = FEE_RELATIVE_DEFAULT,
  feeRelativeQuote = FEE_RELATIVE_DEFAULT,
  setFees,
}: FeeFormProps): JSX.Element => {
  const { lbtcUnit, network } = useTypedSelector(({ settings }: RootState) => settings);
  const [form] = Form.useForm<IFormInputs>();
  const baseAssetUnitOrTicker = isLbtcAssetId(baseAsset.asset_id, network) ? lbtcUnit : baseAsset.ticker;
  const quoteAssetUnitOrTicker = isLbtcAssetId(quoteAsset.asset_id, network) ? lbtcUnit : quoteAsset.ticker;

  const setFeesAndIncrementStep = async () => {
    try {
      const values = await form.validateFields();
      const base = Number(values.feeRelativeBaseInput) * 100;
      const quote = Number(values.feeRelativeQuoteInput) * 100;
      setFees({
        percentageFee: { baseAsset: base.toString(), quoteAsset: quote.toString() },
        fixedFee: {
          baseAsset: isLbtcAssetId(baseAsset.asset_id, network)
            ? formatLbtcUnitToSats(Number(values.feeAbsoluteBaseInput), lbtcUnit)
            : formatFiatToSats(Number(values.feeAbsoluteBaseInput)),
          quoteAsset: isLbtcAssetId(quoteAsset.asset_id, network)
            ? formatLbtcUnitToSats(Number(values.feeAbsoluteQuoteInput), lbtcUnit)
            : formatFiatToSats(Number(values.feeAbsoluteQuoteInput)),
        },
      });
      incrementStep?.();
    } catch (err) {
      // @ts-ignore
      notification.error({ message: err.message });
    }
  };

  return (
    <>
      <Form
        layout="vertical"
        form={form}
        name="fee_form"
        initialValues={{
          feeAbsoluteBaseInput: fromSatsToUnitOrFractional(
            Number(feeAbsoluteBase),
            baseAsset.precision,
            isLbtcTicker(baseAsset.ticker),
            lbtcUnit
          ),
          feeAbsoluteQuoteInput: fromSatsToUnitOrFractional(
            Number(feeAbsoluteQuote),
            quoteAsset.precision,
            isLbtcTicker(quoteAsset.ticker),
            lbtcUnit
          ),
          feeRelativeBaseInput: Number(feeRelativeBase || 0) / 100,
          feeRelativeQuoteInput: Number(feeRelativeQuote || 0) / 100,
        }}
        className={className}
      >
        <div className={'panel panel__grey'}>
          <Row>
            <Col span={24}>
              <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey d-inline mr-4" level={3}>
                Set Absolute Fee
              </Title>
              <Popover
                trigger={['hover', 'click']}
                content="Absolute fees are fixed fees that are charged as a fixed amount in the asset on the way in. For example, if the swap is from USDT to BTC and the fixed fee is 0.01 BTC, the trader will be charged 0.01 BTC for the swap, regardless of the overall value of the swap."
              >
                <InfoCircleOutlined className="grey" />
              </Popover>
            </Col>
          </Row>
          <Row align="middle">
            <Col span={12} className="d-flex align-center">
              <CurrencyIcon assetId={baseAsset.asset_id} />
              <span className="dm-sans dm-sans__xx ml-2">{baseAssetUnitOrTicker}</span>
            </Col>
            <Col span={12}>
              <InputAmount
                assetPrecision={baseAsset.precision}
                formItemName="feeAbsoluteBaseInput"
                lbtcUnitOrTicker={baseAssetUnitOrTicker}
                setInputValue={(value) => form.setFieldsValue({ feeAbsoluteBaseInput: value })}
              />
            </Col>
          </Row>
          <Divider />
          <Row align="middle">
            <Col span={12} className="d-flex align-center">
              <CurrencyIcon assetId={quoteAsset.asset_id} />
              <span className="dm-sans dm-sans__xx ml-2">
                {isLbtcAssetId(quoteAsset.asset_id, network) ? lbtcUnit : quoteAsset.ticker}
              </span>
            </Col>
            <Col span={12}>
              <InputAmount
                assetPrecision={quoteAsset.precision}
                formItemName="feeAbsoluteQuoteInput"
                lbtcUnitOrTicker={quoteAssetUnitOrTicker}
                setInputValue={(value) => form.setFieldsValue({ feeAbsoluteQuoteInput: value })}
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col span={24}>
              <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey d-inline mr-4" level={3}>
                Set Relative Fee
              </Title>
              <Popover
                trigger={['hover', 'click']}
                content="Relative fees are fees that are charged as a percentage of the overall value of the swap. For example, if the swap is from USDT to BTC and the percentage fee is 0.1%, the trader will be charged 0.1% of the value of the swap in the asset on the way in. So if the swap is worth 100 USDT, the fee would be 0.1 USDT."
              >
                <InfoCircleOutlined className="grey" />
              </Popover>
            </Col>
          </Row>
          <Row align="middle" className="fee-relative-container">
            <Col span={16}>
              <CurrencyIcon assetId={baseAsset.asset_id} />
              <span className="dm-sans dm-sans__xx ml-2">{baseAsset.ticker}</span>
            </Col>
            <Col span={8}>
              <InputAmount
                assetPrecision={2}
                formItemName="feeRelativeBaseInput"
                lbtcUnitOrTicker=""
                setInputValue={(value) => form.setFieldsValue({ feeRelativeBaseInput: value })}
                suffix="%"
              />
            </Col>
          </Row>
          <Row align="middle" className="fee-relative-btn-container">
            <Col span={24}>
              <Button className="mr-2" onClick={() => form.setFieldsValue({ feeRelativeBaseInput: '0.25' })}>
                0.25%
              </Button>
              <Button className="mr-2" onClick={() => form.setFieldsValue({ feeRelativeBaseInput: '3' })}>
                3%
              </Button>
              <Button onClick={() => form.setFieldsValue({ feeRelativeBaseInput: '10' })}>10%</Button>
            </Col>
          </Row>
          <Row align="middle" className="fee-relative-container">
            <Col span={16}>
              <CurrencyIcon assetId={quoteAsset.asset_id} />
              <span className="dm-sans dm-sans__xx ml-2">{quoteAsset.ticker}</span>
            </Col>
            <Col span={8}>
              <InputAmount
                assetPrecision={2}
                formItemName="feeRelativeQuoteInput"
                lbtcUnitOrTicker=""
                setInputValue={(value) => form.setFieldsValue({ feeRelativeQuoteInput: value })}
                suffix="%"
              />
            </Col>
          </Row>
          <Row align="middle" className="fee-relative-btn-container">
            <Col span={24}>
              <Button className="mr-2" onClick={() => form.setFieldsValue({ feeRelativeQuoteInput: '0.25' })}>
                0.25%
              </Button>
              <Button className="mr-2" onClick={() => form.setFieldsValue({ feeRelativeQuoteInput: '3' })}>
                3%
              </Button>
              <Button onClick={() => form.setFieldsValue({ feeRelativeQuoteInput: '10' })}>10%</Button>
            </Col>
          </Row>
        </div>
        <Button onClick={setFeesAndIncrementStep} className="w-100 mt-6">
          SET FEES
        </Button>
      </Form>
    </>
  );
};
