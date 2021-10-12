import { ErrorMessage } from '@hookform/error-message';
import classNames from 'classnames';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { useDropMarketMutation } from '../operator.api';

interface IFormInputs {
  baseAsset: string;
  quoteAsset: string;
}

export const DropMarketForm = (): JSX.Element => {
  const [dropMarket, { error: dropMarketError }] = useDropMarketMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    dropMarket({ baseAsset: data.baseAsset, quoteAsset: data.quoteAsset });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Base Asset</span>
        </label>
        <input
          type="text"
          className={classNames('input input-bordered', { 'mb-7': !errors.baseAsset?.message })}
          {...register('baseAsset', { required: 'Base asset is required' })}
        />
        <ErrorMessage errors={errors} name="baseAsset" as={<span className="prose-sm mt-1 text-error" />} />

        <label className="label">
          <span className="label-text">Quote Asset</span>
        </label>
        <input
          type="text"
          className={classNames('input input-bordered', {
            'mb-7': !errors.quoteAsset?.message && !dropMarketError,
          })}
          {...register('quoteAsset', {
            required: 'Quote asset is required',
          })}
        />
        <ErrorMessage errors={errors} name="quoteAsset" as={<span className="prose-sm mt-1 text-error" />} />
        {dropMarketError && <span className="prose-sm text-error">{dropMarketError}</span>}
      </div>
      <button className="btn btn-secondary mt-4">Drop Market</button>
    </form>
  );
};
