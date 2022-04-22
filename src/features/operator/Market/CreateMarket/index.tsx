import './createMarket.less';
import Icon, { InfoCircleOutlined } from '@ant-design/icons';
import { Breadcrumb, Row, Col, Typography, notification, Button } from 'antd';
import clx from 'classnames';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useTypedSelector } from '../../../../app/store';
import { ReactComponent as chevronRight } from '../../../../assets/images/chevron-right.svg';
import type { Asset } from '../../../../domain/asset';
import { HOME_ROUTE } from '../../../../routes/constants';
import { LBTC_ASSET, USDT_TICKER } from '../../../../utils';
import { FeeForm } from '../../Fee/FeeForm';
import { useGetMarketInfoQuery } from '../../operator.api';
import { MarketStrategy } from '../MarketStrategy';

import { MarketLabelForm } from './MarketLabelForm';
import { MarketPairForm } from './MarketPairForm';

const { Title } = Typography;

export const CreateMarket = (): JSX.Element => {
  const navigate = useNavigate();
  const { assets, network } = useTypedSelector(({ settings }) => settings);
  const [baseAsset, setBaseAsset] = useState<Asset>(LBTC_ASSET[network]);
  const [quoteAsset, setQuoteAsset] = useState<Asset>(
    assets[network].find((a) => a.ticker === USDT_TICKER) || assets[network][0]
  );
  const { data: marketInfo, error: marketInfoError } = useGetMarketInfoQuery({
    baseAsset: baseAsset?.asset_id,
    quoteAsset: quoteAsset?.asset_id,
  });
  const [step, setStep] = useState<number>(0);

  const incrementStep = () => setStep(step + 1);

  useEffect(() => {
    if (
      marketInfoError &&
      marketInfoError !== 'missing argument' &&
      marketInfoError !== 'market does not exist'
    ) {
      notification.error({ message: marketInfoError.toString() });
    }
  }, [marketInfoError]);

  // After confirming a pair, changing the pair should reset all the form
  useEffect(() => {
    if (step > 0) setStep(0);
    // eslint-disable-next-line
  }, [baseAsset, quoteAsset]);

  return (
    <Row>
      <Col
        sm={{ span: 20, offset: 2 }}
        md={{ span: 16, offset: 4 }}
        lg={{ span: 12, offset: 6 }}
        xl={{ span: 10, offset: 7 }}
      >
        <Breadcrumb separator={<Icon component={chevronRight} />}>
          <Breadcrumb.Item>
            <Link to={HOME_ROUTE}>Dashboard</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Create New Market</Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col span={24} className="create-market-container panel">
            <MarketPairForm
              setBaseAsset={setBaseAsset}
              setQuoteAsset={setQuoteAsset}
              baseAsset={baseAsset}
              quoteAsset={quoteAsset}
              incrementStep={incrementStep}
            />
            <MarketLabelForm
              baseAsset={baseAsset}
              quoteAsset={quoteAsset}
              className={clx({ disabled: step < 1 })}
              incrementStep={incrementStep}
            />
            <FeeForm
              baseAsset={baseAsset}
              quoteAsset={quoteAsset}
              className={clx({ disabled: step < 2 }, 'mb-4')}
              incrementStep={incrementStep}
            />
            <div className={clx('panel panel__grey mb-4', { disabled: step < 3 })}>
              <Row className="mb-4">
                <Col span={24}>
                  <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey d-inline mr-4" level={3}>
                    Set Market Strategy
                  </Title>
                  <InfoCircleOutlined className="grey" />
                </Col>
              </Row>
              <MarketStrategy marketInfo={marketInfo} />
            </div>
            <Button className={clx('w-100', { disabled: step < 1 })} onClick={() => navigate(HOME_ROUTE)}>
              DONE
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
