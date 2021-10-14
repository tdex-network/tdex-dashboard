import { useHistory } from 'react-router-dom';

import type { Market } from '../../../api-spec/generated/js/types_pb';
import { MARKET_ROUTE } from '../../../routes/constants';
import { useListMarketsQuery } from '../operator.api';

export const ListMarkets = (): JSX.Element => {
  const { data: listMarkets, error: listMarketsError } = useListMarketsQuery();
  const history = useHistory();

  const handleClickMarketDetails = (market?: Market.AsObject) => {
    if (!market) return;
    history.push(MARKET_ROUTE, market);
  };

  return (
    <>
      {listMarkets?.marketsList.length ? (
        listMarkets?.marketsList.map((marketInfo, index) => {
          const { market, tradable } = marketInfo;
          return (
            <button
              className="btn btn-ghost group hover:bg-opacity-10 h-auto p-0 rounded-2xl mb-4"
              onClick={() => handleClickMarketDetails(market)}
              key={index}
            >
              <div className="card bordered">
                <div className="card-body">
                  <div>
                    <p>
                      <span className="font-bold">Market Base Asset: </span>
                      {market?.baseAsset}
                    </p>
                    <p>
                      <span className="font-bold">Market Quote Asset: </span>
                      {market?.quoteAsset}
                    </p>
                    <p>
                      <span className="font-bold">Tradable: </span>
                      {tradable ? 'Open' : 'Close'}
                    </p>
                  </div>
                </div>
              </div>
            </button>
          );
        })
      ) : (
        <p className="mt-2">No market found</p>
      )}
      {listMarketsError && <p>{listMarketsError}</p>}
    </>
  );
};
