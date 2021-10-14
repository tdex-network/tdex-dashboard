import { useGetMarketCollectedSwapFeesQuery } from '../operator.api';

export const MarketCollectedSwapFees = (): JSX.Element => {
  const { data: marketCollectedSwapFees, error: marketCollectedSwapFeesError } =
    useGetMarketCollectedSwapFeesQuery({
      baseAsset: '',
      quoteAsset: '',
    });

  return (
    <>
      {marketCollectedSwapFees?.collectedFeesList.map(
        ({ tradeId, basisPoint, asset, percentageFeeAmount, fixedFeeAmount, marketPrice }, index) => (
          <div key={index} className="mb-4">
            <p className="break-all">
              <span className="font-bold">Trade Id: </span>
              {tradeId}
            </p>
            <p className="break-all">
              <span className="font-bold">Basis Point: </span>
              {basisPoint}
            </p>
            <p className="break-all">
              <span className="font-bold">Asset: </span>
              {asset}
            </p>
            <p className="break-all">
              <span className="font-bold">Percentage Fee Amount: </span>
              {percentageFeeAmount}
            </p>
            <p className="break-all">
              <span className="font-bold">Fixed Fee Amount: </span>
              {fixedFeeAmount}
            </p>
            <p className="break-all">
              <span className="font-bold">Market Price: </span>
              {marketPrice}
            </p>
          </div>
        )
      )}

      {marketCollectedSwapFees?.totalCollectedFeesPerAssetMap.map((total, index) => (
        <div key={index}>
          <p>Asset: {total[0]}</p>
          <p>Amount: {total[1]}</p>
        </div>
      ))}
      {marketCollectedSwapFeesError && <p>{marketCollectedSwapFeesError}</p>}
    </>
  );
};
