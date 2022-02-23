import './listMarkets.less';

import { useEffect } from 'react';

import { useTypedDispatch, useTypedSelector } from '../../../../app/store';
import { getAllAssetIdsFromMarkets } from '../../../../utils';
import { liquidApi } from '../../../liquid.api';
import { setAsset } from '../../../settings/settingsSlice';
import { useListMarketsQuery } from '../../operator.api';

import { MarketListEmpty } from './MarketListEmpty';
import { MarketListItem } from './MarketListItem';

export const ListMarkets = (): JSX.Element => {
  const dispatch = useTypedDispatch();
  const { data: listMarkets, error: listMarketsError } = useListMarketsQuery();
  const assetRegistry = useTypedSelector(({ settings }) => settings.assets);

  // Add to store assets in markets
  useEffect(() => {
    (async () => {
      try {
        const assets = getAllAssetIdsFromMarkets(listMarkets?.marketsList || []);
        for (const hash of assets) {
          if (!assetRegistry.map((a) => a.asset_id).includes(hash)) {
            const assetData = await dispatch(liquidApi.endpoints.getAssetData.initiate(hash)).unwrap();
            dispatch(setAsset(assetData));
          }
        }
      } catch (err) {
        console.error('Add to store assets in markets error', err);
      }
    })();
  }, [assetRegistry, dispatch, listMarkets?.marketsList]);

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
