import { ErrorMessage } from '@hookform/error-message';
import classNames from 'classnames';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { useWithdrawFeeMutation } from '../operator.api';

interface IFormInputs {
  amount: number;
  millisatsPerByte: number;
  address: string;
  asset: string;
}

export const WithdrawFeeForm = (): JSX.Element => {
  const [withdrawFee, { error: withdrawFeeError }] = useWithdrawFeeMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    withdrawFee({
      amount: data.amount,
      millisatsPerByte: data.millisatsPerByte,
      address: data.address,
      asset: data.asset,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Amount</span>
        </label>
        <input
          type="number"
          className={classNames('input input-bordered', { 'mb-7': !errors.amount?.message })}
          {...register('amount', { required: 'Amount is required' })}
        />
        <ErrorMessage errors={errors} name="amount" as={<span className="text-sm mt-1 text-error" />} />

        <label className="label">
          <span className="label-text">Millisats Per Byte</span>
        </label>
        <input
          type="number"
          className={classNames('input input-bordered', { 'mb-7': !errors.millisatsPerByte?.message })}
          {...register('millisatsPerByte', { required: 'millisatsPerByte is required' })}
        />
        <ErrorMessage
          errors={errors}
          name="millisatsPerByte"
          as={<span className="text-sm mt-1 text-error" />}
        />

        <label className="label">
          <span className="label-text">Address</span>
        </label>
        <input
          type="text"
          className={classNames('input input-bordered', { 'mb-7': !errors.address?.message })}
          {...register('address', { required: 'Address is required' })}
        />
        <ErrorMessage errors={errors} name="address" as={<span className="text-sm mt-1 text-error" />} />

        <label className="label">
          <span className="label-text">Asset</span>
        </label>
        <input
          type="text"
          className={classNames('input input-bordered', {
            'mb-7': !errors.asset?.message && !withdrawFeeError,
          })}
          {...register('asset', {
            required: 'Asset is required',
          })}
        />
        <ErrorMessage errors={errors} name="quoteAsset" as={<span className="text-sm mt-1 text-error" />} />
        {withdrawFeeError && <span className="text-sm text-error">{withdrawFeeError}</span>}
      </div>
      <button className="btn btn-secondary mt-4">New Market</button>
    </form>
  );
};
