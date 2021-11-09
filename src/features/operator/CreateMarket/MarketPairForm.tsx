import { Button, Col, Row, notification, Select } from 'antd';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

import { CurrencyIcon } from '../../../common/CurrencyIcon';
import type { Asset } from '../../../domain/asset';
import { featuredAssets, LBTC_ASSET } from '../../../utils';
import { useNewMarketMutation } from '../operator.api';

import { AddCustomToken } from './AddCustomToken';

const { Option } = Select;

interface MarketPairFormProps {
  setBaseAsset: (asset: Asset) => void;
  setQuoteAsset: (asset: Asset) => void;
  baseAsset: Asset;
  quoteAsset: Asset;
  setStep: (step: number) => void;
}

export const MarketPairForm = ({
  setBaseAsset,
  setQuoteAsset,
  baseAsset,
  quoteAsset,
  setStep,
}: MarketPairFormProps): JSX.Element => {
  const [newMarket] = useNewMarketMutation();
  const [showGenericAssetForm, setShowGenericAssetForm] = useState<boolean>(false);
  const [customAssets, setCustomAssets] = useState<Asset[]>([]);
  const [activeSelectComponent, setActiveSelectComponent] = useState<'base' | 'quote'>('base');
  const selectAssetList = featuredAssets
    .concat(customAssets)
    .concat([{ ticker: 'Generic Asset', asset_id: '', name: '', precision: 8 }]);

  useEffect(() => {
    setActiveSelectComponent('base');
  }, [baseAsset]);

  useEffect(() => {
    setActiveSelectComponent('quote');
  }, [quoteAsset]);

  const handleChangeBaseAsset = (ticker: string) => {
    if (ticker === 'Generic Asset') {
      setShowGenericAssetForm(true);
    } else {
      setShowGenericAssetForm(false);
    }
    setBaseAsset(selectAssetList.find((a) => a.ticker === ticker) || LBTC_ASSET);
  };

  const handleChangeQuoteAsset = (ticker: string) => {
    if (ticker === 'Generic Asset') {
      setShowGenericAssetForm(true);
    } else {
      setShowGenericAssetForm(false);
    }
    setQuoteAsset(selectAssetList.find((a) => a.ticker === ticker) || LBTC_ASSET);
  };

  const createMarket = async () => {
    try {
      if (baseAsset.asset_id === quoteAsset.asset_id) {
        notification.error({ message: 'Cannot create a market with both same assets' });
        return;
      }
      const res = await newMarket({ baseAsset: baseAsset.asset_id, quoteAsset: quoteAsset.asset_id });
      // @ts-ignore
      if (res?.error) throw new Error(res?.error);
      setStep(1);
      notification.success({ message: 'New market created successfully' });
    } catch (err) {
      // @ts-ignore
      notification.error({ message: err.message });
    }
  };

  return (
    <div id="market-pair-container">
      <Row gutter={{ xs: 4, sm: 10, md: 16 }} className={classNames({ 'mb-4': !showGenericAssetForm })}>
        <Col span={12}>
          <Select value={baseAsset.ticker} onChange={handleChangeBaseAsset}>
            {selectAssetList.map(({ ticker }: Asset) => (
              <Option value={ticker} key={ticker}>
                <CurrencyIcon currency={ticker} />
                <span>{ticker}</span>
              </Option>
            ))}
          </Select>
        </Col>
        <Col span={12}>
          <Select value={quoteAsset.ticker} onChange={handleChangeQuoteAsset}>
            {selectAssetList.map(({ ticker }: Asset) => (
              <Option value={ticker} key={ticker}>
                <CurrencyIcon currency={ticker} />
                <span>{ticker}</span>
              </Option>
            ))}
          </Select>
        </Col>
      </Row>
      <AddCustomToken
        setCustomAssets={setCustomAssets}
        setBaseAsset={setBaseAsset}
        setQuoteAsset={setQuoteAsset}
        setShowGenericAssetForm={setShowGenericAssetForm}
        activeSelectComponent={activeSelectComponent}
        className={classNames({ 'd-block': showGenericAssetForm, 'd-none': !showGenericAssetForm })}
      />
      <Button onClick={createMarket} className="w-100 mb-4" disabled={showGenericAssetForm}>
        CONFIRM PAIR
      </Button>
    </div>
  );
};
