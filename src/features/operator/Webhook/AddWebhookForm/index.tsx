import { ErrorMessage } from '@hookform/error-message';
import classNames from 'classnames';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import type { ActionType } from '../../../../api-spec/generated/js/operator_pb';
import { useAddWebhookMutation } from '../../operator.api';

interface IFormInputs {
  action: ActionType;
  endpoint: string;
  secret: string;
}

export const AddWebhookForm = (): JSX.Element => {
  const [addWebhook, { error: addWebhookError }] = useAddWebhookMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    addWebhook({ action: data.action, endpoint: data.endpoint, secret: data.secret });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <select className="select select-bordered select-accent w-full max-w-xs">
          <option disabled selected>
            Action
          </option>
          <option>ActionType[0]</option>
          <option>ActionType[1]</option>
          <option>ActionType[2]</option>
        </select>

        <label className="label">
          <span className="label-text">Endpoint</span>
        </label>
        <input
          type="text"
          className={classNames('input input-bordered', {
            'mb-7': !errors.endpoint?.message,
          })}
          {...register('endpoint', {
            required: 'Endpoint is required',
          })}
        />
        <ErrorMessage errors={errors} name="endpoint" as={<span className="text-sm mt-1 text-error" />} />

        <label className="label">
          <span className="label-text">Secret</span>
        </label>
        <input
          type="text"
          className={classNames('input input-bordered', {
            'mb-7': !errors.secret?.message && !addWebhookError,
          })}
          {...register('secret', {
            required: 'Secret is required',
          })}
        />
        <ErrorMessage errors={errors} name="secret" as={<span className="text-sm mt-1 text-error" />} />

        {addWebhookError && <span className="text-sm text-error">{addWebhookError}</span>}
      </div>
      <button className="btn btn-secondary mt-4">Add Webhook</button>
    </form>
  );
};
