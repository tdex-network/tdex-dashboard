import { ErrorMessage } from '@hookform/error-message';
import classNames from 'classnames';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { useNewMarketMutation } from '../operator.api';

interface IFormInputs {
  baseAsset: string;
  quoteAsset: string;
}

export const NewMarketForm = (): JSX.Element => {
  const [newMarket, { error: newMarketError }] = useNewMarketMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    newMarket({ baseAsset: data.baseAsset, quoteAsset: data.quoteAsset });
    document.getElementById('add-market-modal')?.click();
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
        <ErrorMessage errors={errors} name="baseAsset" as={<span className="text-sm mt-1 text-error" />} />

        <label className="label">
          <span className="label-text">Quote Asset</span>
        </label>
        <input
          type="text"
          className={classNames('input input-bordered', {
            'mb-7': !errors.quoteAsset?.message && !newMarketError,
          })}
          {...register('quoteAsset', {
            required: 'Quote asset is required',
          })}
        />
        <ErrorMessage errors={errors} name="quoteAsset" as={<span className="text-sm mt-1 text-error" />} />
        {newMarketError && <span className="text-sm text-error">{newMarketError}</span>}
      </div>
      <button className="btn btn-secondary mt-4">New Market</button>
    </form>
  );
};
