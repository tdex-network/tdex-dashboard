import Icon from '@ant-design/icons';
import { Button, Divider } from 'antd';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

import './userMenu.less';
import type { RootState } from '../../app/store';
import { useTypedDispatch, useTypedSelector } from '../../app/store';
import { ReactComponent as chevronRight } from '../../assets/images/chevron-right.svg';
import { liquidApi } from '../../features/liquid.api';
import { disconnectProxy, logout, resetSettings } from '../../features/settings/settingsSlice';
import { tdexApi } from '../../features/tdex.api';
import { ONBOARDING_PAIRING_ROUTE, SETTINGS_ROUTE } from '../../routes/constants';

interface UserMenuProps {
  isUserMenuVisible: boolean;
}

export const UserMenu = ({ isUserMenuVisible }: UserMenuProps): JSX.Element => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  const useProxy = useTypedSelector(({ settings }: RootState) => settings.useProxy);

  const logOut = async () => {
    if (useProxy) {
      try {
        // Close proxy connection to avoid conflict
        await dispatch(disconnectProxy()).unwrap();
      } catch (err) {
        console.error(err);
      }
    }
    dispatch(logout());
    // Reset the APIs state completely
    dispatch(liquidApi.util.resetApiState());
    dispatch(tdexApi.util.resetApiState());
    navigate(ONBOARDING_PAIRING_ROUTE);
  };

  const clearCache = async () => {
    if (useProxy) {
      try {
        // Close proxy connection to avoid conflict
        await dispatch(disconnectProxy()).unwrap();
      } catch (err) {
        console.error(err);
      }
    }
    dispatch(resetSettings());
    // Reset the APIs state completely
    dispatch(liquidApi.util.resetApiState());
    dispatch(tdexApi.util.resetApiState());
    navigate(ONBOARDING_PAIRING_ROUTE);
  };

  return (
    <div className={classNames({ 'user-menu-visible': isUserMenuVisible, 'user-menu': !isUserMenuVisible })}>
      <Button className="ant-btn-grey-with-chevron mb-4" onClick={() => navigate(SETTINGS_ROUTE)}>
        <span>GENERAL SETTINGS</span>
        <Icon component={chevronRight} />
      </Button>
      <Divider />
      <Button className="mt-4 mb-2" onClick={logOut}>
        LOGOUT
      </Button>
      <Button type="ghost" onClick={clearCache}>
        CLEAR CACHE
      </Button>
    </div>
  );
};
