import { useGetMarketBalanceQuery } from '../operator.api';

export const MarketBalance = (): JSX.Element => {
  const { data: marketBalance, error: marketBalanceError } = useGetMarketBalanceQuery();
  return (
    <>
      <p>
        <span className="font-bold">Available Balance: </span>
        {marketBalance?.availableBalance}
      </p>
      <p>
        <span className="font-bold">Total Balance: </span>
        {marketBalance?.totalBalance}
      </p>
      {marketBalanceError && <p>{marketBalanceError}</p>}
    </>
  );
};
