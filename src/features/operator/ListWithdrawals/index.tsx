import { useListWithdrawalsQuery } from '../operator.api';

export const ListWithdrawals = (): JSX.Element => {
  const { data: withdrawals, error: listWithdrawalsError } = useListWithdrawalsQuery({
    accountIndex: 5,
    page: { pageNumber: 3, pageSize: 3 },
  });
  return (
    <>
      {withdrawals?.map(({ txId, balance, address }, index) => (
        <div key={index} className="mb-4">
          <p className="break-all">
            <span className="font-bold">Tx Id: </span>
            {txId}
          </p>
          <p>
            <span className="font-bold">Balance base amount: </span>
            {balance?.baseAmount}
          </p>
          <p>
            <span className="font-bold">Balance quote amount: </span>
            {balance?.quoteAmount}
          </p>
          <p>
            <span className="font-bold">Address: </span>
            {address}
          </p>
        </div>
      ))}
      {listWithdrawalsError && <p>{listWithdrawalsError}</p>}
    </>
  );
};
