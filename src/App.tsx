import { Command } from '@tauri-apps/api/shell';
import React, { useEffect, useState } from 'react';

import { useTypedDispatch, useTypedSelector } from './app/store';
import Shell from './common/Shell';
import { connectProxy } from './features/settings/settingsSlice';
import { Routes } from './routes';

export const App = (): JSX.Element => {
  const dispatch = useTypedDispatch();
  const useProxy = useTypedSelector(({ settings }) => settings.useProxy);
  const tdexdConnectUrl = useTypedSelector(({ settings }) => settings.tdexdConnectUrl);
  const [proxyIsRunning, setProxyIsRunning] = useState<boolean>(false);

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

  return (
    <>
      <Shell>
        <Routes />
      </Shell>
    </>
  );
};
