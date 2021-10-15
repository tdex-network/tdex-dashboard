import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { HOME_ROUTE } from '../../routes/constants';

import {
  useGenSeedQuery,
  useInitWalletMutation,
  useIsReadyQuery,
  useUnlockWalletMutation,
} from './walletUnlocker.api';

export const ShowSeed = (): JSX.Element => {
  const [unlockWallet, { error: unlockWalletError }] = useUnlockWalletMutation();
  const [initWallet, { error: initWalletError }] = useInitWalletMutation();
  const { data: seedMnemonicList, error: genSeedError } = useGenSeedQuery();
  const { data: isReady } = useIsReadyQuery();
  const { state } = useLocation<{ password: string }>();
  const history = useHistory();

  const handleInitWallet = async () => {
    if (isReady?.isInitialized) {
      console.log('Wallet already initialized');
      return;
    }
    console.log('loading...');
    // @ts-ignore
    const { data } = await initWallet({
      isRestore: false,
      password: state.password,
      mnemonic: seedMnemonicList || [],
    });
    data.on('status', async (status: any) => {
      if (status.code === 0) {
        await unlockWallet({ password: state.password });
        history.push(HOME_ROUTE);
      } else {
        console.log('status', status);
      }
    });
  };

  return (
    <>
      <h2>Save Your Mnemonic</h2>
      <SeedMnemonicList seed={seedMnemonicList} />
      <button className="mt-8 btn btn-secondary" onClick={handleInitWallet}>
        Initialized Wallet
      </button>
      {unlockWalletError && <p>{unlockWalletError}</p>}
      {initWalletError && <p>{initWalletError}</p>}
      {genSeedError && <p>{genSeedError}</p>}
    </>
  );
};

export const SeedMnemonicList = ({ seed }: { seed?: string[] }): JSX.Element => {
  return (
    <>
      <ul>
        {seed?.map((word: string, index: number) => (
          <li className="inline-block mx-2 list-none" key={index}>{`${index + 1}. ${word}`}</li>
        ))}
      </ul>
    </>
  );
};
