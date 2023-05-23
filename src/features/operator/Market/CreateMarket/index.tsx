import './createMarket.less';
import Icon, { InfoCircleOutlined } from '@ant-design/icons';
import { Breadcrumb, Row, Col, Button, notification, Typography } from 'antd';
import clx from 'classnames';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import type { NewMarketRequest } from '../../../../api-spec/protobuf/gen/js/tdex-daemon/v2/operator_pb';
import { useTypedSelector } from '../../../../app/store';
import { ReactComponent as chevronRight } from '../../../../assets/images/chevron-right.svg';
import type { Asset } from '../../../../domain/asset';
import { HOME_ROUTE } from '../../../../routes/constants';
import { LBTC_ASSET, USDT_TICKER } from '../../../../utils';
import { useNewMarketMutation } from '../../operator.api';

import { FeeForm } from './FeeForm';
import { MarketLabelForm } from './MarketLabelForm';
import { MarketPairForm } from './MarketPairForm';
import { MarketStrategy } from './MarketStrategy';

const { Title } = Typography;

export const CreateMarket = (): JSX.Element => {
  const navigate = useNavigate();
  const { assets, network } = useTypedSelector(({ settings }) => settings);
  const [baseAsset, setBaseAsset] = useState<Asset>(LBTC_ASSET[network]);
  const [quoteAsset, setQuoteAsset] = useState<Asset>(
    assets[network].find((a) => a.ticker === USDT_TICKER) || assets[network][0]
  );
  const [step, setStep] = useState<number>(0);
  const [newMarket, setNewMarket] = useState<Partial<NewMarketRequest>>();
  const [newMarketRequest] = useNewMarketMutation();

  const incrementStep = () => setStep(step + 1);

  // After confirming a pair, changing the pair should reset all the form
  useEffect(() => {
    if (step > 0) setStep(0);
    // eslint-disable-next-line
  }, [baseAsset, quoteAsset]);

  const createNewMarket = async () => {
    if (!newMarket) return;
    const resNewMarketRequest = await newMarketRequest(newMarket as NewMarketRequest);
    if ('error' in resNewMarketRequest) throw new Error((resNewMarketRequest as any).error);
    notification.success({ message: 'New market created successfully' });
  };

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
              setMarket={(market) => setNewMarket(market)}
            />
            <MarketLabelForm
              className={clx({ disabled: step < 1 })}
              incrementStep={incrementStep}
              setLabel={(label) => setNewMarket({ ...newMarket, name: label })}
            />
            <FeeForm
              baseAsset={baseAsset}
              quoteAsset={quoteAsset}
              className={clx({ disabled: step < 2 }, 'mb-4')}
              incrementStep={incrementStep}
              setFees={(fees) => setNewMarket({ ...newMarket, ...fees })}
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
              <MarketStrategy
                setStrategyType={(strategyType) => setNewMarket({ ...newMarket, strategyType })}
              />
            </div>
            <Button
              className={clx('w-100', { disabled: step < 1 })}
              onClick={async () => {
                try {
                  await createNewMarket();
                  navigate(HOME_ROUTE);
                } catch (err) {
                  if (err instanceof Error) {
                    notification.error({ message: err.message, key: err.message });
                    console.error(err);
                  }
                }
              }}
            >
              DONE
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
