import './listMarkets.less';

import { useListMarketsQuery } from '../../operator.api';

import { MarketListEmpty } from './MarketListEmpty';
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
        <MarketListEmpty />
      )}
      {listMarketsError && <p className="error mt-2">{listMarketsError}</p>}
    </div>
  );
};
