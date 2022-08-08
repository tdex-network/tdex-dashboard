import './onboardingConfirmMnemonic.less';
import Icon from '@ant-design/icons';
import { nanoid } from '@reduxjs/toolkit';
import { Breadcrumb, Button, Col, notification, Row, Space, Typography } from 'antd';
import classNames from 'classnames';
import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

import type { InitWalletResponse } from '../../api-spec/protobuf/gen/js/tdex-daemon/v1/walletunlocker_pb';
import { useTypedDispatch, useTypedSelector } from '../../app/store';
import { ReactComponent as chevronRight } from '../../assets/images/chevron-right.svg';
import {
  HOME_ROUTE,
  ONBOARDING_CREATE_OR_RESTORE_ROUTE,
  ONBOARDING_PAIRING_ROUTE,
  ONBOARDING_SHOW_MNEMONIC_ROUTE,
} from '../../routes/constants';
import { sleep, encodeBase64UrlMacaroon } from '../../utils';
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
  const mnemonicRandomized = shuffleMnemonic([...state.mnemonic]);
  const [wordsList, setWordsList] = useState<string[]>(mnemonicRandomized);
  const [selectedWordIndexes, setSelectedWordIndexes] = useState<number[]>([]);
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
        password: Buffer.from(state.password),
        mnemonic: state.mnemonic,
      });
      data.on('status', async (status: any) => {
        if (status.code === 0) {
          await sleep(1000);
          await unlockWallet({ password: Buffer.from(state.password) });
          await sleep(1000);
          setIsLoading(false);
          navigate(HOME_ROUTE);
        } else {
          console.log('status', status);
        }
      });
      data.on('data', async (data: InitWalletResponse) => {
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
    if (selectedWordIndexes.map((i) => wordsList[i]).join(' ') === state?.mnemonic.join(' ')) {
      await handleInitWallet();
    } else {
      setIsLoading(false);
      setError(ERROR_MSG);
      setSelectedWordIndexes([]);
      setWordsList(mnemonicRandomized);
    }
  };

  const toggleWordSelection = (index: number) => {
    if (error !== NULL_ERROR) setError(NULL_ERROR);
    // Check if word in selectedWordIndexes list
    const isWordSelected = selectedWordIndexes.includes(index);
    if (isWordSelected) {
      // Find first element in array starting from the end
      const selectedWordIndex = selectedWordIndexes
        .reverse()
        .findIndex((selectedIndex) => selectedIndex === index);
      if (selectedWordIndex > -1) {
        // If found remove it
        selectedWordIndexes.splice(selectedWordIndex, 1);
        setSelectedWordIndexes(selectedWordIndexes.reverse().slice());
      }
    } else {
      setSelectedWordIndexes((selectedIndexes) => [...selectedIndexes, index]);
    }
  };

  return (
    <>
      <Breadcrumb separator={<Icon component={chevronRight} />} className="mt-8">
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
              {selectedWordIndexes.map((index: number) => (
                <Button className="word" key={nanoid()} style={{ margin: '2px' }}>
                  {wordsList[index]}
                </Button>
              ))}
            </div>
            <div className="words-container-initial">
              {wordsList.map((word, i) => (
                <Button
                  className={classNames('word', {
                    word__selected: selectedWordIndexes.includes(i),
                  })}
                  key={nanoid()}
                  onClick={() => toggleWordSelection(i)}
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
                disabled={selectedWordIndexes.length !== 24}
                loading={isLoading}
                className="w-100"
              >
                CONFIRM
              </Button>
            </Col>
          </Row>
          {unlockWalletError && <p className="error">{unlockWalletError.toString()}</p>}
          {initWalletError && <p className="error">{initWalletError.toString()}</p>}
        </div>
      </div>
    </>
  );
};
