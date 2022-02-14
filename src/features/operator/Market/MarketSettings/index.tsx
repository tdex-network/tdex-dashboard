import './marketSettings.less';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Modal, Row, Col, Typography, Switch, notification, Divider, Button } from 'antd';
import type { SwitchChangeEventHandler } from 'antd/es/switch';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import type { MarketInfo } from '../../../../api-spec/generated/js/operator_pb';
import alertOctogon from '../../../../assets/images/alert-octagon.svg';
import { HOME_ROUTE } from '../../../../routes/constants';
import { useCloseMarketMutation, useDropMarketMutation, useOpenMarketMutation } from '../../operator.api';
import { MarketStrategy } from '../MarketStrategy';

import { UpdateMarketPriceForm } from './UpdateMarketPriceForm';
import { Webhook } from './Webhook';

interface MarketSettingsProps {
  marketInfo?: MarketInfo.AsObject;
  isMarketSettingsModalVisible: boolean;
  handleMarketSettingsModalCancel: () => void;
  baseAssetTicker: string;
  quoteAssetTicker: string;
}

const { Title } = Typography;

export const MarketSettings = ({
  marketInfo,
  isMarketSettingsModalVisible,
  handleMarketSettingsModalCancel,
  baseAssetTicker,
  quoteAssetTicker,
}: MarketSettingsProps): JSX.Element => {
  const navigate = useNavigate();
  const [openMarket] = useOpenMarketMutation();
  const [closeMarket] = useCloseMarketMutation();
  const [dropMarket] = useDropMarketMutation();

  const handlePauseMarket: SwitchChangeEventHandler = async (isActive) => {
    try {
      if (isActive) {
        const resOpen = await openMarket({
          baseAsset: marketInfo?.market?.baseAsset || '',
          quoteAsset: marketInfo?.market?.quoteAsset || '',
        });
        //@ts-ignore
        if (resOpen?.error) throw new Error(resOpen?.error);
        notification.success({ message: 'Market opened successfully' });
      } else {
        const resClose = await closeMarket({
          baseAsset: marketInfo?.market?.baseAsset || '',
          quoteAsset: marketInfo?.market?.quoteAsset || '',
        });
        //@ts-ignore
        if (resClose?.error) throw new Error(resClose?.error);
        notification.info({ message: 'Market closed successfully' });
      }
    } catch (err) {
      //@ts-ignore
      notification.error({ message: err.message });
    }
  };

  const handleClickDropMarket = async () => {
    if (!marketInfo?.market?.baseAsset || !marketInfo?.market?.quoteAsset) return;
    const res = await dropMarket({
      baseAsset: marketInfo.market.baseAsset,
      quoteAsset: marketInfo.market.quoteAsset,
    });
    // @ts-ignore
    if (res?.error) {
      // @ts-ignore
      notification.error({ message: res?.error });
    } else {
      notification.success({ message: 'Market closed successfully' });
      navigate(HOME_ROUTE);
    }
  };

  return (
    <Modal
      visible={isMarketSettingsModalVisible}
      onCancel={handleMarketSettingsModalCancel}
      closable={false}
      footer={<></>}
      className="market-settings-modal"
    >
      <Row>
        <Col span={12}>
          <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey d-inline mr-4" level={3}>
            Open Market
          </Title>
          <InfoCircleOutlined className="grey" />
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Switch onChange={handlePauseMarket} checked={marketInfo?.tradable} />
        </Col>
      </Row>

      <Divider className="my-4" />

      <Row className="mb-2">
        <Col span={12}>
          <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey d-inline mr-4" level={3}>
            Set Market Strategy
          </Title>
          <InfoCircleOutlined className="grey" />
        </Col>
      </Row>
      <MarketStrategy marketInfo={marketInfo} />

      <Divider className="my-4" />

      {marketInfo?.strategyType === 0 ? (
        <>
          <Row className="mb-2">
            <Col span={12}>
              <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey d-inline mr-4" level={3}>
                Update Market Price
              </Title>
              <InfoCircleOutlined className="grey" />
            </Col>
          </Row>
          <UpdateMarketPriceForm
            market={marketInfo.market}
            baseAssetTicker={baseAssetTicker}
            quoteAssetTicker={quoteAssetTicker}
            handleMarketSettingsModalCancel={handleMarketSettingsModalCancel}
          />
          <Divider className="my-4" />
        </>
      ) : null}

      <Row className="mb-2">
        <Col span={12}>
          <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey d-inline mr-4" level={3}>
            Set Notification
          </Title>
          <InfoCircleOutlined className="grey" />
        </Col>
      </Row>
      <Webhook />

      <Divider className="my-4" />

      <Row className="text-center">
        <Col span={20} offset={2}>
          <img src={alertOctogon} alt="alert" className="mb-2" />
          <p>Withdraw all asset to close Market</p>
        </Col>
      </Row>
      <Button
        danger
        className="w-100"
        onClick={handleClickDropMarket}
        disabled={
          (marketInfo?.balance && marketInfo.balance.baseAmount > 0) ||
          (marketInfo?.balance && marketInfo.balance.quoteAmount > 0)
        }
      >
        CLOSE MARKET
      </Button>
    </Modal>
  );
};
