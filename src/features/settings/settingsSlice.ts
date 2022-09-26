import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { OperatorServiceClient } from '../../api-spec/protobuf/gen/js/tdex-daemon/v1/operator_pb.client';
import { WalletServiceClient } from '../../api-spec/protobuf/gen/js/tdex-daemon/v1/wallet_pb.client';
import { WalletUnlockerServiceClient } from '../../api-spec/protobuf/gen/js/tdex-daemon/v1/walletunlocker_pb.client';
import { config } from '../../app/config';
import type { RootState } from '../../app/store';
import type { Asset } from '../../domain/asset';
import type { Currency } from '../../domain/currency';
import type { MarketLabelled } from '../../domain/market';
import type { NetworkString } from '../../domain/misc';
import type { LbtcUnit } from '../../utils';
import { CURRENCIES, featuredAssets, LBTC_ASSET, LBTC_UNITS } from '../../utils';

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
  assets: Record<NetworkString, Asset[]>;
  baseUrl: string;
  useProxy: boolean;
  isTauri: boolean;
  marketsLabelled?: MarketLabelled[];
  macaroonCredentials?: string;
  connectUrlProto?: string;
  tdexdConnectUrl?: string;
  lbtcUnit: LbtcUnit;
  proxyHealth?: ProxyHealthStatus;
  proxyPid?: number;
  currency: Currency;
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

export const getTdexdConnectUrl = createAsyncThunk<string, string, { state: RootState }>(
  'settings/getTdexdConnectUrl',
  async (password, thunkAPI) => {
    try {
      if (!(window as any).TDEX_DAEMON_URL) throw new Error('TDEX_DAEMON_URL is missing');
      const res = await fetch(`${(window as any).TDEX_DAEMON_URL}/tdexdconnect`, {
        method: 'GET',
        headers: new Headers({
          Authorization: `Basic ${Buffer.from(`tdex:${password}`).toString('base64')}`,
        }),
      });
      if (!res.ok) {
        // Handle 401 Unauthorized response
        throw new Error(res.statusText);
      }
      return await res.text();
    } catch (err) {
      // @ts-ignore
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const initialState: SettingsState = {
  network: config.chain,
  explorerLiquidAPI: config.explorerLiquidAPI,
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
  explorerLiquidUI: config.explorerLiquidUI,
  baseUrl: USE_PROXY ? PROXY_URL : '',
  isTauri: '__TAURI__' in window,
  assets: {
    liquid: featuredAssets['liquid'],
    testnet: featuredAssets['testnet'],
    regtest: [LBTC_ASSET['regtest']],
  },
  useProxy: USE_PROXY,
  lbtcUnit: LBTC_UNITS[0],
  currency: CURRENCIES[0],
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
    },
    setLbtcUnit: (state, action: PayloadAction<LbtcUnit>) => {
      state.lbtcUnit = action.payload;
    },
    setCurrency: (state, action: PayloadAction<Currency>) => {
      state.currency = action.payload;
    },
    setAsset: (state, action: PayloadAction<Asset>) => {
      // Save if asset not already saved
      if (!state.assets[state.network].map((a) => a.asset_id).includes(action.payload.asset_id)) {
        state.assets[state.network] = state.assets[state.network].concat(action.payload);
      }
    },
    setMarketLabelled: (state, action: PayloadAction<MarketLabelled>) => {
      state.marketsLabelled = [...(state.marketsLabelled || []), action.payload];
    },
    setProxyPid: (state, action: PayloadAction<number | undefined>) => {
      state.proxyPid = action.payload;
    },
    setBaseUrl: (state, action: PayloadAction<string>) => {
      if (!state.useProxy) {
        state.baseUrl = action.payload;
      }
    },
    setMacaroonCredentials: (state, action: PayloadAction<string | undefined>) => {
      state.macaroonCredentials = action.payload;
    },
    setConnectUrlProto: (state, action: PayloadAction<string | undefined>) => {
      state.connectUrlProto = action.payload;
    },
    setTdexdConnectUrl: (state, action: PayloadAction<string | undefined>) => {
      state.tdexdConnectUrl = action.payload;
    },
    setProxyHealth: (state, action: PayloadAction<ProxyHealthStatus | undefined>) => {
      state.proxyHealth = action.payload;
    },
    setUseProxy: (state, action: PayloadAction<boolean>) => {
      state.useProxy = action.payload;
    },
    logout: (state) => {
      state.macaroonCredentials = undefined;
      state.tdexdConnectUrl = undefined;
      state.baseUrl = USE_PROXY ? PROXY_URL : '';
      state.proxyHealth = undefined;
    },
    resetSettings: () => initialState,
  },
});

export function selectBaseUrl(state: RootState): string {
  return state.settings.baseUrl;
}

export function selectMacaroonCreds(state: RootState): string {
  if (!state.settings.useProxy && state.settings.macaroonCredentials) {
    return state.settings.macaroonCredentials;
  }
  return '';
}

export function selectMarketLabelled(state: RootState): MarketLabelled[] | undefined {
  return state.settings.marketsLabelled;
}

//
export function selectOperatorClient(state: RootState): OperatorServiceClient {
  return new OperatorServiceClient(new GrpcWebFetchTransport({ baseUrl: selectBaseUrl(state) }));
}

export function selectWalletClient(state: RootState): WalletServiceClient {
  return new WalletServiceClient(new GrpcWebFetchTransport({ baseUrl: selectBaseUrl(state) }));
}

export function selectWalletUnlockerClient(state: RootState): WalletUnlockerServiceClient {
  return new WalletUnlockerServiceClient(new GrpcWebFetchTransport({ baseUrl: selectBaseUrl(state) }));
}

export const {
  addExplorerLiquidAPI,
  addExplorerLiquidUI,
  setExplorerLiquidAPI,
  setExplorerLiquidUI,
  setNetwork,
  setLbtcUnit,
  setCurrency,
  setBaseUrl,
  setMacaroonCredentials,
  setConnectUrlProto,
  setTdexdConnectUrl,
  setProxyHealth,
  setProxyPid,
  resetSettings,
  logout,
  setAsset,
  setUseProxy,
  setMarketLabelled,
} = settingsSlice.actions;

export default settingsSlice.reducer;
