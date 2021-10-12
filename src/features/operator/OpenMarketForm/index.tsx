import { ErrorMessage } from '@hookform/error-message';
import classNames from 'classnames';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { useOpenMarketMutation } from '../operator.api';

interface IFormInputs {
  baseAsset: string;
  quoteAsset: string;
}

export const OpenMarketForm = (): JSX.Element => {
  const [openMarket, { error: openMarketError }] = useOpenMarketMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    openMarket({ baseAsset: data.baseAsset, quoteAsset: data.quoteAsset });
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
            'mb-7': !errors.quoteAsset?.message && !openMarketError,
          })}
          {...register('quoteAsset', {
            required: 'Quote asset is required',
          })}
        />
        <ErrorMessage errors={errors} name="quoteAsset" as={<span className="prose-sm mt-1 text-error" />} />
        {openMarketError && <span className="prose-sm text-error">{openMarketError}</span>}
      </div>
      <button className="btn btn-secondary mt-4">Open Market</button>
    </form>
  );
};
