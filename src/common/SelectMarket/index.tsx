import { Select } from 'antd';

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
    JSON.stringify({
      baseAssetTicker: baseAsset?.ticker,
      baseAssetId: baseAsset?.asset_id,
      quoteAssetTicker: quoteAsset?.ticker,
      quoteAssetId: quoteAsset?.asset_id,
    })
  );
  const selectedMarketStr = JSON.stringify({
    baseAssetTicker: selectedMarket.baseAsset?.ticker,
    baseAssetId: selectedMarket.baseAsset?.asset_id,
    quoteAssetTicker: selectedMarket.quoteAsset?.ticker,
    quoteAssetId: selectedMarket.quoteAsset?.asset_id,
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
        const market = JSON.parse(marketStr) as {
          baseAssetTicker: string;
          baseAssetId: string;
          quoteAssetTicker: string;
          quoteAssetId: string;
        };
        return (
          <Option value={marketStr} key={index}>
            <span className="market-icons-translate">
              <CurrencyIcon assetId={market?.baseAssetId} />
              <CurrencyIcon assetId={market?.quoteAssetId} />
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
