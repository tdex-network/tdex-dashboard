import { Select } from 'antd';
import React from 'react';

import type { Asset } from '../../domain/asset';
import { CurrencyIcon } from '../CurrencyIcon';

const { Option } = Select;

interface SelectMarketProps {
  // Because Select can only get string as value
  // JSON.stringify({ baseAssetTicker: baseAsset?.ticker, quoteAssetTicker: quoteAsset?.ticker })
  selectedMarket: string;
  setSelectedMarket: (m: string) => void;
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

  const handleChangeMarket = (market: string) => setSelectedMarket(market);

  return (
    <Select value={selectedMarket} onChange={handleChangeMarket} className="w-100 mb-8">
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
