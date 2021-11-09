import Icon from '@ant-design/icons';

import { ReactComponent as BjdeIcon } from '../../assets/images/coins/blockstream.svg';
import { ReactComponent as BtseIcon } from '../../assets/images/coins/btse.svg';
import { ReactComponent as GenericIcon } from '../../assets/images/coins/generic.svg';
import { ReactComponent as LbtcIcon } from '../../assets/images/coins/lbtc.svg';
import { ReactComponent as LcadIcon } from '../../assets/images/coins/lcad.svg';
import { ReactComponent as UsdtIcon } from '../../assets/images/coins/usdt.svg';
import { BJDE_TICKER, BTSE_TICKER, LBTC_TICKER, LCAD_TICKER, USDT_TICKER } from '../../utils';

export const CurrencyIcon = ({ currency, ...props }: any): JSX.Element => {
  switch (currency) {
    case LBTC_TICKER:
      return <Icon component={LbtcIcon} {...props} alt="L-BTC" className="currency-icon" />;
    case USDT_TICKER:
      return <Icon component={UsdtIcon} {...props} alt="USDt" className="currency-icon" />;
    case LCAD_TICKER:
      return <Icon component={LcadIcon} {...props} alt="LCAD" className="currency-icon" />;
    case BTSE_TICKER:
      return <Icon component={BtseIcon} {...props} alt="BTSE" className="currency-icon" />;
    case BJDE_TICKER:
      return <Icon component={BjdeIcon} {...props} alt="Blockstream Jade" className="currency-icon" />;
    default:
      return <Icon component={GenericIcon} {...props} alt="placeholder" className="currency-icon" />;
  }
};
