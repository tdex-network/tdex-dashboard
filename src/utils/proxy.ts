import type { Dispatch } from '@reduxjs/toolkit';
import type { ChildProcess } from '@tauri-apps/api/shell';
import { Command } from '@tauri-apps/api/shell';

import { setProxyPid } from '../features/settings/settingsSlice';

export const startProxySidecar = async (dispatch: Dispatch): Promise<void> => {
  const command = Command.sidecar('bin/grpcproxy');
  command.on('close', (data: ChildProcess) => {
    console.log(`grpcproxy command finished with code ${data.code} and signal ${data.signal}`);
  });
  command.on('error', (error) => console.error(`grpcproxy command error: "${error}"`));
  command.stdout.on('data', (line) => console.log(`grpcproxy command stdout: "${line}"`));
  command.stderr.on('data', (line) => console.log(`grpcproxy command stderr: "${line}"`));
  // Set pid in ref to avoid running the function multiple times
  const child = await command.spawn();
  // Persist pid in storage to keep it after app reloads
  dispatch(setProxyPid(child.pid));
  console.debug('Proxy pid:', child.pid);
};
