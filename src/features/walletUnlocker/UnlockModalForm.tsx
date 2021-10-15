import { ErrorMessage } from '@hookform/error-message';
import classNames from 'classnames';
import React, { useEffect } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { useUnlockWalletMutation } from './walletUnlocker.api';

interface IFormInputs {
  password: string;
}

export const UnlockModalForm = (): JSX.Element => {
  const [unlockWallet, { error: unlockWalletError, isLoading }] = useUnlockWalletMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  useEffect(() => {
    if (!isLoading && !unlockWalletError)
      (document.getElementById('unlock-modal') as HTMLInputElement).checked = false;
  }, [isLoading]);

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    await unlockWallet({ password: data.password });
  };

  return (
    <>
      <input type="checkbox" id="unlock-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="modal-action">
            <label htmlFor="unlock-modal" className="btn btn-accent">
              Close
            </label>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                className={classNames('input input-bordered', {
                  'mb-7': !errors.password?.message,
                })}
                {...register('password', {
                  required: 'Password is required',
                })}
              />
              <ErrorMessage
                errors={errors}
                name="password"
                as={<span className="text-sm mt-1 text-error" />}
              />
            </div>
            <button className="btn btn-secondary mt-4">Unlock Wallet</button>
            {unlockWalletError && <p className="text-sm text-error">{unlockWalletError}</p>}
          </form>
        </div>
      </div>
    </>
  );
};
