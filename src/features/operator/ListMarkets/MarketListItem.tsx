import { useHistory } from 'react-router-dom';

import type { MarketInfo } from '../../../api-spec/generated/js/operator_pb';
import type { Market } from '../../../api-spec/generated/js/types_pb';
import { MARKET_ROUTE } from '../../../routes/constants';
import { useGetAssetsDataQuery } from '../../liquid.api';

interface MarketListItemProps {
  marketInfo: MarketInfo.AsObject;
}
export const MarketListItem = ({ marketInfo }: MarketListItemProps): JSX.Element => {
  const { data: assetsData, error: getAssetsDataError } = useGetAssetsDataQuery({
    baseAsset: marketInfo.market?.baseAsset || '',
    quoteAsset: marketInfo.market?.quoteAsset || '',
  });
  const history = useHistory();

  const handleClickMarketDetails = (market?: Market.AsObject) => {
    if (!market) return;
    history.push(MARKET_ROUTE, market);
  };

  const { market, tradable } = marketInfo;
  const baseAssetTicker = getAssetsDataError ? market?.baseAsset : assetsData?.baseAsset.ticker || 'Unknown';
  const quoteAssetTicker = getAssetsDataError
    ? market?.quoteAsset
    : assetsData?.quoteAsset.ticker || 'Unknown';

  return (
    <button
      className="btn btn-ghost group hover:bg-opacity-10  p-0 rounded-2xl mb-4 w-full"
      onClick={() => handleClickMarketDetails(market)}
    >
      <div className="border rounded-2xl w-full h-full flex items-center">
        <div className="justify-start	flex flex-1 ml-4">{`${baseAssetTicker} / ${quoteAssetTicker}`}</div>
        <div className="flex-1">{tradable ? 'Open' : 'Closed'}</div>
      </div>
    </button>
  );
};
