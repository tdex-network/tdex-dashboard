import { Button, Modal } from 'antd';
import React from 'react';

interface ServiceUnavailableModalProps {
  isServiceUnavailableModalVisible: boolean;
  setIsServiceUnavailableModalVisible: (isVisible: boolean) => void;
}

export const ServiceUnavailableModal = ({
  isServiceUnavailableModalVisible,
  setIsServiceUnavailableModalVisible,
}: ServiceUnavailableModalProps): JSX.Element => {
  return (
    <Modal
      centered={true}
      className="modal-error"
      closable={false}
      maskClosable={true}
      onCancel={() => setIsServiceUnavailableModalVisible(false)}
      title="Service Unavailable"
      visible={isServiceUnavailableModalVisible}
      footer={
        <Button key="close" onClick={() => setIsServiceUnavailableModalVisible(false)}>
          CLOSE
        </Button>
      }
    >
      <p className="dm-mono dm-mono__x">Service is not available or credentials are wrong, please retry.</p>
    </Modal>
  );
};
