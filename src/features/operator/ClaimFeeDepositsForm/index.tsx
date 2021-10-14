import { ErrorMessage } from '@hookform/error-message';
import classNames from 'classnames';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { useClaimFeeDepositsMutation } from '../operator.api';

interface IFormInputs {
  baseAsset: string;
  quoteAsset: string;
  hash: string;
  index: number;
}

export const ClaimFeeDepositsForm = (): JSX.Element => {
  const [claimFeeDeposits, { error: claimFeeDepositsError }] = useClaimFeeDepositsMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    claimFeeDeposits([{ hash: data.hash, index: data.index }]);
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
        {claimFeeDepositsError && <span className="text-sm text-error">{claimFeeDepositsError}</span>}
      </div>
      <button className="btn btn-secondary mt-4">Claim Fee Deposits</button>
    </form>
  );
};
