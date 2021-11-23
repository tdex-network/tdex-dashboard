import { Command } from '@tauri-apps/api/shell';
import React, { useEffect } from 'react';

import { useTypedDispatch, useTypedSelector } from './app/store';
import Shell from './common/Shell';
import { connectProxy } from './features/settings/settingsSlice';
import { Routes } from './routes';

export const App = (): JSX.Element => {
  const dispatch = useTypedDispatch();
  const useProxy = useTypedSelector(({ settings }) => settings.useProxy);
  const tdexdConnectUrl = useTypedSelector(({ settings }) => settings.tdexdConnectUrl);

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

  useEffect(() => {
    (async () => {
      if (useProxy && !tdexdConnectUrl) {
        await Command.sidecar('grpcproxy').spawn();
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (useProxy && tdexdConnectUrl) {
        dispatch(connectProxy());
      }
    })();
  }, [tdexdConnectUrl]);

  return (
    <>
      <Shell>
        <Routes />
      </Shell>
    </>
  );
};
