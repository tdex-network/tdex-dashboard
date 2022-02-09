import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Metadata } from 'grpc-web';
import type { NetworkString } from 'ldk';

import { OperatorClient } from '../../api-spec/generated/js/OperatorServiceClientPb';
import { WalletClient } from '../../api-spec/generated/js/WalletServiceClientPb';
import { WalletUnlockerClient } from '../../api-spec/generated/js/WalletunlockerServiceClientPb';
import { network } from '../../app/config';
import type { RootState } from '../../app/store';
import type { Asset } from '../../domain/asset';
import type { MarketLabelled } from '../../domain/market';
import type { LbtcUnit } from '../../utils';
import { featuredAssets, LBTC_UNITS } from '../../utils';

const USE_PROXY = '__TAURI__' in window || ('USE_PROXY' in window && Boolean((window as any).USE_PROXY));
const PROXY_URL = (window as any).PROXY_URL || 'http://localhost:3030';

const proxyHealthStatus = ['SERVING', 'SERVING_NOT_CONNECTED', 'NOT_SERVING'] as const;
export type ProxyHealthStatus = typeof proxyHealthStatus[number];
export const isProxyHealthStatus = (x: any): x is ProxyHealthStatus => proxyHealthStatus.includes(x);

export interface SettingsState {
  network: NetworkString;
  explorerLiquidAPI: string;
  explorerLiquidUI: string;
  explorersLiquidAPI: string[];
  explorersLiquidUI: string[];
  assets: Asset[];
  baseUrl: string;
  useProxy: boolean;
  marketsLabelled?: MarketLabelled[];
  macaroonCredentials?: string;
  tdexdConnectUrl?: string;
  lbtcUnit: LbtcUnit;
  proxyHealth?: ProxyHealthStatus;
}

export const connectProxy = createAsyncThunk<void, void, { state: RootState }>(
  'settings/connectProxy',
  async (_, thunkAPI) => {
    try {
      const { settings } = thunkAPI.getState();
      await fetch(settings.baseUrl + '/connect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: settings.tdexdConnectUrl }),
        mode: 'no-cors',
      });
    } catch (err) {
      if (err instanceof TypeError) {
        return thunkAPI.rejectWithValue(err.message);
      } else {
        // @ts-ignore
        return thunkAPI.rejectWithValue(err.response.data);
      }
    }
  }
);

export const disconnectProxy = createAsyncThunk<void, void, { state: RootState }>(
  'settings/disconnectProxy',
  async (_, thunkAPI) => {
    try {
      const { settings } = thunkAPI.getState();
      await fetch(settings.baseUrl + '/disconnect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
      });
    } catch (err) {
      if (err instanceof TypeError) {
        return thunkAPI.rejectWithValue(err.message);
      } else {
        // @ts-ignore
        return thunkAPI.rejectWithValue(err.response.data);
      }
    }
  }
);

export const healthCheckProxy = createAsyncThunk<
  { desc: ProxyHealthStatus; code: number },
  void,
  { state: RootState }
