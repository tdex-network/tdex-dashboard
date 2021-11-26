import './marketIcons.less';
import classNames from 'classnames';
import React from 'react';

import { CurrencyIcon } from '../CurrencyIcon';

interface MarketIconsProps {
  baseAssetTicker: string;
  quoteAssetTicker: string;
  size: 'big' | 'medium' | 'small';
  [x: string]: any;
}

export const MarketIcons = ({
  baseAssetTicker,
  quoteAssetTicker,
  size,
  ...props
}: MarketIconsProps): JSX.Element => {
  let fontSize = 16;
  if (size === 'big') {
    fontSize = 45;
  } else if (size === 'medium') {
    fontSize = 24;
  } else if (size === 'small') {
    fontSize = 16;
  }

  return (
    <span
      className={classNames({
        'market-icons': size === 'medium',
        'market-icons__big': size === 'big',
        'market-icons__small': size === 'small',
      })}
      {...props}
    >
      <CurrencyIcon currency={baseAssetTicker} size={fontSize} />
      <span className="quote-icon">
        <CurrencyIcon currency={quoteAssetTicker} size={fontSize} />
        <CurrencyIcon currency={quoteAssetTicker} size={fontSize} className="duplicate" />
      </span>
    </span>
  );
};
