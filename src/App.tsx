import { PlusOutlined } from '@ant-design/icons';
import { once } from '@tauri-apps/api/event';
import { exit } from '@tauri-apps/api/process';
import { Child } from '@tauri-apps/api/shell';
import { notification } from 'antd';
import React, { useEffect, useState } from 'react';

import type { RootState } from './app/store';
import { useTypedDispatch, useTypedSelector } from './app/store';
import Shell from './common/Shell';
import {
  connectProxy,
  disconnectProxy,
  healthCheckProxy,
  setProxyHealth,
  setProxyPid,
} from './features/settings/settingsSlice';
import { useExponentialInterval } from './hooks/useExponentialInterval';
import { Routes } from './routes';
import { sleep } from './utils';
import { startProxySidecar } from './utils/proxy';

export const App = (): JSX.Element => {
  const dispatch = useTypedDispatch();
  const { useProxy, tdexdConnectUrl, isTauri, proxyHealth, proxyPid } = useTypedSelector(
    ({ settings }: RootState) => settings
  );
  const [isExiting, setIsExiting] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      // Enable copy/paste on Tauri app
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

      if (isTauri) {
        // Register close app event for cleanup
        await once('quit-event', async () => {
          try {
            console.debug('quitting...');
            setIsExiting(true);
          } catch (err) {
            console.error('err', err);
          }
        });
      }

      notification.config({
        closeIcon: <PlusOutlined />,
      });
    })();
    // eslint-disable-next-line
  }, []);

  // Exit after cleanup
  useEffect(() => {
    (async () => {
      if (proxyPid && isExiting) {
        dispatch(setProxyHealth('NOT_SERVING'));
        dispatch(setProxyPid(undefined));
        // Need to sleep the time to write in persistent storage
        await sleep(500);
        const proxyChildProcess = new Child(proxyPid);
        await proxyChildProcess.kill();
        await exit();
      }
    })();
  }, [dispatch, isExiting, proxyHealth, proxyPid]);

  // Update health proxy status every x seconds
  // Try to restart proxy if 'Load failed' error
  useExponentialInterval(() => {
    if (useProxy && proxyPid && !isExiting) {
      (async () => {
        try {
          await dispatch(healthCheckProxy()).unwrap();
        } catch (err) {
          // Restart proxy
          if (err === 'Load failed') {
            try {
              // Reset proxyHealth manually because healthCheckProxy thunk is throwing before setting it
              dispatch(setProxyHealth(undefined));
              console.log('Restart proxy');
              await startProxySidecar(dispatch, proxyPid);
            } catch (err) {
              console.log('Restart failure', err);
            }
          }
        }
      })();
    }
  }, 125);

  // Connect/Disconnect proxy
  useEffect(() => {
    (async () => {
      if (useProxy) {
        if (proxyHealth !== 'SERVING' && !isExiting) {
          await startProxySidecar(dispatch, proxyPid);
        }
        if (tdexdConnectUrl) {
          await dispatch(connectProxy()).unwrap();
        } else {
          const { desc } = await dispatch(healthCheckProxy()).unwrap();
          if (desc === 'SERVING') {
            await dispatch(disconnectProxy()).unwrap();
          }
        }
      }
    })();
  }, [useProxy, tdexdConnectUrl, dispatch, proxyPid, proxyHealth, isExiting]);

  return (
    <>
      <Shell>
        <Routes />
      </Shell>
    </>
  );
};
