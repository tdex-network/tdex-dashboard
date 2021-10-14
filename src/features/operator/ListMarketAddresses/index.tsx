import { useListMarketAddressesQuery } from '../operator.api';

export const ListMarketAddresses = (): JSX.Element => {
  const { data: listMarketAddresses, error: listMarketAddressesError } = useListMarketAddressesQuery();
  return (
    <>
      {listMarketAddresses?.map((addr, index) => (
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
      {listMarketAddressesError && <p>{listMarketAddressesError}</p>}
    </>
  );
};
