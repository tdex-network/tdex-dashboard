import './listMarkets.less';

import { useEffect } from 'react';

import { useTypedDispatch, useTypedSelector } from '../../../../app/store';
import { getAllAssetIdsFromMarkets, getAssetDataFromRegistry } from '../../../../utils';
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
  const lbtcUnit = useTypedSelector(({ settings }) => settings.lbtcUnit);
  const network = useTypedSelector(({ settings }) => settings.network);

  // Add to store assets in markets
  useEffect(() => {
    (async () => {
      if (network === daemonInfo?.network && !daemonInfoIsFetching) {
        try {
          const assets = getAllAssetIdsFromMarkets(listMarkets?.markets || []);
          for (const asset of assets) {
            if (!assetRegistry[network].map((a) => a.asset_id).includes(asset)) {
              const assetData = await dispatch(liquidApi.endpoints.getAssetData.initiate(asset)).unwrap();
              dispatch(setAsset(assetData));
            }
          }
          // Add fixed assets to registry
          if (
            daemonInfo?.fixedBaseAsset &&
            !assetRegistry[network].map((a) => a.asset_id).includes(daemonInfo?.fixedBaseAsset)
          ) {
            const assetData = await dispatch(
              liquidApi.endpoints.getAssetData.initiate(daemonInfo?.fixedBaseAsset)
            ).unwrap();
            dispatch(setAsset(assetData));
          }
          if (
            daemonInfo?.fixedQuoteAsset &&
            !assetRegistry[network].map((a) => a.asset_id).includes(daemonInfo?.fixedQuoteAsset)
          ) {
            const assetData = await dispatch(
              liquidApi.endpoints.getAssetData.initiate(daemonInfo?.fixedQuoteAsset)
            ).unwrap();
            dispatch(setAsset(assetData));
          }
        } catch (err) {
          console.error('Error when adding to store assets in markets', err);
        }
      }
    })();
  }, [
    assetRegistry,
    daemonInfo?.fixedBaseAsset,
    daemonInfo?.fixedQuoteAsset,
    daemonInfo?.network,
    daemonInfoIsFetching,
    dispatch,
    listMarkets?.markets,
    network,
  ]);

  return (
    <div id="list-markets">
      {listMarkets?.markets.length && network === daemonInfo?.network ? (
        listMarkets?.markets.map((marketInfo, index) => {
          const baseAsset = getAssetDataFromRegistry(
            marketInfo.market?.baseAsset || '',
            assetRegistry[network],
            lbtcUnit
          );
          const quoteAsset = getAssetDataFromRegistry(
            marketInfo.market?.quoteAsset || '',
            assetRegistry[network],
            lbtcUnit
          );
          return baseAsset && quoteAsset ? (
            <MarketListItem
              baseAsset={baseAsset}
              quoteAsset={quoteAsset}
              isTradable={marketInfo.tradable}
              key={index}
            />
          ) : null;
        })
      ) : (
        <MarketListEmpty />
      )}
      {listMarketsError && <p className="error mt-2">{listMarketsError.toString()}</p>}
    </div>
  );
};
