import { ErrorMessage } from '@hookform/error-message';
import classNames from 'classnames';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { useChangePasswordMutation } from './walletUnlocker.api';

interface IFormInputs {
  currentPassword: string;
  newPassword: string;
}

export const ChangePassword = (): JSX.Element => {
  return (
    <>
      <h2>Change Password</h2>
      <ChangePasswordForm />
    </>
  );
};

export const ChangePasswordForm = (): JSX.Element => {
  const [changePassword, { error: changePasswordError }] = useChangePasswordMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    changePassword({ currentPassword: data.currentPassword, newPassword: data.newPassword });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Current Password</span>
        </label>
        <input
          type="password"
          placeholder="password"
          className={classNames('input input-bordered', { 'mb-7': !errors.currentPassword?.message })}
          {...register('currentPassword', {
            required: 'Password is required',
            minLength: { value: 8, message: 'Should have minimum length of 8 chars' },
          })}
        />
        <ErrorMessage
          errors={errors}
          name="currentPassword"
          as={<span className="text-sm mt-1 text-error" />}
        />

        <label className="label">
          <span className="label-text">New Password</span>
        </label>
        <input
          type="password"
          placeholder="password"
          className={classNames('input input-bordered', {
            'mb-7': !errors.newPassword?.message && !changePasswordError,
          })}
          {...register('newPassword', {
            required: 'Password is required',
            minLength: { value: 8, message: 'Should have minimum length of 8 chars' },
          })}
        />
        <ErrorMessage errors={errors} name="newPassword" as={<span className="text-sm mt-1 text-error" />} />
        {changePasswordError && <span className="text-sm text-error">{changePasswordError}</span>}
      </div>
      <button className="btn btn-secondary mt-4">Set Password</button>
    </form>
  );
};
