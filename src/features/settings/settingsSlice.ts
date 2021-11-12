import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { Metadata } from 'grpc-web';

import { OperatorClient } from '../../api-spec/generated/js/OperatorServiceClientPb';
import { WalletClient } from '../../api-spec/generated/js/WalletServiceClientPb';
import { WalletUnlockerClient } from '../../api-spec/generated/js/WalletunlockerServiceClientPb';
import type { RootState } from '../../app/store';
import type { Asset } from '../../domain/asset';
import { featuredAssets } from '../../utils';

export interface SettingsState {
  chain: 'liquid' | 'regtest';
  explorerLiquidAPI: string;
  explorerLiquidUI: string;
  tdexDaemonEndpoint: string;
  assets: Asset[];
  macaroonCredentials?: string;
  tdexdConnectUrl?: string;
}

export const initialState: SettingsState = {
  chain: 'regtest',
  explorerLiquidAPI: 'https://blockstream.info/liquid/api',
  explorerLiquidUI: 'https://blockstream.info/liquid',
  tdexDaemonEndpoint: 'https://localhost:9000',
  assets: featuredAssets,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    saveAsset: (state, action: PayloadAction<Asset>) => {
      // Save if asset not already saved
      if (state.assets.some((a) => a.asset_id !== action.payload.asset_id)) {
        state.assets = [...state.assets, action.payload];
      }
    },
    setTdexDaemonEndpoint: (state, action: PayloadAction<string>) => {
      state.tdexDaemonEndpoint = action.payload;
    },
    setMacaroonCredentials: (state, action: PayloadAction<string | undefined>) => {
      state.macaroonCredentials = action.payload;
    },
    setTdexdConnectUrl: (state, action: PayloadAction<string | undefined>) => {
      state.tdexdConnectUrl = action.payload;
    },
    logout: (state) => {
      state.macaroonCredentials = undefined;
      state.tdexdConnectUrl = undefined;
    },
    resetSettings: () => initialState,
  },
});

export function selectChain(state: RootState): 'liquid' | 'regtest' {
  return state.settings.chain;
}

export function selectTdexEndpoint(state: RootState): string {
  return state.settings.tdexDaemonEndpoint;
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
  return new OperatorClient(selectTdexEndpoint(state));
}

export function selectWalletClient(state: RootState): WalletClient {
  return new WalletClient(selectTdexEndpoint(state));
}

export function selectWalletUnlockerClient(state: RootState): WalletUnlockerClient {
  return new WalletUnlockerClient(selectTdexEndpoint(state));
}

export const {
  setTdexDaemonEndpoint,
  setMacaroonCredentials,
  setTdexdConnectUrl,
  resetSettings,
  logout,
  saveAsset,
} = settingsSlice.actions;

export default settingsSlice.reducer;
