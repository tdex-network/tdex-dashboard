import { Typography } from 'antd';
import React from 'react';

import { ListMarkets } from '../operator/ListMarkets';

export const Home = (): JSX.Element => {
  const { Title } = Typography;

  return (
    <>
      <Title className="title-grey" level={2}>
        Markets
      </Title>
      <ListMarkets />
    </>
  );
};
