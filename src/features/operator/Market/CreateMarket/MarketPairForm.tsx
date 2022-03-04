import { Button, Col, Row, notification, Select } from 'antd';
import classNames from 'classnames';
import type { NetworkString } from 'ldk';
import React, { useEffect, useState } from 'react';

import { useTypedSelector } from '../../../../app/store';
import { CurrencyIcon } from '../../../../common/CurrencyIcon';
import type { Asset } from '../../../../domain/asset';
import { LBTC_ASSET } from '../../../../utils';
import { useNewMarketMutation } from '../../operator.api';

import { AddCustomToken } from './AddCustomToken';

const { Option } = Select;

interface MarketPairFormProps {
  setBaseAsset: (asset: Asset) => void;
  setQuoteAsset: (asset: Asset) => void;
  baseAsset: Asset;
  quoteAsset: Asset;
  incrementStep: () => void;
}

export const MarketPairForm = ({
  setBaseAsset,
  setQuoteAsset,
  baseAsset,
  quoteAsset,
  incrementStep,
}: MarketPairFormProps): JSX.Element => {
  const [newMarket] = useNewMarketMutation();
  const [showGenericAssetForm, setShowGenericAssetForm] = useState<boolean>(false);
  const [activeSelectComponent, setActiveSelectComponent] = useState<'base' | 'quote'>('base');
  const { assets, network } = useTypedSelector(({ settings }) => settings);
  const selectAssetList = assets[network].concat([
    { ticker: 'Generic Asset', asset_id: '', name: '', precision: 8 },
  ]);

  useEffect(() => {
    setActiveSelectComponent('base');
  }, [baseAsset]);

  useEffect(() => {
    setActiveSelectComponent('quote');
  }, [quoteAsset]);

  const handleChangeBaseAsset = (ticker: string, network: NetworkString) => {
    if (ticker === 'Generic Asset') {
      setShowGenericAssetForm(true);
    } else {
      setShowGenericAssetForm(false);
    }
    setBaseAsset(selectAssetList.find((a) => a.ticker === ticker) || LBTC_ASSET[network]);
  };

  const handleChangeQuoteAsset = (ticker: string, network: NetworkString) => {
    if (ticker === 'Generic Asset') {
      setShowGenericAssetForm(true);
    } else {
      setShowGenericAssetForm(false);
    }
    setQuoteAsset(selectAssetList.find((a) => a.ticker === ticker) || LBTC_ASSET[network]);
  };

  const createMarket = async () => {
    try {
      if (baseAsset.asset_id === quoteAsset.asset_id) {
        notification.error({ message: 'Cannot create a market with both same assets' });
        return;
      }
      console.log('baseAsset', baseAsset);
      console.log('quoteAsset', quoteAsset);
      const res = await newMarket({ baseAsset: baseAsset.asset_id, quoteAsset: quoteAsset.asset_id });
      // @ts-ignore
      if (res?.error) throw new Error(res?.error);
      incrementStep();
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
          <Select value={baseAsset.ticker} onChange={(ticker) => handleChangeBaseAsset(ticker, network)}>
            {selectAssetList.map(({ ticker }: Asset) => (
              <Option value={ticker} key={ticker}>
                <CurrencyIcon currency={ticker} />
                <span className="select-option-text">{ticker}</span>
              </Option>
            ))}
          </Select>
        </Col>
        <Col span={12}>
          <Select value={quoteAsset.ticker} onChange={(ticker) => handleChangeQuoteAsset(ticker, network)}>
            {selectAssetList.map(({ ticker }: Asset) => (
              <Option value={ticker} key={ticker}>
                <CurrencyIcon currency={ticker} />
                <span className="select-option-text">{ticker}</span>
              </Option>
            ))}
          </Select>
        </Col>
      </Row>
      <AddCustomToken
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
