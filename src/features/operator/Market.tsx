import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import type { Market as MarketType } from '../../api-spec/generated/js/types_pb';
import { MARKETS_ROUTE } from '../../routes/constants';

import { ClaimMarketDepositsForm } from './ClaimMarketDepositsForm';
import { MarketSettings } from './MarketSettings';
import { UpdateMarketFixedFeeForm } from './UpdateMarketFixedFeeForm';
import { UpdateMarketPercentageFeeForm } from './UpdateMarketPercentageFeeForm';
import { UpdateMarketPriceForm } from './UpdateMarketPriceForm';
import { UpdateMarketStrategyForm } from './UpdateMarketStrategyForm';
import { WithdrawMarketForm } from './WithdrawMarketForm';
import {
  useCloseMarketMutation,
  useDropMarketMutation,
  useListMarketsQuery,
  useOpenMarketMutation,
} from './operator.api';

export const Market = (): JSX.Element => {
  const { data: listMarkets, error: listMarketsError } = useListMarketsQuery();
  const [openMarket, { error: openMarketError }] = useOpenMarketMutation();
  const [closeMarket, { error: closeMarketError }] = useCloseMarketMutation();
  const [dropMarket, { error: dropMarketError }] = useDropMarketMutation();
  const { state } = useLocation<MarketType.AsObject>();
  const history = useHistory();
  const marketInfo = listMarkets?.marketsList.find(
    ({ market }) => market?.baseAsset === state.baseAsset && market?.quoteAsset === state.quoteAsset
  );

  const handleClickOpenMarket = (market?: MarketType.AsObject) => {
    if (!market) return;
    openMarket({ baseAsset: market.baseAsset, quoteAsset: market.quoteAsset });
  };

  const handleClickCloseMarket = (market?: MarketType.AsObject) => {
    if (!market) return;
    closeMarket({ baseAsset: market.baseAsset, quoteAsset: market.quoteAsset });
  };

  const handleClickDropMarket = (market?: MarketType.AsObject) => {
    if (!market) return;
    dropMarket({ baseAsset: market.baseAsset, quoteAsset: market.quoteAsset });
    history.push(MARKETS_ROUTE);
  };

  return (
    <>
      {marketInfo ? (
        <div className="card bordered mb-8">
          <div className="card-body">
            <div className="mb-4">
              <div className="card-actions justify-end">
                <>
                  <label htmlFor="withdraw-market-modal" className="btn btn-accent modal-button">
                    Withdraw
                  </label>
                  <input type="checkbox" id="withdraw-market-modal" className="modal-toggle" />
                  <div className="modal">
                    <div className="modal-box">
                      <div className="modal-action">
                        <label htmlFor="withdraw-market-modal" className="btn btn-accent">
                          Close
                        </label>
                      </div>
                      <WithdrawMarketForm market={marketInfo?.market} />
                    </div>
                  </div>
                </>
                <>
                  <label htmlFor="deposit-market-modal" className="btn btn-accent modal-button">
                    Deposit
                  </label>
                  <input type="checkbox" id="deposit-market-modal" className="modal-toggle" />
                  <div className="modal">
                    <div className="modal-box">
                      <div className="modal-action">
                        <label htmlFor="deposit-market-modal" className="btn btn-accent">
                          Close
                        </label>
                      </div>
                      <ClaimMarketDepositsForm market={marketInfo?.market} />
                    </div>
                  </div>
                </>
                <>
                  <label htmlFor="settings-market-modal" className="btn btn-accent modal-button">
                    Settings
                  </label>
                  <input type="checkbox" id="settings-market-modal" className="modal-toggle" />
                  <div className="modal">
                    <div className="modal-box">
                      <div className="modal-action">
                        <label htmlFor="settings-market-modal" className="btn btn-accent">
                          Close
                        </label>
                      </div>
                      <MarketSettings market={marketInfo?.market} />
                    </div>
                  </div>
                </>
              </div>
              <p>
                <span className="font-bold">Market Base Asset: </span>
                {marketInfo?.market?.baseAsset}
              </p>
              <p>
                <span className="font-bold">Market Quote Asset: </span>
                {marketInfo?.market?.quoteAsset}
              </p>
              <p>
                <span className="font-bold">Fee Basis Point: </span>
                {marketInfo?.fee?.basisPoint}
              </p>
              <p>
                <span className="font-bold">Base Fee: </span>
                {marketInfo?.fee?.fixed?.baseFee}
              </p>
              <p>
                <span className="font-bold">Quote Fee: </span>
                {marketInfo?.fee?.fixed?.quoteFee}
              </p>
              <p>
                <span className="font-bold">Tradable: </span>
                {String(marketInfo?.tradable)}
              </p>
              <p>
                <span className="font-bold">Strategy Type: </span>
                {marketInfo?.strategyType}
              </p>
              <p>
                <span className="font-bold">Account Index: </span>
                {marketInfo?.accountIndex}
              </p>
              <p>
                <span className="font-bold">Base Price: </span>
                {marketInfo?.price?.basePrice}
              </p>
              <p>
                <span className="font-bold">Quote Price: </span>
                {marketInfo?.price?.quotePrice}
              </p>
              <p>
                <span className="font-bold">Balance Base Amount: </span>
                {marketInfo?.balance?.baseAmount}
              </p>
              <p>
                <span className="font-bold">Balance Quote Amount: </span>
                {marketInfo?.balance?.quoteAmount}
              </p>
            </div>
            <div className="card-actions">
              <button className="btn btn-accent" onClick={() => handleClickOpenMarket(marketInfo?.market)}>
                Open Trading
              </button>
              <button className="btn btn-accent" onClick={() => handleClickCloseMarket(marketInfo?.market)}>
                Close Trading
              </button>
              <button className="btn btn-accent" onClick={() => handleClickDropMarket(marketInfo?.market)}>
                Drop Market
              </button>
              <>
                <label htmlFor="update-market-strategy-modal" className="btn btn-accent modal-button">
                  Update Market Strategy
                </label>
                <input type="checkbox" id="update-market-strategy-modal" className="modal-toggle" />
                <div className="modal">
                  <div className="modal-box">
                    <div className="modal-action">
                      <label htmlFor="update-market-strategy-modal" className="btn btn-accent">
                        Close
                      </label>
                    </div>
                    <UpdateMarketStrategyForm market={marketInfo?.market} />
                  </div>
                </div>
              </>
              <>
                <label htmlFor="update-market-percentage-fee-modal" className="btn btn-accent modal-button">
                  Update Market Percentage Fee
                </label>
                <input type="checkbox" id="update-market-percentage-fee-modal" className="modal-toggle" />
                <div className="modal">
                  <div className="modal-box">
                    <div className="modal-action">
                      <label htmlFor="update-market-percentage-fee-modal" className="btn btn-accent">
                        Close
                      </label>
                    </div>
                    <UpdateMarketPercentageFeeForm market={marketInfo?.market} />
                  </div>
                </div>
              </>
              <>
                <label htmlFor="update-market-fixed-fee-modal" className="btn btn-accent modal-button">
                  Update Market Fixed Fee
                </label>
                <input type="checkbox" id="update-market-fixed-fee-modal" className="modal-toggle" />
                <div className="modal">
                  <div className="modal-box">
                    <div className="modal-action">
                      <label htmlFor="update-market-fixed-fee-modal" className="btn btn-accent">
                        Close
                      </label>
                    </div>
                    <UpdateMarketFixedFeeForm market={marketInfo?.market} />
                  </div>
                </div>
              </>
              <>
                <label htmlFor="update-market-price-modal" className="btn btn-accent modal-button">
                  Update Market Price
                </label>
                <input type="checkbox" id="update-market-price-modal" className="modal-toggle" />
                <div className="modal">
                  <div className="modal-box">
                    <div className="modal-action">
                      <label htmlFor="update-market-price-modal" className="btn btn-accent">
                        Close
                      </label>
                    </div>
                    <UpdateMarketPriceForm market={marketInfo?.market} />
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>
      ) : (
        <p>No market found</p>
      )}
      {listMarketsError && <p>{listMarketsError}</p>}
      {openMarketError && <p>{openMarketError}</p>}
      {closeMarketError && <p>{closeMarketError}</p>}
      {dropMarketError && <p>{dropMarketError}</p>}
    </>
  );
};
