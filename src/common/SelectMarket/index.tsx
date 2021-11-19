import { Select } from 'antd';
import React from 'react';

import type { Asset } from '../../domain/asset';
import { CurrencyIcon } from '../CurrencyIcon';

const { Option } = Select;

interface SelectMarketProps {
  selectedMarket: { baseAsset?: Asset; quoteAsset?: Asset };
  setSelectedMarket: (m: { baseAsset?: Asset; quoteAsset?: Asset }) => void;
  marketList: [Asset?, Asset?][];
}

export const SelectMarket = ({
  selectedMarket,
  setSelectedMarket,
  marketList,
}: SelectMarketProps): JSX.Element => {
  const selectMarketsList = marketList.map(([baseAsset, quoteAsset]) =>
    JSON.stringify({ baseAssetTicker: baseAsset?.ticker, quoteAssetTicker: quoteAsset?.ticker })
  );
  const selectedMarketStr = JSON.stringify({
    baseAssetTicker: selectedMarket.baseAsset?.ticker,
    quoteAssetTicker: selectedMarket.quoteAsset?.ticker,
  });

  const handleChangeMarket = (selectedMarketStr: string) => {
    const selectedMarketStrParsed = JSON.parse(selectedMarketStr);
    const selectedAssetMarket = marketList.find(([baseAsset, quoteAsset]) => {
      return (
        baseAsset?.ticker === selectedMarketStrParsed.baseAssetTicker &&
        quoteAsset?.ticker === selectedMarketStrParsed.quoteAssetTicker
      );
    });
    setSelectedMarket({ baseAsset: selectedAssetMarket?.[0], quoteAsset: selectedAssetMarket?.[1] });
  };

  return (
    <Select value={selectedMarketStr} onChange={handleChangeMarket} className="w-100 mb-8">
      {selectMarketsList?.map((marketStr, index) => {
        const market = JSON.parse(marketStr) as { baseAssetTicker: string; quoteAssetTicker: string };
        return (
          <Option value={marketStr} key={index}>
            <span className="market-icons-translate">
              <CurrencyIcon currency={market?.baseAssetTicker} />
              <CurrencyIcon currency={market?.quoteAssetTicker} />
            </span>
            <span className="select-option-text">
              <span>
                {market?.baseAssetTicker} / {market?.quoteAssetTicker}
              </span>
              <span>Custom name</span>
            </span>
          </Option>
        );
      })}
    </Select>
  );
};
