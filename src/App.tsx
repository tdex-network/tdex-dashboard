import { Command } from '@tauri-apps/api/shell';
import React, { useCallback, useEffect, useState } from 'react';

import { useTypedDispatch, useTypedSelector } from './app/store';
import { ServiceUnavailableModal } from './common/ServiceUnavailableModal';
import Shell from './common/Shell';
import { connectProxy, healthCheckProxy, setProxyHealth } from './features/settings/settingsSlice';
import { useIsReadyQuery } from './features/walletUnlocker/walletUnlocker.api';
import { useInterval } from './hooks/useInterval';
import { Routes } from './routes';
import { sleep } from './utils';

export const App = (): JSX.Element => {
  const dispatch = useTypedDispatch();
  const { useProxy, proxyHealth } = useTypedSelector(({ settings }) => settings);
  const { macaroonCredentials, tdexdConnectUrl } = useTypedSelector(({ settings }) => settings);
  const [isServiceUnavailableModalVisible, setIsServiceUnavailableModalVisible] = useState<boolean>(false);
  const {
    data: isReady,
    error: isReadyError,
    isLoading: isReadyLoading,
    isUninitialized: isReadyUninitialized,
  } = useIsReadyQuery();

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

  const startProxy = async () => {
    const command = Command.sidecar('grpcproxy');
    command.on('close', (data) => {
      console.log(`grpcproxy command finished with code ${data.code} and signal ${data.signal}`);
    });
    command.on('error', (error) => console.error(`grpcproxy command error: "${error}"`));
    command.stdout.on('data', (line) => console.log(`grpcproxy command stdout: "${line}"`));
    command.stderr.on('data', (line) => console.log(`grpcproxy command stderr: "${line}"`));
    const child = await command.spawn();
    console.log('Proxy pid:', child.pid);
  };

  const startAndConnectToProxy = useCallback(async () => {
    console.log('startAndConnectToProxy');
    if (useProxy && proxyHealth !== 'SERVING') {
      // Start proxy
      await startProxy();
      // Health check
      const { desc } = await dispatch(healthCheckProxy()).unwrap();
      if (desc === 'SERVING_NOT_CONNECTED') {
        // If onboarded, try to connect to proxy
        if (macaroonCredentials && tdexdConnectUrl) {
          // Connect
          await dispatch(connectProxy()).unwrap();
          // Recheck health status
          const { desc } = await dispatch(healthCheckProxy()).unwrap();
          if (desc === 'SERVING') {
            console.log('gRPC Proxy:', desc);
          } else {
            console.log('gRPC Proxy:', desc);
          }
        }
        // If the HTTP call fails
      } else if (desc === 'NOT_SERVING') {
        console.error('gRPC Proxy:', desc);
      }
    }
  }, [dispatch, macaroonCredentials, proxyHealth, tdexdConnectUrl, useProxy]);

  // Update health proxy status every x seconds
  // Try to restart proxy if 'Load failed' error
  useInterval(() => {
    if (useProxy) {
      (async () => {
        try {
          const health = await dispatch(healthCheckProxy()).unwrap();
          console.log('health status:', health);
          console.log('isReady', isReady);
          console.log('isReadyLoading', isReadyLoading);
          console.log('isReadyError', isReadyError);
          console.log('isReadyUninitialized', isReadyUninitialized);
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
  }, 5_000);

  // Start and connect to gRPC proxy
  useEffect(() => {
    if (useProxy) {
      (async () => {
        const startAndConnectToProxyRetry = async (retryCount = 0, lastError?: string): Promise<void> => {
          if (retryCount > 5) throw new Error(lastError);
          try {
            await startAndConnectToProxy();
          } catch (err) {
            await sleep(2000);
            // @ts-ignore
            await startAndConnectToProxyRetry(retryCount + 1, err);
          }
        };
        try {
          console.log('startAndConnectToProxyRetry');
          await startAndConnectToProxyRetry();
        } catch (err) {
          console.error('startAndConnectToProxyRetry error', err);
        }
      })();
    }
  }, [proxyHealth, startAndConnectToProxy, useProxy]);

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
