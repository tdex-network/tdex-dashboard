import './marketIcons.less';
import classNames from 'classnames';
import React from 'react';

import { CurrencyIcon } from '../CurrencyIcon';

interface MarketIconsProps {
  baseAsset: string;
  quoteAsset: string;
  size: 'big' | 'medium';
  [x: string]: any;
}

export const MarketIcons = ({ baseAsset, quoteAsset, size, ...props }: MarketIconsProps): JSX.Element => {
  return (
    <span
      className={classNames({ 'market-icons': size === 'medium', 'market-icons__big': size === 'big' })}
      {...props}
    >
      <CurrencyIcon currency={baseAsset} size={size === 'big' ? 45 : 24} />
      <span className="quote-icon">
        <CurrencyIcon currency={quoteAsset} size={size === 'big' ? 45 : 24} />
        <CurrencyIcon currency={quoteAsset} size={size === 'big' ? 45 : 24} className="duplicate" />
      </span>
    </span>
  );
};
