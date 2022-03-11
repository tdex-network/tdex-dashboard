import './listMarkets.less';

import { useEffect } from 'react';

import { useTypedDispatch, useTypedSelector } from '../../../../app/store';
import { getAllAssetIdsFromMarkets } from '../../../../utils';
import { liquidApi } from '../../../liquid.api';
import { setAsset } from '../../../settings/settingsSlice';
import { useGetInfoQuery, useListMarketsQuery } from '../../operator.api';

import { MarketListEmpty } from './MarketListEmpty';
import { MarketListItem } from './MarketListItem';

export const ListMarkets = (): JSX.Element => {
  const dispatch = useTypedDispatch();
  const { data: daemonInfo, isFetching: daemonInfoIsFetching } = useGetInfoQuery();
  const { data: listMarkets, error: listMarketsError } = useListMarketsQuery();
  const assetRegistry = useTypedSelector(({ settings }) => settings.assets);
  const network = useTypedSelector(({ settings }) => settings.network);

  // Add to store assets in markets
  useEffect(() => {
    (async () => {
      if (network === daemonInfo?.network && !daemonInfoIsFetching) {
        try {
          const assets = getAllAssetIdsFromMarkets(listMarkets?.marketsList || []);
          for (const asset of assets) {
            if (!assetRegistry[network].map((a) => a.asset_id).includes(asset)) {
              const assetData = await dispatch(liquidApi.endpoints.getAssetData.initiate(asset)).unwrap();
              dispatch(setAsset(assetData));
            }
          }
        } catch (err) {
          console.error('Error when adding to store assets in markets', err);
        }
      }
    })();
  }, [assetRegistry, daemonInfo?.network, daemonInfoIsFetching, dispatch, listMarkets?.marketsList, network]);

  return (
    <div id="list-markets">
      {listMarkets?.marketsList.length && network === daemonInfo?.network ? (
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
