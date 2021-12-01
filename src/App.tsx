import { Command } from '@tauri-apps/api/shell';
import React, { useEffect, useState } from 'react';

import { useTypedDispatch, useTypedSelector } from './app/store';
import { ServiceUnavailableModal } from './common/ServiceUnavailableModal';
import Shell from './common/Shell';
import { connectProxy } from './features/settings/settingsSlice';
import { Routes } from './routes';

export const App = (): JSX.Element => {
  const dispatch = useTypedDispatch();
  const useProxy = useTypedSelector(({ settings }) => settings.useProxy);
  const { macaroonCredentials, tdexdConnectUrl } = useTypedSelector(({ settings }) => settings);
  const [proxyIsRunning, setProxyIsRunning] = useState<boolean>(false);
  const [isServiceUnavailableModalVisible, setIsServiceUnavailableModalVisible] = useState<boolean>(false);
  const { queries } = useTypedSelector(({ walletUnlockerService }) => walletUnlockerService);
  const isReadyError = queries['isReady(undefined)']?.error;

  // Enable copy/paste on Tauri app
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
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    (async () => {
      if (useProxy) {
        await Command.sidecar('grpcproxy').spawn();
        setProxyIsRunning(true);
      }
    })();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    (async () => {
      if (useProxy && tdexdConnectUrl && proxyIsRunning) {
        dispatch(connectProxy());
      }
    })();
  }, [tdexdConnectUrl, proxyIsRunning, useProxy, dispatch]);

  // If onboarded and isReady returns an error
  useEffect(() => {
    if (macaroonCredentials && tdexdConnectUrl && isReadyError) {
      setIsServiceUnavailableModalVisible(true);
    }
  }, [macaroonCredentials, tdexdConnectUrl, isReadyError]);

  return (
    <>
      <Shell>
        <Routes />
        <ServiceUnavailableModal
          isServiceUnavailableModalVisible={isServiceUnavailableModalVisible}
          setIsServiceUnavailableModalVisible={setIsServiceUnavailableModalVisible}
        />
      </Shell>
    </>
  );
};
