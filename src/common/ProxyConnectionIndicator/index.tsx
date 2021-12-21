import './proxyConnectionIndicator.less';
import classNames from 'classnames';

import { useTypedSelector } from '../../app/store';

export const ProxyConnectionIndicator = (): JSX.Element => {
  const { proxyHealth } = useTypedSelector(({ settings }) => settings);
  return (
    <span
      className={classNames('proxy-connection-indicator', {
        'proxy-connection-indicator__red': proxyHealth === 'NOT_SERVING' || proxyHealth === undefined,
        'proxy-connection-indicator__orange': proxyHealth === 'SERVING_NOT_CONNECTED',
        'proxy-connection-indicator__green': proxyHealth === 'SERVING',
      })}
    />
  );
};
