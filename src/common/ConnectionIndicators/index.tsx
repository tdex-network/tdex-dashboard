import './connectionIndicator.less';
import { Tooltip } from 'antd';
import classNames from 'classnames';

import type { IsReadyReply } from '../../api-spec/protobuf/gen/js/tdex-daemon/v1/walletunlocker_pb';
import type { RootState } from '../../app/store';
import { useTypedSelector } from '../../app/store';

export const ConnectionIndicators = (): JSX.Element => {
  const { useProxy, proxyHealth } = useTypedSelector(({ settings }) => settings);
  const daemonState = useTypedSelector(
    ({ tdexService }: RootState) =>
      tdexService.queries['isReady(undefined)']?.data as IsReadyReply.AsObject | undefined
  );
  const daemonError = useTypedSelector(
    ({ tdexService }: RootState) => tdexService.queries['isReady(undefined)']?.error
  );
  const tooltipDaemonElement = daemonState ? (
    <div>
      <span className="mr-1">Initialized:</span>
      <span className="mr-2">
        {daemonState?.initialized ? <span className="checkmark__green">✔️</span> : '❌'}
      </span>
      <span className="mr-1">Unlocked:</span>
      <span className="mr-2">
        {daemonState?.unlocked ? <span className="checkmark__green">✔️</span> : '❌'}
      </span>
      <span className="mr-1">Synced:</span>
      <span className="mr-2">
        {daemonState?.synced ? <span className="checkmark__green">✔️</span> : '❌'}
      </span>
    </div>
  ) : (
    'Daemon unavailable'
  );
  const tooltipTextProxy =
    proxyHealth === 'NOT_SERVING' || proxyHealth === undefined
      ? 'Not serving'
      : proxyHealth === 'SERVING_NOT_CONNECTED'
      ? 'Serving but not connected to daemon'
      : 'Serving';

  return (
    <div className="d-flex align-center justify-end mr-2">
      <span className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey mr-2">Daemon: </span>
      <Tooltip placement="topRight" title={tooltipDaemonElement}>
        <span
          className={classNames('connection-indicator', {
            'connection-indicator__red': daemonError,
            'connection-indicator__orange':
              daemonError === undefined &&
              (!daemonState?.initialized || !daemonState?.unlocked || !daemonState?.synced),
            'connection-indicator__green':
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
