import './showMnemonic.less';
import { Button, Col, notification, Row, Typography } from 'antd';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { HOME_ROUTE } from '../../routes/constants';

import {
  useGenSeedQuery,
  useInitWalletMutation,
  useIsReadyQuery,
  useUnlockWalletMutation,
} from './walletUnlocker.api';

export const ShowMnemonic = (): JSX.Element => {
  const [unlockWallet, { error: unlockWalletError, isLoading: unlockWalletIsLoading }] =
    useUnlockWalletMutation();
  const [initWallet, { error: initWalletError, isLoading: initWalletIsLoading }] = useInitWalletMutation();
  const { data: seedMnemonicList, error: genSeedError } = useGenSeedQuery();
  const { data: isReady } = useIsReadyQuery();
  const { state } = useLocation<{ password: string }>();
  const history = useHistory();
  const { Title } = Typography;

  const handleInitWallet = async () => {
    try {
      if (isReady?.isInitialized) {
        notification.info({ message: 'Wallet has already been initialized' });
        return;
      }
      // @ts-ignore
      const { data } = await initWallet({
        isRestore: false,
        password: state.password,
        mnemonic: seedMnemonicList || [],
      });
      data.on('status', async (status: any) => {
        if (status.code === 0) {
          await unlockWallet({ password: state.password });
          history.push(HOME_ROUTE);
        } else {
          console.log('status', status);
        }
      });
    } catch (err) {
      // @ts-ignore
      console.error(err.message);
      notification.error({ message: 'An error occurred' });
    }
  };

  return (
    <div id="show-mnemonic">
      <Row justify="center">
        <Col>
          <Title level={2}>Save Your Mnemonic</Title>
        </Col>
      </Row>
      <SeedMnemonicList seed={seedMnemonicList} />
      <Row justify="end">
        <Col>
          <Button onClick={handleInitWallet} loading={initWalletIsLoading || unlockWalletIsLoading}>
            Initialized Wallet
          </Button>
        </Col>
      </Row>
      {unlockWalletError && <p>{unlockWalletError}</p>}
      {initWalletError && <p>{initWalletError}</p>}
      {genSeedError && <p>{genSeedError}</p>}
    </div>
  );
};

export const SeedMnemonicList = ({ seed }: { seed?: string[] }): JSX.Element => {
  return (
    <>
      <Row justify="center">
        <Col span={4} style={{ textAlign: 'center' }}>
          <div className="words-container">
            <ol>
              {seed?.slice(0, 12).map((word: string, index: number) => (
                <li key={index}>{word}</li>
              ))}
            </ol>
          </div>
        </Col>
        <Col span={4} offset={1} style={{ textAlign: 'center' }}>
          <div className="words-container">
            <ol start={13}>
              {seed?.slice(12, 24).map((word: string, index: number) => (
                <li key={index}>{word}</li>
              ))}
            </ol>
          </div>
        </Col>
      </Row>
    </>
  );
};
