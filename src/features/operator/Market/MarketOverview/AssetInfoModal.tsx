import { Modal, Typography, Divider } from 'antd';
import React from 'react';

import type { MarketInfo } from '../../../../api-spec/generated/js/tdex-daemon/v1/operator_pb';
import type { RootState } from '../../../../app/store';
import { useTypedSelector } from '../../../../app/store';

interface AssetInfoModalProps {
  market: MarketInfo.AsObject['market'];
  isAssetInfoModalVisible: boolean;
  handleAssetInfoModalCancel: () => void;
}

const { Text, Title } = Typography;

export const AssetInfoModal = ({
  market,
  isAssetInfoModalVisible,
  handleAssetInfoModalCancel,
}: AssetInfoModalProps): JSX.Element => {
  const { assets, network } = useTypedSelector(({ settings }: RootState) => settings);
  const baseAsset = assets[network].find((asset) => asset.asset_id === market?.baseAsset);
  const quoteAsset = assets[network].find((asset) => asset.asset_id === market?.quoteAsset);
  return (
    <Modal
      visible={isAssetInfoModalVisible}
      onCancel={handleAssetInfoModalCancel}
      closable={false}
      footer={<></>}
      className="market-settings-modal"
    >
      <Title className="dm-sans dm-sans__xxx dm-sans__bold dm-sans__grey mb-4">Base Asset</Title>
      <div className="mb-2">
        <Title className="dm-sans dm-sans__xx dm-sans__bold d-inline mr-2">Name:</Title>
        <span className="dm-sans dm-sans__x">{baseAsset?.name ?? 'Unknown'}</span>
      </div>
      <div className="mb-2">
        <Title className="dm-sans dm-sans__xx dm-sans__bold d-inline mr-2">Ticker:</Title>
        <span className="dm-sans dm-sans__x">{baseAsset?.ticker ?? 'Unknown'}</span>
      </div>
      <div className="mb-2">
        <Title className="dm-sans dm-sans__xx dm-sans__bold d-inline mr-2 text-no-wrap">Asset hash:</Title>
        <Text className="dm-sans dm-sans__x" copyable>
          {baseAsset?.asset_id ?? 'Unknown'}
        </Text>
      </div>
      <div className="mb-2">
        <Title className="dm-sans dm-sans__xx dm-sans__bold d-inline mr-2">Precision: </Title>
        <span className="dm-sans dm-sans__x">{baseAsset?.precision ?? 'Unknown'}</span>
      </div>

      <Divider className="my-6" />

      <Title className="dm-sans dm-sans__xxx dm-sans__bold dm-sans__grey mb-4">Quote Asset</Title>
      <div className="mb-2">
        <Title className="dm-sans dm-sans__xx dm-sans__bold d-inline mr-2">Name:</Title>
        <span className="dm-sans dm-sans__x">{quoteAsset?.name ?? 'Unknown'}</span>
      </div>
      <div className="mb-2">
        <Title className="dm-sans dm-sans__xx dm-sans__bold d-inline mr-2">Ticker:</Title>
        <span className="dm-sans dm-sans__x">{quoteAsset?.ticker ?? 'Unknown'}</span>
      </div>
      <div className="mb-2">
        <Title className="dm-sans dm-sans__xx dm-sans__bold d-inline mr-2 text-no-wrap">Asset hash:</Title>
        <Text className="dm-sans dm-sans__x" copyable>
          {quoteAsset?.asset_id ?? 'Unknown'}
        </Text>
      </div>
      <div className="mb-2">
        <Title className="dm-sans dm-sans__xx dm-sans__bold d-inline mr-2">Precision: </Title>
        <span className="dm-sans dm-sans__x">{quoteAsset?.precision ?? 'Unknown'}</span>
      </div>
    </Modal>
  );
};
