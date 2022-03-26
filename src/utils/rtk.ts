import type { RpcError } from 'grpc-web';

import { sleep } from './sleep';

// Retry once after 500ms in case daemon fails to reply
export const retryRtkRequest = async <T>(
  requestCb: () => Promise<{ data: T }>
): Promise<{ data: T } | { error: string }> => {
  try {
    return await requestCb();
  } catch (error) {
    try {
      console.debug('retry RTK request');
      await sleep(500);
      return await requestCb();
    } catch (error) {
      console.error(error);
      return { error: (error as RpcError).message };
    }
  }
};
