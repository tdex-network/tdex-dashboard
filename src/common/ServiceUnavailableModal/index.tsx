import { Button, Modal } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ONBOARDING_PAIRING_ROUTE } from '../../routes/constants';

interface ServiceUnavailableModalProps {
  isServiceUnavailableModalVisible: boolean;
}

export const ServiceUnavailableModal = ({
  isServiceUnavailableModalVisible,
}: ServiceUnavailableModalProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Modal
      centered={true}
      className="modal-error"
      title="Service Unavailable"
      visible={isServiceUnavailableModalVisible}
      closable={false}
      maskClosable={false}
      maskStyle={{ backdropFilter: 'blur(6px)' }}
      footer={
        <Button key="goBack" onClick={() => navigate(ONBOARDING_PAIRING_ROUTE)}>
          RETRY PAIRING
        </Button>
      }
    >
      <p className="dm-mono dm-mono__x">Service is not available or credentials are wrong, please retry.</p>
    </Modal>
  );
};
