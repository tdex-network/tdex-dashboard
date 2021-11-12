import './marketIcons.less';
import classNames from 'classnames';
import React from 'react';

import { CurrencyIcon } from '../CurrencyIcon';

interface MarketIconsProps {
  baseAssetTicker: string;
  quoteAssetTicker: string;
  size: 'big' | 'medium';
  [x: string]: any;
}

export const MarketIcons = ({
  baseAssetTicker,
  quoteAssetTicker,
  size,
  ...props
}: MarketIconsProps): JSX.Element => {
  return (
    <span
      className={classNames({ 'market-icons': size === 'medium', 'market-icons__big': size === 'big' })}
      {...props}
    >
      <CurrencyIcon currency={baseAssetTicker} size={size === 'big' ? 45 : 24} />
      <span className="quote-icon">
        <CurrencyIcon currency={quoteAssetTicker} size={size === 'big' ? 45 : 24} />
        <CurrencyIcon currency={quoteAssetTicker} size={size === 'big' ? 45 : 24} className="duplicate" />
      </span>
    </span>
  );
};
