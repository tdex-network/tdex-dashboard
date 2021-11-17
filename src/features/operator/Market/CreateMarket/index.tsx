import './createMarket.less';
import Icon, { InfoCircleOutlined } from '@ant-design/icons';
import { Breadcrumb, Row, Col, Typography } from 'antd';
import clx from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as chevronRight } from '../../../../assets/images/chevron-right.svg';
import type { Asset } from '../../../../domain/asset';
import { HOME_ROUTE } from '../../../../routes/constants';
import { LBTC_ASSET } from '../../../../utils';
import { FeeForm } from '../../Fee/FeeForm';
import { useListMarketsQuery } from '../../operator.api';
import { MarketStrategy } from '../MarketStrategy';

import { MarketLabelForm } from './MarketLabelForm';
import { MarketPairForm } from './MarketPairForm';

const { Title } = Typography;

export const CreateMarket = (): JSX.Element => {
  const { data: listMarkets } = useListMarketsQuery();
  const [baseAsset, setBaseAsset] = useState<Asset>(LBTC_ASSET);
  const [quoteAsset, setQuoteAsset] = useState<Asset>(LBTC_ASSET);
  const [step, setStep] = useState<number>(0);
  const marketInfo = listMarkets?.marketsList.find(
    ({ market }) => market?.baseAsset === baseAsset?.asset_id && market?.quoteAsset === quoteAsset?.asset_id
  );

  const incrementStep = () => setStep(step + 1);

  return (
    <Row>
      <Col span={10} offset={7}>
        <Breadcrumb separator={<Icon component={chevronRight} />} className="mb-2">
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
              className={clx({ disabled: step < 2 })}
              incrementStep={incrementStep}
            />
            <div className={clx('panel panel__grey mb-4', { disabled: step < 3 })}>
              <Row className="mb-4">
                <Col span={24}>
                  <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey d-inline mr-4" level={3}>
                    Set Market Strategy
                  </Title>
                  <InfoCircleOutlined />
                </Col>
              </Row>
              <MarketStrategy marketInfo={marketInfo} />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
