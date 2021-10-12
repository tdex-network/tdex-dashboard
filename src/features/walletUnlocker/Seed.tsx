import {
  useGenSeedQuery,
  useInitWalletMutation,
  useIsReadyQuery,
  useUnlockWalletMutation,
} from './walletUnlocker.api';

export const Seed = (): JSX.Element => {
  const { data: seedMnemonicList, error: genSeedError } = useGenSeedQuery();
  const { data: isReady, error: isReadyError } = useIsReadyQuery();
  const [unlockWallet, { error: unlockWalletError }] = useUnlockWalletMutation();
  const [initWallet, { error: initWalletError }] = useInitWalletMutation();

  const handleInitWallet = async () => {
    await initWallet({
      isRestore: false,
      password: 'aaaa',
      mnemonic: seedMnemonicList || [],
    });
    const res = await unlockWallet({ password: 'aaaa' });
    console.log('res', res);
    console.log('//isReady', isReady);
  };

  return (
    <>
      <ul>
        {seedMnemonicList?.map((word: string, index: number) => (
          <li className="inline-block mx-2 list-none" key={index}>{`${index + 1}. ${word}`}</li>
        ))}
      </ul>
      {genSeedError && <p>{genSeedError}</p>}
      {isReadyError && <p>{isReadyError}</p>}
      {unlockWalletError && <p>{unlockWalletError}</p>}
      {initWalletError && <p>{initWalletError}</p>}

      <button className="btn btn-secondary" onClick={handleInitWallet}>
        Initialized Wallet
      </button>
    </>
  );
};
