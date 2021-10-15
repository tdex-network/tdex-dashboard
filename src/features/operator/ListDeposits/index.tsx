import { useListDepositsQuery } from '../operator.api';

export const ListDeposits = (): JSX.Element => {
  const { data: deposits, error: listDepositsError } = useListDepositsQuery({
    accountIndex: 5,
    page: { pageNumber: 3, pageSize: 3 },
  });
  return (
    <>
      {deposits?.map(({ outpoint, value, asset }, index) => (
        <div key={index} className="mb-4">
          <p className="break-all">
            <span className="font-bold">Outpoint: </span>
            {`${outpoint?.hash}:${outpoint?.index}`}
          </p>
          <p>
            <span className="font-bold">Value: </span>
            {value}
          </p>
          <p>
            <span className="font-bold">Asset: </span>
            {asset}
          </p>
        </div>
      ))}
      {listDepositsError && <p>{listDepositsError}</p>}
    </>
  );
};
