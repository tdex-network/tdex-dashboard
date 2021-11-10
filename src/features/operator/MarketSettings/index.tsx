import './marketSettings.less';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Modal, Row, Col, Typography, Switch, notification, Divider, Input, Button } from 'antd';
import type { SwitchChangeEventHandler } from 'antd/es/switch';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import type { MarketInfo } from '../../../api-spec/generated/js/operator_pb';
import alertOctogon from '../../../assets/images/alert-octagon.svg';
import { HOME_ROUTE } from '../../../routes/constants';
import { MarketStrategy } from '../MarketStrategy';
import { useCloseMarketMutation, useDropMarketMutation, useOpenMarketMutation } from '../operator.api';

interface MarketSettingsProps {
  marketInfo?: MarketInfo.AsObject;
  isMarketSettingsModalVisible: boolean;
  handleMarketSettingsModalCancel: () => void;
}

const { Title } = Typography;

export const MarketSettings = ({
  marketInfo,
  isMarketSettingsModalVisible,
  handleMarketSettingsModalCancel,
}: MarketSettingsProps): JSX.Element => {
  const navigate = useNavigate();
  const [openMarket] = useOpenMarketMutation();
  const [closeMarket] = useCloseMarketMutation();
  const [dropMarket] = useDropMarketMutation();

  const handlePauseMarket: SwitchChangeEventHandler = (isActive) => {
    if (isActive) {
      openMarket({
        baseAsset: marketInfo?.market?.baseAsset || '',
        quoteAsset: marketInfo?.market?.quoteAsset || '',
      });
      notification.success({ message: 'Market opened successfully' });
    } else {
      closeMarket({
        baseAsset: marketInfo?.market?.baseAsset || '',
        quoteAsset: marketInfo?.market?.quoteAsset || '',
      });
      notification.info({ message: 'Market closed successfully' });
    }
  };

  const handleClickDropMarket = () => {
    if (!marketInfo?.market?.baseAsset || !marketInfo?.market?.quoteAsset) return;
    dropMarket({ baseAsset: marketInfo.market.baseAsset, quoteAsset: marketInfo.market.quoteAsset });
    notification.success({ message: 'Market closed successfully' });
    navigate(HOME_ROUTE);
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
            Pause Market
          </Title>
          <InfoCircleOutlined />
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
          <InfoCircleOutlined />
        </Col>
      </Row>
      <MarketStrategy market={marketInfo?.market} />

      <Divider className="my-4" />

      <Row className="mb-2">
        <Col span={12}>
          <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey d-inline mr-4" level={3}>
            Set Notification
          </Title>
          <InfoCircleOutlined />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <span>Trade</span>
          <span>Withdraw</span>
          <span>Low Balance</span>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Input />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Input />
        </Col>
      </Row>

      <Divider className="my-4" />

      <Row className="text-center">
        <Col span={20} offset={2}>
          <img src={alertOctogon} alt="alert" className="mb-2" />
          <p>Withdraw all asset to close Market</p>
        </Col>
      </Row>
      <Button danger className="w-100" onClick={handleClickDropMarket}>
        CLOSE MARKET
      </Button>
    </Modal>
  );
};
