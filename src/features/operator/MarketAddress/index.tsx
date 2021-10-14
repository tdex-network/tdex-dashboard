import { useGetMarketAddressQuery } from '../operator.api';

export const MarketAddress = (): JSX.Element => {
  const { data: marketAddress, error: marketAddressError } = useGetMarketAddressQuery();
  return (
    <>
      {marketAddress?.map((addr, index) => (
        <div key={index} className="mb-4">
          <p className="break-all">
            <span className="font-bold">Address: </span>
            {addr.address}
          </p>
          <p className="break-all">
            <span className="font-bold">Blinding key: </span>
            {addr.blinding}
          </p>
        </div>
      ))}
      {marketAddressError && <p>{marketAddressError}</p>}
    </>
  );
};
