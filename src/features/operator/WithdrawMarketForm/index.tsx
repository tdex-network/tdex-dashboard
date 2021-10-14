import { ErrorMessage } from '@hookform/error-message';
import classNames from 'classnames';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import type { Balance, Market } from '../../../api-spec/generated/js/types_pb';
import { useWithdrawMarketMutation } from '../operator.api';

interface IFormInputs {
  market: Market.AsObject;
  balance: Balance.AsObject;
  address: string;
  millisatPerByte: number;
}

interface WithdrawMarketFormProps {
  market?: Market.AsObject;
}

export const WithdrawMarketForm = ({ market }: WithdrawMarketFormProps): JSX.Element => {
  const [withdrawMarket, { error: withdrawMarketError }] = useWithdrawMarketMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    if (!market) return;
    withdrawMarket({
      market: market,
      balance: { baseAmount: data.balance.baseAmount, quoteAmount: data.balance.quoteAmount },
      address: data.address,
      millisatPerByte: data.millisatPerByte,
    });
    document.getElementById('withdraw-market-modal')?.click();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Balance</span>
        </label>
        <input
          type="number"
          className={classNames('input input-bordered', { 'mb-7': !errors.balance?.baseAmount?.message })}
          {...register('balance', { required: 'Balance is required' })}
        />
        <ErrorMessage errors={errors} name="amount" as={<span className="text-sm mt-1 text-error" />} />

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
          <span className="label-text">Millisats Per Byte</span>
        </label>
        <input
          type="number"
          className={classNames('input input-bordered', {
            'mb-7': !errors.millisatPerByte?.message && !withdrawMarketError,
          })}
          {...register('millisatPerByte', { required: 'millisatPerByte is required' })}
        />
        <ErrorMessage
          errors={errors}
          name="millisatPerByte"
          as={<span className="text-sm mt-1 text-error" />}
        />
        {withdrawMarketError && <span className="text-sm text-error">{withdrawMarketError}</span>}
      </div>
      <button className="btn btn-secondary mt-4">Withdraw Market</button>
    </form>
  );
};
