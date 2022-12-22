import './marketIcons.less';
import classNames from 'classnames';

import type { Asset } from '../../domain/asset';
import { CurrencyIcon } from '../CurrencyIcon';

interface MarketIconsProps {
  baseAsset: Asset;
  quoteAsset: Asset;
  size: 'big' | 'medium' | 'small';
  [x: string]: any;
  hasShadow?: boolean;
}

export const MarketIcons = ({
  baseAsset,
  quoteAsset,
  size,
  hasShadow = true,
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
      <CurrencyIcon assetId={baseAsset.asset_id} size={fontSize} />
      <span className="quote-icon">
        <CurrencyIcon assetId={quoteAsset.asset_id} size={fontSize} />
        {hasShadow ? <CurrencyIcon assetId={quoteAsset.asset_id} size={fontSize} /> : null}
      </span>
    </span>
  );
};
