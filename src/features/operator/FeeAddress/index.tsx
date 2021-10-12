import { useGetFeeAddressQuery } from '../operator.api';

export const FeeAddress = (): JSX.Element => {
  const { data: feeAddress, error: feeAddressError } = useGetFeeAddressQuery();
  return (
    <>
      {feeAddress?.map((addr, index) => (
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
      {feeAddressError && <p>{feeAddressError}</p>}
    </>
  );
};
