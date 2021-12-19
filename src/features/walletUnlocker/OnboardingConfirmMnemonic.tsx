import './onboardingConfirmMnemonic.less';
import Icon from '@ant-design/icons';
import { nanoid } from '@reduxjs/toolkit';
import { Breadcrumb, Button, Col, notification, Row, Space, Typography } from 'antd';
import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

import type { InitWalletReply } from '../../api-spec/generated/js/walletunlocker_pb';
import { useTypedDispatch, useTypedSelector } from '../../app/store';
import { ReactComponent as chevronRight } from '../../assets/images/chevron-right.svg';
import {
  HOME_ROUTE,
  ONBOARDING_CREATE_OR_RESTORE_ROUTE,
  ONBOARDING_PAIRING_ROUTE,
  ONBOARDING_SHOW_MNEMONIC_ROUTE,
} from '../../routes/constants';
import { sleep } from '../../utils';
import { encodeBase64UrlMacaroon } from '../../utils/connect';
import { setMacaroonCredentials, setTdexdConnectUrl } from '../settings/settingsSlice';

import { useInitWalletMutation, useUnlockWalletMutation } from './walletUnlocker.api';

const { Title } = Typography;
const NULL_ERROR = '';
const ERROR_MSG = 'Invalid mnemonic';

function shuffleMnemonic(words: string[]): string[] {
  // Defining function returning random value from i to N
  const getRandomValue = (i: number, N: number) => Math.floor(Math.random() * (N - i) + i);
  // Shuffle a pair of two elements at random position j
  words.forEach((_, i, arr, j = getRandomValue(i, arr.length)) => ([arr[i], arr[j]] = [arr[j], arr[i]]));
  return words;
}

export const OnboardingConfirmMnemonic = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const { state } = useLocation() as { state: { mnemonic: string[]; password: string } };
  const tdexdConnectUrl = useTypedSelector(({ settings }) => settings.tdexdConnectUrl);
  const mnemonicRandomized = shuffleMnemonic([...state?.mnemonic]);
  const [wordsList, setWordsList] = useState<string[]>(mnemonicRandomized);
  const [selected, setSelected] = useState<string[]>([]);
  const [error, setError] = useState(NULL_ERROR);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //
  const [unlockWallet, { error: unlockWalletError }] = useUnlockWalletMutation();
  const [initWallet, { error: initWalletError }] = useInitWalletMutation();

  const handleInitWallet = async () => {
    try {
      // @ts-ignore
      const { data } = await initWallet({
        isRestore: false,
        password: state.password,
        mnemonic: state.mnemonic,
      });
      data.on('status', async (status: any) => {
        if (status.code === 0) {
          await unlockWallet({ password: state.password });
          await sleep(1000);
          setIsLoading(false);
          navigate(HOME_ROUTE);
        } else {
          console.log('status', status);
        }
      });
      data.on('data', async (data: InitWalletReply) => {
        if (data.getStatus() === 0 && data.getData().length > 150) {
          dispatch(setMacaroonCredentials(data.getData()));
          const base64UrlMacaroon = encodeBase64UrlMacaroon(data.getData());
          dispatch(setTdexdConnectUrl(tdexdConnectUrl + '&macaroon=' + base64UrlMacaroon));
        }
      });
    } catch (err) {
      // @ts-ignore
      console.error(err.message);
      notification.error({ message: 'An error occurred' });
    }
  };

  const handleConfirm = async () => {
    setIsLoading(true);
    if (selected.join(' ') === state?.mnemonic.join(' ')) {
      await handleInitWallet();
    } else {
      setIsLoading(false);
      setError(ERROR_MSG);
      setSelected([]);
      setWordsList(mnemonicRandomized);
    }
  };

  const drop = (words: string[], index: number): string[] => {
    words.splice(index, 1);
    return words;
  };

  // select a word among wordsList
  const selectWord = (index: number) => {
    if (error !== NULL_ERROR) setError(NULL_ERROR);
    const word = wordsList[index];
    setSelected((selected) => [...selected, word]);
    setWordsList(drop(wordsList, index));
  };

  // delete words from selected array
  const deleteSelectedWord = (index: number) => {
    const word = selected[index];
    setWordsList((wordsList) => [...wordsList, word]);
    setSelected(drop(selected, index));
  };

  return (
    <>
      <Breadcrumb separator={<Icon component={chevronRight} />} className="mt-8 mb-2">
        <Breadcrumb.Item>
          <Link to={ONBOARDING_PAIRING_ROUTE}>Pairing</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={ONBOARDING_CREATE_OR_RESTORE_ROUTE}>Create or Restore</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={ONBOARDING_SHOW_MNEMONIC_ROUTE}>Show Mnemonic</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Confirm Mnemonic</Breadcrumb.Item>
      </Breadcrumb>
      <div className="panel">
        <div id="onboarding-confirm-mnemonic">
          <Row justify="center">
            <Col>
              <Title level={2} className="dm-sans dm-sans__xx dm-sans__bold">
                Confirm your secret mnemonic phrase
              </Title>
            </Col>
          </Row>
          <Row justify="center">
            <Col>
              <p className="dm-sans dm-sans__x">
                Enter your secret twenty-four words of your mnemonic phrase to make sure it is correct
              </p>
            </Col>
          </Row>

          <Space className="w-full my-4" direction="vertical" size={24}>
            <div className="words-container">
              {selected.map((word: string, i: number) => (
                <Button
                  className="word"
                  key={nanoid()}
                  onClick={() => deleteSelectedWord(i)}
                  style={{ margin: '2px' }}
                >
                  {word}
                </Button>
              ))}
            </div>
            <div className="words-container-initial">
              {wordsList.map((word, i) => (
                <Button
                  className="word"
                  key={nanoid()}
                  onClick={() => selectWord(i)}
                  style={{ margin: '2px' }}
                >
                  {word}
                </Button>
              ))}
            </div>
            <div className="error">{error}</div>
          </Space>
          <Row>
            <Col span={8} offset={8}>
              <Button
                onClick={handleConfirm}
                disabled={wordsList.length > 0}
                loading={isLoading}
                className="w-100"
              >
                CONFIRM
              </Button>
            </Col>
          </Row>
          {unlockWalletError && <p className="error">{unlockWalletError}</p>}
          {initWalletError && <p className="error">{initWalletError}</p>}
        </div>
      </div>
    </>
  );
};
