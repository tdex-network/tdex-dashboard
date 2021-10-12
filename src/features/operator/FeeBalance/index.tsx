import { useGetFeeBalanceQuery } from '../operator.api';

export const FeeBalance = (): JSX.Element => {
  const { data: feeBalance, error: feeBalanceError } = useGetFeeBalanceQuery();
  return (
    <>
      <p>
        <span className="font-bold">Available Balance: </span>
        {feeBalance?.availableBalance}
      </p>
      <p>
        <span className="font-bold">Total Balance: </span>
        {feeBalance?.totalBalance}
      </p>
      {feeBalanceError && <p>{feeBalanceError}</p>}
    </>
  );
};
