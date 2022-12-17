import { Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

import checkmark from '../../../../assets/images/checkmark.svg';
import { CurrencyIcon } from '../../../../common/CurrencyIcon';
import type { Asset } from '../../../../domain/asset';
import { MARKET_OVERVIEW_ROUTE } from '../../../../routes/constants';

interface MarketListItemProps {
  baseAsset: Asset;
  quoteAsset: Asset;
  isTradable: boolean;
}

export const MarketListItem = ({ isTradable, baseAsset, quoteAsset }: MarketListItemProps): JSX.Element => {
  const navigate = useNavigate();

  const handleClickMarketDetails = () => {
    navigate(MARKET_OVERVIEW_ROUTE, { state: { baseAsset, quoteAsset } });
  };

  return (
    <div className="w-100 mb-2 market-list-item" onClick={handleClickMarketDetails}>
      <Row className="w-100">
        <Col xs={6} sm={4}>
          <div className="market-icons-translate">
            <CurrencyIcon assetId={baseAsset?.asset_id || ''} size={32} />
            <CurrencyIcon assetId={quoteAsset?.asset_id || ''} size={32} />
          </div>
        </Col>
        <Col span={12}>
          <span className="tickers">{`${baseAsset?.ticker} / ${quoteAsset?.ticker} Markets`}</span>
        </Col>
        <Col xs={6} sm={8} className="justify-center">
          <span className="">
            {isTradable ? (
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
