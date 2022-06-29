import { Button, Modal } from 'antd';
import React from 'react';

import alertOctogonRed from '../../assets/images/alert-octagon-red.svg';

interface DisconnectAndResetModalProps {
  isDisconnectAndResetModalVisible: boolean;
  setIsDisconnectAndResetModalVisible: (isVisible: boolean) => void;
  clearCache: () => Promise<void>;
  logOut: () => Promise<void>;
}

export const DisconnectAndResetModal = ({
  isDisconnectAndResetModalVisible,
  setIsDisconnectAndResetModalVisible,
  clearCache,
  logOut,
}: DisconnectAndResetModalProps): JSX.Element => {
  return (
    <Modal
      centered={true}
      className="text-center"
      closable={false}
      maskClosable={true}
      onCancel={() => setIsDisconnectAndResetModalVisible(false)}
      title={
        <>
          <img
            src={alertOctogonRed}
            alt="alert"
            className="mb-4"
            style={{ display: 'block', margin: '0 auto', width: '36px' }}
          />
          <span>Disconnect</span>
        </>
      }
      visible={isDisconnectAndResetModalVisible}
      footer={
        <>
          <Button
            danger
            onClick={clearCache}
            className="d-block dm-sans dm-sans__bold dm-sans__x"
            style={{ margin: '0 auto' }}
          >
            DISCONNECT AND RESET
          </Button>
          <Button
            type="ghost"
            className="mt-4 mb-2 d-block dm-sans dm-sans__bold dm-sans__x"
            style={{ margin: '0 auto', color: '#FFFFFF' }}
            onClick={logOut}
          >
            LOGOUT
          </Button>
        </>
      }
    >
      <p className="dm-sans dm-sans__bold">
        If you disconnect from the TDEX Dashboard you will delete all your preferences, <br />
        if you plan to login with the same account please use logout instead.
      </p>
      <p className="dm-sans dm-sans__bold">Are you sure you want to disconnect?</p>
    </Modal>
  );
};
