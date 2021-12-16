import { Button, Modal } from 'antd';

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
      maskClosable={true}
      onCancel={() => setIsWaitingModalVisible(false)}
      title="Please Wait"
      visible={isWaitingModalVisible}
      footer={
        <Button key="close" onClick={() => setIsWaitingModalVisible(false)}>
          CLOSE
        </Button>
      }
    >
      <div className="dm-mono dm-mono__x">{children}</div>
    </Modal>
  );
};
