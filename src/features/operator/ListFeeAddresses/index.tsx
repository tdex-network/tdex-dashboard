import { useListFeeAddressesQuery } from '../operator.api';

export const ListFeeAddresses = (): JSX.Element => {
  const { data: listFeeAddresses, error: listFeeAddressesError } = useListFeeAddressesQuery();
  console.log('listFeeAddresses', listFeeAddresses);
  return (
    <>
      {listFeeAddresses?.map((addr, index) => (
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
      {listFeeAddressesError && <p>{listFeeAddressesError}</p>}
    </>
  );
};
