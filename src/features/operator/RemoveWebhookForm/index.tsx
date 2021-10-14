import { ErrorMessage } from '@hookform/error-message';
import classNames from 'classnames';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { useRemoveWebhookMutation } from '../operator.api';

interface IFormInputs {
  id: string;
}

export const RemoveWebhookForm = (): JSX.Element => {
  const [removeWebhook, { error: removeWebhookError }] = useRemoveWebhookMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    removeWebhook({ id: data.id });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Webhook Id</span>
        </label>
        <input
          type="text"
          className={classNames('input input-bordered', { 'mb-7': !errors.id?.message })}
          {...register('id', { required: 'Id is required' })}
        />
        <ErrorMessage errors={errors} name="id" as={<span className="text-sm mt-1 text-error" />} />

        {removeWebhookError && <span className="text-sm text-error">{removeWebhookError}</span>}
      </div>
      <button className="btn btn-secondary mt-4">Remove Webhook</button>
    </form>
  );
};
