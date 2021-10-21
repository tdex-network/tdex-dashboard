import { Typography } from 'antd';
import React from 'react';

import { Info } from '../operator/Info';

export const Home = (): JSX.Element => {
  const { Title } = Typography;

  return (
    <>
      <Title>Overview</Title>
      <Title level={2}>Info</Title>
      <Info />
    </>
  );
};
