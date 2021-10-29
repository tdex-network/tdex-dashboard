import BjdeIcon from '../../assets/images/coins/blockstream.svg';
import BtseIcon from '../../assets/images/coins/btse.svg';
import CurrencyPlaceholderIcon from '../../assets/images/coins/currency-placeholder.svg';
import LbtcIcon from '../../assets/images/coins/lbtc.svg';
import LcadIcon from '../../assets/images/coins/lcad.svg';
import UsdtIcon from '../../assets/images/coins/usdt.svg';
import { BJDE_TICKER, BTSE_TICKER, LBTC_TICKER, LCAD_TICKER, USDT_TICKER } from '../../utils';

export const CurrencyIcon = ({ currency, ...props }: any): any => {
  switch (currency) {
    case LBTC_TICKER:
      return <img src={LbtcIcon} {...props} alt="L-BTC" />;
    case USDT_TICKER:
      return <img src={UsdtIcon} {...props} alt="USDt" />;
    case LCAD_TICKER:
      return <img src={LcadIcon} {...props} alt="LCAD" />;
    case BTSE_TICKER:
      return <img src={BtseIcon} {...props} alt="BTSE" />;
    case BJDE_TICKER:
      return <img src={BjdeIcon} {...props} alt="Blockstream Jade" />;
    default:
      return <img src={CurrencyPlaceholderIcon} {...props} alt="placeholder" />;
  }
};
