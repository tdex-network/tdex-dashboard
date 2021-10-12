import { ErrorMessage } from '@hookform/error-message';
import classNames from 'classnames';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { useCloseMarketMutation } from '../operator.api';

interface IFormInputs {
  baseAsset: string;
  quoteAsset: string;
}

export const CloseMarketForm = (): JSX.Element => {
  const [closeMarket, { error: closeMarketError }] = useCloseMarketMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    closeMarket({ baseAsset: data.baseAsset, quoteAsset: data.quoteAsset });
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
            'mb-7': !errors.quoteAsset?.message && !closeMarketError,
          })}
          {...register('quoteAsset', {
            required: 'Quote asset is required',
          })}
        />
        <ErrorMessage errors={errors} name="quoteAsset" as={<span className="prose-sm mt-1 text-error" />} />
        {closeMarketError && <span className="prose-sm text-error">{closeMarketError}</span>}
      </div>
      <button className="btn btn-secondary mt-4">Close Market</button>
    </form>
  );
};
