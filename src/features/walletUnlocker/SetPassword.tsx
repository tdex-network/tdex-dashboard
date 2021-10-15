import { ErrorMessage } from '@hookform/error-message';
import classNames from 'classnames';
import React, { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { SHOW_SEED_ROUTE } from '../../routes/constants';

interface IFormInputs {
  password: string;
  passwordConfirm: string;
}

export const SetPassword = (): JSX.Element => {
  return (
    <>
      <h2>Choose A Password</h2>
      <PasswordForm />
    </>
  );
};

export const PasswordForm = (): JSX.Element => {
  const [hasMatchingError, setHasMatchingError] = useState<boolean>(false);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    if (data.password === data.passwordConfirm) {
      setHasMatchingError(false);
      history.push(SHOW_SEED_ROUTE, { password: data.password });
    } else {
      setHasMatchingError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="password"
          className={classNames('input input-bordered', { 'mb-7': !errors.password?.message })}
          {...register('password', {
            required: 'Password is required',
            minLength: { value: 8, message: 'Should have minimum length of 8 chars' },
          })}
        />
        <ErrorMessage errors={errors} name="password" as={<span className="text-sm mt-1 text-error" />} />

        <label className="label">
          <span className="label-text">Confirm Password</span>
        </label>
        <input
          type="password"
          placeholder="password"
          className={classNames('input input-bordered', {
            'mb-7': !errors.passwordConfirm?.message && !hasMatchingError,
          })}
          {...register('passwordConfirm', {
            required: 'Password is required',
            minLength: { value: 8, message: 'Should have minimum length of 8 chars' },
          })}
        />
        <ErrorMessage
          errors={errors}
          name="passwordConfirm"
          as={<span className="text-sm mt-1 text-error" />}
        />
        {hasMatchingError && <span className="text-sm text-error">Passwords don't match</span>}
      </div>
      <button className="btn btn-secondary mt-4">Set Password</button>
    </form>
  );
};
