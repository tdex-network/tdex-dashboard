import { Button, Col, notification, Row, Typography } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { MARKET_WITHDRAW_FRAGMENTER_ROUTE } from '../../routes/constants';
import { useReloadUtxosMutation } from '../operator/operator.api';

const { Title } = Typography;

export function ActionButtons(): JSX.Element {
  const navigate = useNavigate();
  const [reloadUtxos, { isLoading: isReloadUtxosLoading }] = useReloadUtxosMutation();

  return (
    <>
      <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey" level={3}>
        Actions
      </Title>
      <Row justify="space-between">
        <Col span={24} className="d-flex flex-wrap grid-gap">
          <Button onClick={() => navigate(MARKET_WITHDRAW_FRAGMENTER_ROUTE)}>
            Recovery Withdraw Markets
          </Button>
          <Button
            onClick={async () => {
              try {
                const res = await reloadUtxos();
                if ('error' in res) throw new Error(res.error.toString());
                notification.success({ message: 'Utxos reloaded', key: 'Utxos reloaded' });
              } catch (err) {
                // @ts-ignore
                notification.error({ message: err.message, key: err.message });
              }
            }}
            loading={isReloadUtxosLoading}
          >
            Reload Utxos
          </Button>
        </Col>
      </Row>
    </>
  );
}
