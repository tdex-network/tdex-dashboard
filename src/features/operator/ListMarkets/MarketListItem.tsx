import { Button, Col, Row } from 'antd';
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
  const baseAssetTicker = getAssetsDataError
    ? market?.baseAsset.substring(0, 10)
    : assetsData?.baseAsset.ticker || 'Unknown';
  const quoteAssetTicker = getAssetsDataError
    ? market?.quoteAsset.substring(0, 10)
    : assetsData?.quoteAsset.ticker || 'Unknown';

  return (
    <Button className="w-100 mb-8" onClick={() => handleClickMarketDetails(market)}>
      <Row>
        <Col span={16}>
          <span className="">{`${baseAssetTicker} / ${quoteAssetTicker}`}</span>
        </Col>
        <Col span={8}>
          <span className="">{tradable ? 'Open' : 'Closed'}</span>
        </Col>
      </Row>
    </Button>
  );
};
