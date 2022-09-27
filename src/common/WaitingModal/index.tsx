import { Modal } from 'antd';

interface WaitingModalProps {
  isWaitingModalVisible: boolean;
  setIsWaitingModalVisible: (isVisible: boolean) => void;
  children: JSX.Element;
}

export const WaitingModal = ({
  isWaitingModalVisible,
  setIsWaitingModalVisible,
  children,
}: WaitingModalProps): JSX.Element => {
  return (
    <Modal
      centered={true}
      closable={false}
      maskClosable={false}
      onCancel={() => setIsWaitingModalVisible(false)}
      title="Please Wait"
      open={isWaitingModalVisible}
      footer={null}
    >
      <div className="dm-mono dm-mono__x">{children}</div>
    </Modal>
  );
};
