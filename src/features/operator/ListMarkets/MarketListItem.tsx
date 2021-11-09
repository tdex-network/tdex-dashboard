import { Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

import type { MarketInfo } from '../../../api-spec/generated/js/operator_pb';
import type { Market } from '../../../api-spec/generated/js/types_pb';
import checkmark from '../../../assets/images/checkmark.svg';
import { CurrencyIcon } from '../../../common/CurrencyIcon';
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
  const navigate = useNavigate();

  const handleClickMarketDetails = (market?: Market.AsObject) => {
    if (!market) return;
    navigate(MARKET_ROUTE, { state: market });
  };

  const { market, tradable } = marketInfo;
  const baseAssetTicker = getAssetsDataError
    ? market?.baseAsset.substring(0, 4).toUpperCase()
    : assetsData?.baseAsset.ticker || '????';
  const quoteAssetTicker = getAssetsDataError
    ? market?.quoteAsset.substring(0, 4).toUpperCase()
    : assetsData?.quoteAsset.ticker || '????';

  return (
    <div className="w-100 mb-2 market-list-item" onClick={() => handleClickMarketDetails(market)}>
      <Row className="w-100">
        <Col span={4}>
          <div className="icons">
            <CurrencyIcon className="base-icon" currency={baseAssetTicker} />
            <CurrencyIcon className="quote-icon" currency={quoteAssetTicker} />
          </div>
        </Col>
        <Col span={12}>
          <span className="tickers">{`${baseAssetTicker} / ${quoteAssetTicker} Markets`}</span>
        </Col>
        <Col span={8}>
          <span className="">
            {tradable ? (
              <span className="status__open">
                <span className="mr-1">Open</span>
                <img className="checkmark" src={checkmark} alt="checkmark" />
              </span>
            ) : (
              <span className="status__close">Close</span>
            )}
          </span>
        </Col>
      </Row>
    </div>
  );
};
