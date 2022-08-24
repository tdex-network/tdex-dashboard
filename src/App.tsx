import { once } from '@tauri-apps/api/event';
import { exit } from '@tauri-apps/api/process';
import type { ChildProcess } from '@tauri-apps/api/shell';
import { Child, Command } from '@tauri-apps/api/shell';
import { notification } from 'antd';
import React, { useCallback, useEffect, useRef, useState } from 'react';

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

export const App = (): JSX.Element => {
  const dispatch = useTypedDispatch();
  const { useProxy, isTauri, proxyHealth, proxyPid, tdexdConnectUrl } = useTypedSelector(
    ({ settings }: RootState) => settings
  );
  const [isExiting, setIsExiting] = useState<boolean>(false);
  const proxyChildProcess = useRef<Child | null>(null);

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

  const startProxy = useCallback(async () => {
    if (!proxyPid) {
      const command = Command.sidecar('bin/grpcproxy');
      command.on('close', (data: ChildProcess) => {
        console.log(`grpcproxy command finished with code ${data.code} and signal ${data.signal}`);
      });
      command.on('error', (error) => console.error(`grpcproxy command error: "${error}"`));
      command.stdout.on('data', (line) => console.log(`grpcproxy command stdout: "${line}"`));
      command.stderr.on('data', (line) => console.log(`grpcproxy command stderr: "${line}"`));
      // Set pid in ref to avoid running the function multiple times
      proxyChildProcess.current = (await command.spawn()) ?? null;
      // Persist pid in storage to keep it after app reloads
      dispatch(setProxyPid(proxyChildProcess.current.pid));
      console.debug('Proxy pid:', proxyChildProcess.current.pid);
    }
  }, [dispatch, proxyPid]);

  const startupProxy = useCallback(async () => {
    if (useProxy && proxyHealth !== 'SERVING' && !isExiting) {
      if (isTauri) {
        await startProxy();
      }
    }
  }, [useProxy, proxyHealth, isExiting, isTauri, startProxy]);

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
              await startProxy();
            } catch (err) {
              console.log('Restart failure', err);
            }
          }
        }
      })();
    }
  }, 125);

  // Start and connect to gRPC proxy
  useEffect(() => {
    if (useProxy && !isExiting) {
      (async () => {
        const startupProxyRetry = async (retryCount = 0, lastError?: string): Promise<void> => {
          if (retryCount > 5) throw new Error(lastError);
          try {
            await startupProxy();
          } catch (err) {
            await sleep(2000);
            // @ts-ignore
            await startupProxyRetry(retryCount + 1, err);
          }
        };
        try {
          await startupProxyRetry();
        } catch (err) {
          console.error('startupProxyRetry error', err);
          notification.error({
            message: 'Service is not available or credentials are wrong',
            key: 'service unavailable',
          });
        }
      })();
    }
  }, [isExiting, proxyHealth, startupProxy, useProxy]);

  useEffect(() => {
    if (useProxy) {
      (async () => {
        if (tdexdConnectUrl) {
          await dispatch(connectProxy()).unwrap();
        } else {
          const { desc } = await dispatch(healthCheckProxy()).unwrap();
          if (desc === 'SERVING') {
            await dispatch(disconnectProxy()).unwrap();
          }
        }
      })();
    }
  }, [useProxy, tdexdConnectUrl, dispatch]);

  return (
    <>
      <Shell>
        <Routes />
      </Shell>
    </>
  );
};
