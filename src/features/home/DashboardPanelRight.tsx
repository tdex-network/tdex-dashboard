import './dashboardPanelRight.less';
import Icon from '@ant-design/icons';
import { Button, Col, Grid, Row, Typography } from 'antd';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import type { GetInfoResponse } from '../../api-spec/protobuf/gen/js/tdex-daemon/v2/wallet_pb';
import type { RootState } from '../../app/store';
import { useTypedSelector } from '../../app/store';
import { ReactComponent as depositIcon } from '../../assets/images/deposit-green.svg';
import { FEE_DEPOSIT_ROUTE, FEE_WITHDRAW_ROUTE } from '../../routes/constants';
import type { LbtcUnit } from '../../utils';
import { fromUnitToUnit, LBTC_ASSET } from '../../utils';
import { useGetFeeBalanceQuery } from '../operator/operator.api';
import type { PriceFeedQueryResult } from '../rates.api';
import { convertAmountToFavoriteCurrency } from '../rates.api';
import { useGetInfoQuery } from '../wallet/wallet.api';

const { Title } = Typography;
const { useBreakpoint } = Grid;

interface DashboardPanelRightProps {
  lbtcUnit: LbtcUnit;
  priceFeed: PriceFeedQueryResult;
  daemonInfo?: GetInfoResponse;
  daemonInfoIsFetching: boolean;
}

export const DashboardPanelRight = ({ lbtcUnit, priceFeed }: DashboardPanelRightProps): JSX.Element => {
  const navigate = useNavigate();
  const { currency, network } = useTypedSelector(({ settings }: RootState) => settings);
  const { data: feeBalance } = useGetFeeBalanceQuery();
  const { data: prices, isLoading: isLoadingPrices, isError: isErrorPrices } = priceFeed;
  const { data: daemonInfo, isFetching: daemonInfoIsFetching } = useGetInfoQuery();
  const [feeAccountBalanceAsFavoriteCurrency, setFeeAccountBalanceAsFavoriteCurrency] = useState<string>();
  const screens = useBreakpoint();
  const daemonInfoNetwork = daemonInfo?.network === 'mainnet' ? 'liquid' : daemonInfo?.network;

  useEffect(() => {
    if (network === daemonInfoNetwork && !daemonInfoIsFetching) {
      const feeBalanceInLbtcUnit =
        feeBalance &&
        fromUnitToUnit(
          // TODO: use totalBalance once fixed
          (feeBalance?.balance?.confirmedBalance ?? 0) + (feeBalance?.balance?.unconfirmedBalance ?? 0),
          'L-sats',
          lbtcUnit
        );
      setFeeAccountBalanceAsFavoriteCurrency(
        convertAmountToFavoriteCurrency({
          asset: LBTC_ASSET[network],
          amount: feeBalanceInLbtcUnit,
          network: network,
          preferredCurrency: currency,
          preferredLbtcUnit: lbtcUnit,
          prices: prices,
        })
      );
    } else {
      setFeeAccountBalanceAsFavoriteCurrency(undefined);
    }
  }, [currency, daemonInfoIsFetching, daemonInfoNetwork, feeBalance, lbtcUnit, network, prices]);

  return (
    <div
      id="dashboard-panel-right-container"
      className={classNames('panel w-100', {
        'h-100': screens.lg,
        'mt-4': !screens.lg,
      })}
    >
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
