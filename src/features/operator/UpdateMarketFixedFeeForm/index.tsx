import { ErrorMessage } from '@hookform/error-message';
import classNames from 'classnames';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import type { Market, Fixed } from '../../../api-spec/generated/js/types_pb';
import { useUpdateMarketFixedFeeMutation } from '../operator.api';

interface IFormInputs {
  market: Market.AsObject;
  fixedFee: Fixed.AsObject;
}

interface UpdateMarketFixedFeeFormProps {
  market?: Market.AsObject;
}

export const UpdateMarketFixedFeeForm = ({ market }: UpdateMarketFixedFeeFormProps): JSX.Element => {
  const [updateMarketFixedFee, { error: updateMarketFixedFeeError }] = useUpdateMarketFixedFeeMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    if (!market) return;
    updateMarketFixedFee({
      fixedFee: { quoteFee: data.fixedFee.quoteFee, baseFee: data.fixedFee.baseFee },
      market: market,
    });
    document.getElementById('update-market-fixed-fee-modal')?.click();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Base Fee</span>
        </label>
        <input
          type="number"
          className={classNames('input input-bordered', { 'mb-7': !errors.fixedFee?.baseFee?.message })}
          {...register('fixedFee.baseFee', { required: 'Base fee is required' })}
        />
        <ErrorMessage errors={errors} name="baseFee" as={<span className="text-sm mt-1 text-error" />} />

        <label className="label">
          <span className="label-text">Quote Fee</span>
        </label>
        <input
          type="number"
          className={classNames('input input-bordered', { 'mb-7': !errors.fixedFee?.quoteFee?.message })}
          {...register('fixedFee.quoteFee', { required: 'Quote fee is required' })}
        />
        <ErrorMessage errors={errors} name="quoteFee" as={<span className="text-sm mt-1 text-error" />} />

        {updateMarketFixedFeeError && <span className="text-sm text-error">{updateMarketFixedFeeError}</span>}
      </div>
      <button className="btn btn-secondary mt-4">Update Market Fixed Fee</button>
    </form>
  );
};
