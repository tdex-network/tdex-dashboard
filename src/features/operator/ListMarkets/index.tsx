import './list-markets.less';
import { useListMarketsQuery } from '../operator.api';

import { MarketListItem } from './MarketListItem';

export const ListMarkets = (): JSX.Element => {
  const { data: listMarkets, error: listMarketsError } = useListMarketsQuery();

  return (
    <div id="list-markets">
      {listMarkets?.marketsList.length ? (
        listMarkets?.marketsList.map((marketInfo, index) => (
          <MarketListItem marketInfo={marketInfo} key={index} />
        ))
      ) : (
        <p className="mt-2">No market has been found</p>
      )}
      {listMarketsError && <p>{listMarketsError}</p>}
    </div>
  );
};
