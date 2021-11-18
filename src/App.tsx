import React, { useEffect, useState } from 'react';

import Shell from './common/Shell';
import { UnlockModalForm } from './features/walletUnlocker/UnlockModalForm';
import { useIsReadyQuery } from './features/walletUnlocker/walletUnlocker.api';
import { Routes } from './routes';

export const App = (): JSX.Element => {
  const { data: isReady } = useIsReadyQuery();
  // UnlockWallet Modal
  const [isUnlockWalletModalVisible, setIsUnlockWalletModalVisible] = useState(false);
  const showUnlockWalletModal = () => setIsUnlockWalletModalVisible(true);
  const handleUnlockWalletModalCancel = () => setIsUnlockWalletModalVisible(false);

  useEffect(() => {
    if (isReady && !isReady.isUnlocked && isReady.isInitialized) showUnlockWalletModal();
  }, [isReady]);

  useEffect(() => {
    document.addEventListener('keypress', function (event) {
      if (event.metaKey && event.key === 'c') {
        document.execCommand('copy');
        event.preventDefault();
      }
      if (event.metaKey && event.key === 'v') {
        document.execCommand('paste');
        event.preventDefault();
      }
    });
  }, []);

  return (
    <>
      <Shell>
        <Routes />
      </Shell>
      <UnlockModalForm
        closable={false}
        handleUnlockWalletModalCancel={handleUnlockWalletModalCancel}
        isUnlockWalletModalVisible={isUnlockWalletModalVisible}
      />
    </>
  );
};
