import { ErrorMessage } from '@hookform/error-message';
import classNames from 'classnames';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import type { Market } from '../../../api-spec/generated/js/types_pb';
import { useUpdateMarketStrategyMutation } from '../operator.api';

interface IFormInputs {
  market: Market.AsObject;
  strategyType: any;
  meta: string;
}

interface UpdateMarketStrategyFormProps {
  market?: Market.AsObject;
}

export const UpdateMarketStrategyForm = ({ market }: UpdateMarketStrategyFormProps): JSX.Element => {
  const [updateMarketStrategy, { error: updateMarketStrategyError }] = useUpdateMarketStrategyMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    if (!market) return;
    updateMarketStrategy({
      market: market,
      strategyType: data.strategyType,
      meta: data.meta,
    });
    document.getElementById('update-market-strategy-modal')?.click();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Market Strategy</span>
        </label>
        <input
          type="string"
          className={classNames('input input-bordered', { 'mb-7': !errors.strategyType?.message })}
          {...register('strategyType', { required: 'Market strategy type is required' })}
        />
        <ErrorMessage errors={errors} name="strategyType" as={<span className="text-sm mt-1 text-error" />} />

        <label className="label">
          <span className="label-text">Metadata</span>
        </label>
        <input
          type="string"
          className={classNames('input input-bordered', { 'mb-7': !errors.meta?.message })}
          {...register('meta')}
        />
        <ErrorMessage errors={errors} name="meta" as={<span className="text-sm mt-1 text-error" />} />

        {updateMarketStrategyError && <span className="text-sm text-error">{updateMarketStrategyError}</span>}
      </div>
      <button className="btn btn-secondary mt-4">Update Market Strategy</button>
    </form>
  );
};
