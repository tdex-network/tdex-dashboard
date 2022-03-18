import './dashboardPanelRight.less';

import Icon from '@ant-design/icons';
import { Button, Col, Row, Typography } from 'antd';
import Big from 'big.js';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as depositIcon } from '../../assets/images/deposit-green.svg';
import { FEE_DEPOSIT_ROUTE, FEE_WITHDRAW_ROUTE } from '../../routes/constants';
import type { LbtcUnit } from '../../utils';
import { fromSatsToUnitOrFractional, LBTC_COINGECKOID } from '../../utils';
import { useGetFeeBalanceQuery } from '../operator/operator.api';
import { useLatestPriceFeedFromCoinGeckoQuery } from '../rates.api';

import type { RootState } from '../../app/store';
import { useTypedSelector } from '../../app/store';

const { Title } = Typography;

interface DashboardPanelRightProps {
  lbtcUnit: LbtcUnit;
}

export const DashboardPanelRight = ({ lbtcUnit }: DashboardPanelRightProps): JSX.Element => {
  const navigate = useNavigate();
  const { currency } = useTypedSelector(({ settings }: RootState) => settings);
  const { data: feeBalance } = useGetFeeBalanceQuery();
  const {
    data: prices,
    isLoading: isLoadingPrices,
    isError: isErrorPrices,
  } = useLatestPriceFeedFromCoinGeckoQuery(undefined, { pollingInterval: 30000 });

  const AccountBalance = useMemo(() => {
    const satsBalance = feeBalance?.totalBalance;

    if (satsBalance === undefined) {
      return <>N/A</>;
    }

    // default to displaying btc balance on error (or user preference)
    if (isErrorPrices || currency.value === 'btc') {
      const lbtcUnitBalance = fromSatsToUnitOrFractional(satsBalance, 8, true, lbtcUnit);
      return (
        <>
          {lbtcUnitBalance} <span className="dm-mono__xxx">{lbtcUnit}</span>
        </>
      );
    }

    // wait for prices to load
    if (isLoadingPrices) {
      return <></>;
    }

    const lbtcBalance = fromSatsToUnitOrFractional(satsBalance, 8, true, 'L-BTC');
    const lbtcRateMultiplier = prices?.[LBTC_COINGECKOID]?.[currency.value] || 1;
    const fiatBalance = Big(lbtcBalance).times(lbtcRateMultiplier).toFixed(2);
    return (
      <>
        {currency.symbol}
        {fiatBalance}
      </>
    );
  }, [feeBalance, prices, currency, lbtcUnit, isLoadingPrices, isErrorPrices]);

  return (
    <div id="dashboard-panel-right-container" className="panel w-100 h-100">
      <Row>
        <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey" level={3}>
          Fee Account Balance
        </Title>
        <Col className="dm-mono dm-mono__xxxxxx" span={24}>
          {AccountBalance}
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
