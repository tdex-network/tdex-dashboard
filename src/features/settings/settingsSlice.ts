import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { Metadata } from 'grpc-web';

import { OperatorClient } from '../../api-spec/generated/js/OperatorServiceClientPb';
import { WalletClient } from '../../api-spec/generated/js/WalletServiceClientPb';
import { WalletUnlockerClient } from '../../api-spec/generated/js/WalletunlockerServiceClientPb';
import type { RootState } from '../../app/store';

export interface SettingsState {
  gateDaemonEndpoint: string;
  macaroonCredentials?: string; // macaroon credentials hex encoded
  chain: 'liquid' | 'regtest';
}

export const initialState: SettingsState = {
  gateDaemonEndpoint: 'http://localhost:9000',
  chain: 'regtest',
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setGateDaemonEndpoint: (state, action: PayloadAction<string>) => {
      state.gateDaemonEndpoint = action.payload;
    },
    setMacaroonCredentials: (state, action: PayloadAction<string | undefined>) => {
      state.macaroonCredentials = action.payload;
    },
    resetSettings: () => initialState,
  },
});

export function selectChain(state: RootState): 'liquid' | 'regtest' {
  return state.settings.chain;
}

export function selectGateEndpoint(state: RootState): string {
  return state.settings.gateDaemonEndpoint;
}

export function selectMacaroonCreds(state: RootState): Metadata | null {
  if (state.settings.macaroonCredentials) {
    return {
      macaroon: state.settings.macaroonCredentials,
    };
  }
  return null;
}

export function selectOperatorClient(state: RootState): OperatorClient {
  return new OperatorClient(selectGateEndpoint(state));
}

export function selectWalletClient(state: RootState): WalletClient {
  return new WalletClient(selectGateEndpoint(state));
}

export function selectWalletUnlockerClient(state: RootState): WalletUnlockerClient {
  return new WalletUnlockerClient(selectGateEndpoint(state));
}

export const { setGateDaemonEndpoint, setMacaroonCredentials, resetSettings } = settingsSlice.actions;

export default settingsSlice.reducer;