>('settings/healthCheckProxy', async (_, thunkAPI) => {
  try {
    const { settings } = thunkAPI.getState();
    const res = await fetch(settings.baseUrl + '/healthcheck', { method: 'GET' });
    const proxyHealth = JSON.parse(await res.text());
    thunkAPI.dispatch(setProxyHealth(proxyHealth.desc));
    return proxyHealth;
  } catch (err) {
    if (err instanceof TypeError) {
      return thunkAPI.rejectWithValue(err.message);
    } else {
      // @ts-ignore
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
});

export const initialState: SettingsState = {
  network: network.chain,
  explorerLiquidAPI: network.explorerLiquidAPI,
  explorersLiquidAPI: [
    'http://localhost:3001',
    'https://blockstream.info/liquidtestnet/api',
    'https://blockstream.info/liquid/api',
  ],
  explorersLiquidUI: [
    'http://localhost:5001',
    'https://blockstream.info/liquidtestnet',
    'https://blockstream.info/liquid',
  ],
  explorerLiquidUI: network.explorerLiquidUI,
  baseUrl: USE_PROXY ? PROXY_URL : network.tdexdBaseUrl,
  assets: featuredAssets[network.chain as NetworkString],
  useProxy: USE_PROXY,
  lbtcUnit: LBTC_UNITS[0],
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    addExplorerLiquidAPI: (state, action: PayloadAction<string>) => {
      if (!state.explorersLiquidAPI.includes(action.payload)) {
        state.explorersLiquidAPI = [...state.explorersLiquidAPI, action.payload];
      }
    },
    addExplorerLiquidUI: (state, action: PayloadAction<string>) => {
      if (!state.explorersLiquidUI.includes(action.payload)) {
        state.explorersLiquidUI = [...state.explorersLiquidUI, action.payload];
      }
    },
    setExplorerLiquidAPI: (state, action: PayloadAction<string>) => {
      state.explorerLiquidAPI = action.payload;
    },
    setExplorerLiquidUI: (state, action: PayloadAction<string>) => {
      state.explorerLiquidUI = action.payload;
    },
    setNetwork: (state, action: PayloadAction<NetworkString>) => {
      state.network = action.payload;
      state.assets = [...state.assets, ...featuredAssets[action.payload]];
    },
    setLbtcUnit: (state, action: PayloadAction<LbtcUnit>) => {
      state.lbtcUnit = action.payload;
    },
    saveAsset: (state, action: PayloadAction<Asset>) => {
      // Save if asset not already saved
      if (state.assets.some((a) => a.asset_id !== action.payload.asset_id)) {
        state.assets = [...state.assets, action.payload];
      }
    },
    setMarketLabelled: (state, action: PayloadAction<MarketLabelled>) => {
      state.marketsLabelled = [...(state.marketsLabelled || []), action.payload];
    },
    setBaseUrl: (state, action: PayloadAction<string>) => {
      if (!state.useProxy) {
        state.baseUrl = action.payload;
      }
    },
    setMacaroonCredentials: (state, action: PayloadAction<string | undefined>) => {
      state.macaroonCredentials = action.payload;
    },
    setTdexdConnectUrl: (state, action: PayloadAction<string | undefined>) => {
      state.tdexdConnectUrl = action.payload;
    },
    setProxyHealth: (state, action: PayloadAction<ProxyHealthStatus | undefined>) => {
      state.proxyHealth = action.payload;
    },
    logout: (state) => {
      state.macaroonCredentials = undefined;
      state.tdexdConnectUrl = undefined;
    },
    resetSettings: () => initialState,
  },
});

export function selectBaseUrl(state: RootState): string {
  return state.settings.baseUrl;
}

export function selectMacaroonCreds(state: RootState): Metadata | null {
  if (!state.settings.useProxy && state.settings.macaroonCredentials) {
    return {
      macaroon: state.settings.macaroonCredentials,
    };
  }
  return null;
}

export function selectMarketLabelled(state: RootState): MarketLabelled[] | undefined {
  return state.settings.marketsLabelled;
}

//
export function selectOperatorClient(state: RootState): OperatorClient {
  return new OperatorClient(selectBaseUrl(state));
}

export function selectWalletClient(state: RootState): WalletClient {
  return new WalletClient(selectBaseUrl(state));
}

export function selectWalletUnlockerClient(state: RootState): WalletUnlockerClient {
  return new WalletUnlockerClient(selectBaseUrl(state));
}

export const {
  addExplorerLiquidAPI,
  addExplorerLiquidUI,
  setExplorerLiquidAPI,
  setExplorerLiquidUI,
  setNetwork,
  setLbtcUnit,
  setBaseUrl,
  setMacaroonCredentials,
  setTdexdConnectUrl,
  setProxyHealth,
  resetSettings,
  logout,
  saveAsset,
  setMarketLabelled,
} = settingsSlice.actions;

export default settingsSlice.reducer;
