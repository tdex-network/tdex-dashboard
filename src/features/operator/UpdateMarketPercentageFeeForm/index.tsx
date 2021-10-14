import { ErrorMessage } from '@hookform/error-message';
import classNames from 'classnames';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import type { Market } from '../../../api-spec/generated/js/types_pb';
import { useUpdateMarketPercentageFeeMutation } from '../operator.api';

interface IFormInputs {
  basisPoint: number;
}

interface UpdateMarketPercentageFeeFormProps {
  market?: Market.AsObject;
}

export const UpdateMarketPercentageFeeForm = ({
  market,
}: UpdateMarketPercentageFeeFormProps): JSX.Element => {
  const [updateMarketPercentageFee, { error: updateMarketPercentageFeeError }] =
    useUpdateMarketPercentageFeeMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    if (!market) return;
    updateMarketPercentageFee({ basisPoint: data.basisPoint, market: market });
    document.getElementById('update-market-percentage-fee-modal')?.click();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Basis Point</span>
        </label>
        <input
          type="number"
          className={classNames('input input-bordered', { 'mb-7': !errors.basisPoint?.message })}
          {...register('basisPoint', { required: 'Basis point is required' })}
        />
        <ErrorMessage errors={errors} name="basisPoint" as={<span className="text-sm mt-1 text-error" />} />
        {updateMarketPercentageFeeError && (
          <span className="text-sm text-error">{updateMarketPercentageFeeError}</span>
        )}
      </div>
      <button className="btn btn-secondary mt-4">Update Market Percentage Fee</button>
    </form>
  );
};
