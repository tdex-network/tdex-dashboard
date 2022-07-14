import { Button, Modal } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface PairingIssueModalProps {
  isPairingIssueModalVisible: boolean;
}

export const PairingIssueModal = ({ isPairingIssueModalVisible }: PairingIssueModalProps): JSX.Element => {
  const navigate = useNavigate();
  return (
    <Modal
      centered={true}
      className="modal-error"
      title="Pairing Issue"
      visible={isPairingIssueModalVisible}
      closable={false}
      maskClosable={false}
      maskStyle={{ backdropFilter: 'blur(6px)' }}
      footer={
        <Button key="goBack" onClick={() => navigate(-1)}>
          Go back to pairing
        </Button>
      }
    >
      <p className="dm-mono dm-mono__x">
        It seems that you haven't installed the TLS certificate properly or your TDEX provider is not reachable.
        Please go back and try again.
      </p>
    </Modal>
  );
};
