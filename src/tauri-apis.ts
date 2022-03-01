import type Event from '@tauri-apps/api/event';
import type FS from '@tauri-apps/api/fs';
import type Path from '@tauri-apps/api/path';
import type Process from '@tauri-apps/api/process';
import type Shell from '@tauri-apps/api/shell';

const tauriAPIs: {
  event?: typeof Event;
  fs?: typeof FS;
  path?: typeof Path;
  process?: typeof Process;
  shell?: typeof Shell;
} = {
  event: undefined,
  fs: undefined,
  path: undefined,
  process: undefined,
  shell: undefined,
};

(async function importTauriAPIs() {
  if ('__TAURI__' in window) {
    tauriAPIs.event = await import('@tauri-apps/api/event');
    tauriAPIs.fs = await import('@tauri-apps/api/fs');
    tauriAPIs.path = await import('@tauri-apps/api/path');
    tauriAPIs.process = await import('@tauri-apps/api/process');
    tauriAPIs.shell = await import('@tauri-apps/api/shell');
  }
})();

export default tauriAPIs;
