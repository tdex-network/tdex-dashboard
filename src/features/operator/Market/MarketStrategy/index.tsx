import type { RadioChangeEvent } from 'antd';
import { Col, notification, Row, Radio } from 'antd';
import React, { useEffect, useState } from 'react';

import type { MarketInfo } from '../../../../api-spec/protobuf/gen/js/tdex-daemon/v1/types_pb';
import { StrategyType } from '../../../../api-spec/protobuf/gen/js/tdex-daemon/v1/types_pb';
import {
  useCloseMarketMutation,
  useOpenMarketMutation,
  useUpdateMarketStrategyMutation,
} from '../../operator.api';

interface MarketStrategyProps {
  marketInfo?: MarketInfo;
}

export const MarketStrategy = ({ marketInfo }: MarketStrategyProps): JSX.Element => {
  const [updateMarketStrategy] = useUpdateMarketStrategyMutation();
  const [openMarket] = useOpenMarketMutation();
  const [closeMarket] = useCloseMarketMutation();
  const [defaultStrategyType, setDefaultStrategyType] = useState<number | undefined>(
    marketInfo?.strategyType
  );

  useEffect(() => {
    setDefaultStrategyType(marketInfo?.strategyType);
  }, [marketInfo?.strategyType]);

  const handleChange = async (ev: RadioChangeEvent) => {
    try {
      if (!marketInfo) return;
      // Pause Market
      const resClose = await closeMarket({
        baseAsset: marketInfo?.market?.baseAsset || '',
        quoteAsset: marketInfo?.market?.quoteAsset || '',
      });
      if ('error' in resClose) throw new Error((resClose as any).error);
      //
      const res = await updateMarketStrategy({
        market: {
          baseAsset: marketInfo.market?.baseAsset || '',
          quoteAsset: marketInfo.market?.quoteAsset || '',
        },
        strategyType: ev.target.value,
      });
      // @ts-ignore
      if (res?.error) throw new Error(res?.error);
      notification.success({
        message: 'Market strategy updated successfully',
        key: 'Market strategy updated successfully',
      });
      // Re-open market
      const resOpen = await openMarket({
        baseAsset: marketInfo?.market?.baseAsset || '',
        quoteAsset: marketInfo?.market?.quoteAsset || '',
      });
      if ('error' in resOpen) throw new Error((resOpen as any).error);
    } catch (err) {
      // @ts-ignore
      notification.error({ message: err.message, key: err.message });
    }
  };

  return (
    <Row justify="center" className="text-center">
      <Col span={24}>
        <Radio.Group onChange={handleChange} value={defaultStrategyType}>
          <Radio.Button value={StrategyType.STRATEGY_TYPE_BALANCED}>BALANCED</Radio.Button>
          <Radio.Button value={StrategyType.STRATEGY_TYPE_UNBALANCED}>UNBALANCED</Radio.Button>
          <Radio.Button value={StrategyType.STRATEGY_TYPE_PLUGGABLE}>PLUGGABLE</Radio.Button>
        </Radio.Group>
      </Col>
    </Row>
  );
};
