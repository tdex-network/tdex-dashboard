import { Typography } from 'antd';

import { useGetInfoQuery } from '../operator/operator.api';

const { Text } = Typography;

export const FixedAssets = (): JSX.Element => {
  const { data } = useGetInfoQuery();

  return (
    <>
      <div>
        <span className="mr-1 dm-sans dm-sans__bold">Fixed base asset:</span>
        {data?.fixedBaseAsset ? (
          <Text copyable className="address">
            {data?.fixedBaseAsset}
          </Text>
        ) : (
          'none'
        )}
      </div>
      <div>
        <span className="mr-1 dm-sans dm-sans__bold">Fixed quote asset:</span>
        {data?.fixedQuoteAsset ? (
          <Text copyable className="address">
            {data?.fixedQuoteAsset}
          </Text>
        ) : (
          'none'
        )}
      </div>
    </>
  );
};
