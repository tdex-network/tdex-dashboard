import { RightOutlined } from '@ant-design/icons';
import { Button, Divider } from 'antd';
import classNames from 'classnames';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './userMenu.less';
import type { RootState } from '../../app/store';
import { useTypedDispatch, useTypedSelector } from '../../app/store';
import { liquidApi } from '../../features/liquid.api';
import { DefaultCurrencyRadioButtons } from '../../features/settings/DefaultCurrencyRadioButtons';
import { FavoriteBitcoinUnitsRadioButtons } from '../../features/settings/FavoriteBitcoinUnitsRadioButtons';
import { disconnectProxy, logout, resetSettings } from '../../features/settings/settingsSlice';
import { tdexApi } from '../../features/tdex.api';
import { ONBOARDING_PAIRING_ROUTE, SETTINGS_ROUTE } from '../../routes/constants';

import { DisconnectAndResetModal } from './DisconnectAndResetModal';

interface UserMenuProps {
  isUserMenuVisible: boolean;
}

export const UserMenu = ({ isUserMenuVisible }: UserMenuProps): JSX.Element => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  const useProxy = useTypedSelector(({ settings }: RootState) => settings.useProxy);
  const [isDisconnectAndResetModalVisible, setIsDisconnectAndResetModalVisible] = useState<boolean>(false);

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
    <>
      <div
        className={classNames({ 'user-menu-visible': isUserMenuVisible, 'user-menu': !isUserMenuVisible })}
      >
        <FavoriteBitcoinUnitsRadioButtons />
        <DefaultCurrencyRadioButtons />
        <Button className="ant-btn-grey-with-chevron mb-4 w-100" onClick={() => navigate(SETTINGS_ROUTE)}>
          <span>ADVANCED SETTINGS</span>
          <RightOutlined color="#FFFFFF" />
        </Button>
        <Divider />
        <Button type="ghost" className="mt-4 mb-2 w-100" onClick={logOut}>
          LOGOUT
        </Button>
        <Button danger onClick={() => setIsDisconnectAndResetModalVisible(true)} className="w-100">
          DISCONNECT AND RESET
        </Button>
      </div>
      <DisconnectAndResetModal
        clearCache={clearCache}
        logOut={logOut}
        isDisconnectAndResetModalVisible={isDisconnectAndResetModalVisible}
        setIsDisconnectAndResetModalVisible={setIsDisconnectAndResetModalVisible}
      />
    </>
  );
};
