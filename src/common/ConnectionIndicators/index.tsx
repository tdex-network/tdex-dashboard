import './connectionIndicator.less';
import { Tooltip } from 'antd';
import classNames from 'classnames';

import type { IsReadyReply } from '../../api-spec/generated/js/walletunlocker_pb';
import type { RootState } from '../../app/store';
import { useTypedSelector } from '../../app/store';

export const ConnectionIndicators = (): JSX.Element => {
  const { useProxy, proxyHealth, tdexdConnectUrl } = useTypedSelector(({ settings }) => settings);
  const daemonState = useTypedSelector(
    ({ walletUnlockerService }: RootState) =>
      walletUnlockerService.queries['isReady(undefined)']?.data as IsReadyReply.AsObject | undefined
  );
  const daemonError = useTypedSelector(
    ({ walletUnlockerService }: RootState) => walletUnlockerService.queries['isReady(undefined)']?.error
  );
  const tooltipTextDaemon = daemonState
    ? `Initialized: ${daemonState?.initialized} • Unlocked: ${daemonState?.unlocked} • Synced: ${daemonState?.synced}`
    : 'Daemon unavailable';
  const tooltipTextProxy =
    proxyHealth === 'NOT_SERVING' || proxyHealth === undefined
      ? 'Not serving'
      : proxyHealth === 'SERVING_NOT_CONNECTED'
      ? 'Serving but not connected to daemon'
      : 'Serving';

  return (
    <div className="d-flex align-center justify-end mr-2">
      <span className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey mr-2">Daemon: </span>
      <Tooltip placement="topRight" title={tooltipTextDaemon}>
        <span
          className={classNames('connection-indicator', {
            'connection-indicator__red': tdexdConnectUrl === undefined || daemonError,
            'connection-indicator__orange':
              tdexdConnectUrl &&
              daemonError === undefined &&
              (!daemonState?.initialized || !daemonState?.unlocked || !daemonState?.synced),
            'connection-indicator__green':
              tdexdConnectUrl &&
              daemonError === undefined &&
              daemonState?.initialized &&
              daemonState?.unlocked &&
              daemonState?.synced,
          })}
        />
      </Tooltip>
      {useProxy ? (
        <>
          <span className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey mr-2">Proxy: </span>
          <Tooltip placement="topRight" title={tooltipTextProxy}>
            <span
              className={classNames('connection-indicator', {
                'connection-indicator__red': proxyHealth === 'NOT_SERVING' || proxyHealth === undefined,
                'connection-indicator__orange': proxyHealth === 'SERVING_NOT_CONNECTED',
                'connection-indicator__green': proxyHealth === 'SERVING',
              })}
            />
          </Tooltip>
        </>
      ) : null}
    </div>
  );
};
