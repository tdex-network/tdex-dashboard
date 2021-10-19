import { ErrorMessage } from '@hookform/error-message';
import classNames from 'classnames';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import type { Market } from '../../../api-spec/generated/js/types_pb';
import { useClaimMarketDepositsMutation } from '../operator.api';

interface IFormInputs {
  hash: string;
  index: number;
}

interface ClaimMarketDepositsFormProps {
  market?: Market.AsObject;
}

export const ClaimMarketDepositsForm = ({ market }: ClaimMarketDepositsFormProps): JSX.Element => {
  const [claimMarketDeposits, { error: claimMarketDepositsError }] = useClaimMarketDepositsMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    if (!market) return;
    claimMarketDeposits({
      outpointsList: [{ hash: data.hash, index: data.index }],
      market: market,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Outpoint Hash</span>
        </label>
        <input
          type="text"
          className={classNames('input input-bordered', {
            'mb-7': !errors.hash?.message,
          })}
          {...register('hash', {
            required: 'Hash is required',
          })}
        />
        <ErrorMessage errors={errors} name="quoteAsset" as={<span className="text-sm mt-1 text-error" />} />

        <label className="label">
          <span className="label-text">Outpoint Index</span>
        </label>
        <input
          type="number"
          className={classNames('input input-bordered', {
            'mb-7': !errors.index?.message,
          })}
          {...register('index', {
            required: 'Index is required',
          })}
        />
        <ErrorMessage errors={errors} name="quoteAsset" as={<span className="text-sm mt-1 text-error" />} />
        {claimMarketDepositsError && <span className="text-sm text-error">{claimMarketDepositsError}</span>}
      </div>
      <button className="btn btn-secondary mt-4">Deposit</button>
    </form>
  );
};
