import './marketIcons.less';
import React from 'react';

import { CurrencyIcon } from '../CurrencyIcon';

interface MarketIconsProps {
  baseAsset: string;
  quoteAsset: string;
  [x: string]: any;
}

export const MarketIcons = ({ baseAsset, quoteAsset, ...props }: MarketIconsProps): JSX.Element => {
  return (
    <span className="market-icons" {...props}>
      <CurrencyIcon currency={baseAsset} />
      <span className="quote-icon">
        <CurrencyIcon currency={quoteAsset} />
        <CurrencyIcon currency={quoteAsset} className="duplicate" />
      </span>
    </span>
  );
};
