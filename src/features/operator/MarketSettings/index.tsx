import type { Market } from '../../../api-spec/generated/js/types_pb';
import { UpdateMarketFixedFeeForm } from '../UpdateMarketFixedFeeForm';
import { UpdateMarketPercentageFeeForm } from '../UpdateMarketPercentageFeeForm';

interface MarketSettingsProps {
  market?: Market.AsObject;
}

export const MarketSettings = ({ market }: MarketSettingsProps): JSX.Element => {
  console.log('market', market);
  return (
    <>
      <h2>Fees</h2>
      <div className="divide-y">
        <div>
          <div className="flex">
            <h3 className="flex-1">Set Standard Fee</h3>
            <div className="flex-1 flex justify-end">
              <button className="btn btn-sm	btn-accent mr-4">FIXED</button>
              <button className="btn btn-sm	btn-accent px-6">%</button>
            </div>
          </div>
          <UpdateMarketFixedFeeForm />
        </div>

        <div>
          <h3>Set Variable Fee</h3>
          <UpdateMarketPercentageFeeForm />
        </div>
        <h2>Strategy</h2>
        <h2>Notifications</h2>
      </div>
    </>
  );
};
