import './listMarkets.less';

import { useEffect } from 'react';

import { useTypedDispatch, useTypedSelector } from '../../../../app/store';
import { getAllAssetIdsFromMarkets, getAssetDataFromRegistry } from '../../../../utils';
import { liquidApi } from '../../../liquid.api';
import { setAsset } from '../../../settings/settingsSlice';
import { useGetInfoQuery } from '../../../wallet/wallet.api';
import { useListMarketsQuery } from '../../operator.api';

import { MarketListEmpty } from './MarketListEmpty';
import { MarketListItem } from './MarketListItem';

export const ListMarkets = (): JSX.Element => {
  const dispatch = useTypedDispatch();
  const { data: daemonInfo, isFetching: daemonInfoIsFetching } = useGetInfoQuery();
  const { data: marketList, error: listMarketsError } = useListMarketsQuery();
  const assetRegistry = useTypedSelector(({ settings }) => settings.assets);
  const lbtcUnit = useTypedSelector(({ settings }) => settings.lbtcUnit);
  const network = useTypedSelector(({ settings }) => settings.network);

  const daemonInfoNetwork = daemonInfo?.network === 'mainnet' ? 'liquid' : daemonInfo?.network;

  // Add to store assets in markets
  useEffect(() => {
    (async () => {
      if (network === daemonInfoNetwork && !daemonInfoIsFetching) {
        try {
          const assets = getAllAssetIdsFromMarkets(marketList || []);
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
  }, [assetRegistry, daemonInfoIsFetching, daemonInfoNetwork, dispatch, marketList, network]);

  return (
    <div id="list-markets">
      {marketList?.length && network === daemonInfoNetwork ? (
        marketList?.map((marketInfo, index) => {
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
