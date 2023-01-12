import { RightOutlined } from '@ant-design/icons';
import { Button, Divider, notification } from 'antd';
import classNames from 'classnames';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './userMenu.less';
import { useTypedDispatch } from '../../app/store';
import { liquidApi } from '../../features/liquid.api';
import { DefaultCurrencyRadioButtons } from '../../features/settings/DefaultCurrencyRadioButtons';
import { FavoriteBitcoinUnitsRadioButtons } from '../../features/settings/FavoriteBitcoinUnitsRadioButtons';
import { logout, resetSettings } from '../../features/settings/settingsSlice';
import { tdexApi } from '../../features/tdex.api';
import { resetWallet } from '../../features/wallet/walletSlice';
import { ONBOARDING_PAIRING_ROUTE, SETTINGS_ROUTE } from '../../routes/constants';

import { DisconnectAndResetModal } from './DisconnectAndResetModal';

interface UserMenuProps {
  isUserMenuVisible: boolean;
  isConnectionPage?: boolean;
}

export const UserMenu = ({ isUserMenuVisible, isConnectionPage = false }: UserMenuProps): JSX.Element => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  const [isDisconnectAndResetModalVisible, setIsDisconnectAndResetModalVisible] = useState<boolean>(false);

  const logOut = async () => {
    dispatch(logout());
    // Reset the APIs state completely
    dispatch(liquidApi.util.resetApiState());
    dispatch(tdexApi.util.resetApiState());
    navigate(ONBOARDING_PAIRING_ROUTE);
  };

  const clearCache = async () => {
    dispatch(resetSettings());
    dispatch(resetWallet());
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
        {isConnectionPage ? (
          <Button
            className="w-100"
            danger
            onClick={async () => {
              await clearCache();
              notification.success({
                message: 'Application state has been reset successfully',
                key: 'reset',
              });
            }}
          >
            FORCE RESET
          </Button>
        ) : (
          <>
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
            <DisconnectAndResetModal
              clearCache={clearCache}
              logOut={logOut}
              isDisconnectAndResetModalVisible={isDisconnectAndResetModalVisible}
              setIsDisconnectAndResetModalVisible={setIsDisconnectAndResetModalVisible}
            />
          </>
        )}
      </div>
    </>
  );
};
