import { Button, Modal } from 'antd';

import alertOctogon from '../../assets/images/alert-octagon.svg';

interface RestartMarketModalProps {
  setIsRestartMarketModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isRestartMarketModalVisible: boolean;
  saveAndRestart: () => Promise<void>;
  resetAll: () => Promise<void>;
}

export const RestartMarketModal = ({
  setIsRestartMarketModalVisible,
  isRestartMarketModalVisible,
  saveAndRestart,
  resetAll,
}: RestartMarketModalProps): JSX.Element => {
  return (
    <Modal
      className="text-center"
      centered={true}
      closable={false}
      maskClosable={true}
      title={
        <div className="text-center">
          <img
            src={alertOctogon}
            alt="alert"
            className="mb-4"
            style={{ display: 'block', margin: '0 auto', width: '36px' }}
          />
          <span>Restart Market</span>
        </div>
      }
      open={isRestartMarketModalVisible}
      maskStyle={{ backdropFilter: 'blur(6px)' }}
      footer={
        <>
          <Button
            onClick={saveAndRestart}
            className="d-block dm-sans dm-sans__bold dm-sans__x"
            style={{ margin: '0 auto' }}
          >
            SAVE AND RESTART
          </Button>
          <Button
            type="ghost"
            className="mt-4 mb-2 d-block dm-sans dm-sans__bold dm-sans__x"
            style={{ margin: '0 auto', color: '#FFFFFF' }}
            onClick={() => {
              resetAll();
              setIsRestartMarketModalVisible(false);
            }}
          >
            CANCEL
          </Button>
        </>
      }
    >
      <p className="dm-sans dm-sans__bold">
        Are you sure you want to save the new settings and restart market?
      </p>
    </Modal>
  );
};
