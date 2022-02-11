import type { Action, Reducer } from '@reduxjs/toolkit';
import { path } from '@tauri-apps/api';
import { writeFile, readTextFile, removeFile, readDir, createDir } from '@tauri-apps/api/fs';
import type { PersistConfig, Storage } from 'redux-persist';
import { persistReducer } from 'redux-persist';
import type { PersistPartial } from 'redux-persist/es/persistReducer';

// getFileNameForKey map redux-persist key identifier to tdex-dashboard filename
function getFileNameForKey(key: string): string {
  return `tdex-dashboard-${key.replace('persist:', '')}`;
}

// getFilePath uses getFileNameForKey in order to return the full path of a key's file
async function getFilePath(key: string): Promise<string> {
  return `${await path.appDir()}${getFileNameForKey(key)}`;
}

// tauriStorage will be used to persist reducers in filesystem
export const tauriStorage: Storage = {
  async getItem(key: string) {
    const json = await readTextFile(await getFilePath(key));
    return JSON.parse(json);
  },
  async setItem(key: string, value: any) {
    if ('__TAURI__' in window) {
      const appDir = await path.appDir();
      try {
        await readDir(appDir);
      } catch (err) {
        await createDir(appDir);
      }
      await writeFile({ path: await getFilePath(key), contents: JSON.stringify(value) });
    }
  },
  async removeItem(key: string) {
    await removeFile(await getFilePath(key));
  },
};

function createLocalStorageConfig<S>(
  key: string,
  whitelist?: string[],
  blacklist?: string[],
  version = 0
): PersistConfig<S> {
  return {
    key,
    storage: tauriStorage,
    version,
    whitelist,
    blacklist,
  };
}

// custom persist reducer function
export function persist<S>(opts: {
  reducer: Reducer<S, Action>;
  key: string;
  whitelist?: string[];
  blacklist?: string[];
  version?: number;
}): Reducer<S & PersistPartial, Action> {
  return persistReducer<S, Action>(
    createLocalStorageConfig(opts.key, opts.whitelist, opts.blacklist, opts.version),
    opts.reducer
  );
}
