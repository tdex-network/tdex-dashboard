import './dashboardPanelRight.less';
import Icon from '@ant-design/icons';
import { Button, Col, Row, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

import type { RootState } from '../../app/store';
import { useTypedSelector } from '../../app/store';
import { ReactComponent as depositIcon } from '../../assets/images/deposit-green.svg';
import { FEE_DEPOSIT_ROUTE, FEE_WITHDRAW_ROUTE } from '../../routes/constants';
import type { LbtcUnit } from '../../utils';
import { LBTC_ASSET, fromUnitToUnit } from '../../utils';
import { useGetFeeBalanceQuery } from '../operator/operator.api';
import { convertAmountToFavoriteCurrency } from '../rates.api';
import type { PriceFeedQueryResult } from '../rates.api';

const { Title } = Typography;

interface DashboardPanelRightProps {
  lbtcUnit: LbtcUnit;
  priceFeed: PriceFeedQueryResult;
}

export const DashboardPanelRight = ({ lbtcUnit, priceFeed }: DashboardPanelRightProps): JSX.Element => {
  const navigate = useNavigate();
  const { currency, network } = useTypedSelector(({ settings }: RootState) => settings);
  const { data: feeBalance } = useGetFeeBalanceQuery();
  const { data: prices, isLoading: isLoadingPrices, isError: isErrorPrices } = priceFeed;

  const feeBalanceInLbtcUnit = feeBalance && fromUnitToUnit(feeBalance.totalBalance, 'L-sats', lbtcUnit);

  const feeAccountBalanceAsFavoriteCurrency = convertAmountToFavoriteCurrency({
    asset: LBTC_ASSET[network],
    amount: feeBalanceInLbtcUnit,
    network: network,
    preferredCurrency: currency,
    preferredLbtcUnit: lbtcUnit,
    prices: prices,
  });

  return (
    <div id="dashboard-panel-right-container" className="panel w-100 h-100">
      <Row>
        <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey" level={3}>
          Fee Account Balance
        </Title>
        <Col className="dm-mono dm-mono__xxxxxx" span={24}>
          {!isLoadingPrices && !isErrorPrices && feeAccountBalanceAsFavoriteCurrency ? (
            <>
              {currency.symbol}
              {feeAccountBalanceAsFavoriteCurrency}
            </>
          ) : (
            'N/A'
          )}
          {currency.value === 'btc' && feeAccountBalanceAsFavoriteCurrency && (
            <span className="dm-sans dm-sans__xxxx ml-3">{lbtcUnit}</span>
          )}
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 12, md: 16 }}>
        <Col span={12}>
          <Button
            onClick={() => navigate(FEE_WITHDRAW_ROUTE)}
            className="rotate-icon w-100 justify-center"
            icon={<Icon component={depositIcon} />}
          >
            WITHDRAW
          </Button>
        </Col>
        <Col span={12}>
          <Button
            onClick={() => navigate(FEE_DEPOSIT_ROUTE)}
            className="w-100 justify-center"
            icon={<Icon component={depositIcon} />}
          >
            DEPOSIT
          </Button>
        </Col>
      </Row>
    </div>
  );
};
