import './createMarket.less';
import Icon from '@ant-design/icons';
import { Breadcrumb, Row, Col } from 'antd';
import clx from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as chevronRight } from '../../../assets/images/chevron-right.svg';
import type { Asset } from '../../../domain/asset';
import { HOME_ROUTE } from '../../../routes/constants';
import { LBTC_ASSET } from '../../../utils';
import { FeeForm } from '../FeeForm';
import { MarketStrategyForm } from '../MarketStrategyForm';

import { MarketPairForm } from './MarketPairForm';

export const CreateMarket = (): JSX.Element => {
  const [baseAsset, setBaseAsset] = useState<Asset>(LBTC_ASSET);
  const [quoteAsset, setQuoteAsset] = useState<Asset>(LBTC_ASSET);
  const [step, setStep] = useState<number>(0);

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
          <Col span={24} className="create-market-container">
            <MarketPairForm
              setBaseAsset={setBaseAsset}
              setQuoteAsset={setQuoteAsset}
              baseAsset={baseAsset}
              quoteAsset={quoteAsset}
              setStep={setStep}
            />
            <FeeForm
              baseAsset={baseAsset}
              quoteAsset={quoteAsset}
              className={clx({ disabled: step < 1 })}
              setStep={setStep}
            />
            <MarketStrategyForm
              market={{ baseAsset: baseAsset.asset_id, quoteAsset: quoteAsset.asset_id }}
              className={clx({ disabled: step < 2 })}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
