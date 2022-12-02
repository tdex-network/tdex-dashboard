import { Col, Row, Typography } from 'antd';

import { useGetInfoQuery } from '../wallet/wallet.api';

const { Title } = Typography;

export const DaemonVersion = (): JSX.Element => {
  const { data: daemonInfo } = useGetInfoQuery();

  return (
    <div className="mb-4 panel panel__grey">
      <Row>
        <Col span={24}>
          <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey" level={3}>
            Daemon Version
          </Title>
        </Col>
      </Row>
      <div>{daemonInfo?.buildData?.version || 'N/A'}</div>
    </div>
  );
};
