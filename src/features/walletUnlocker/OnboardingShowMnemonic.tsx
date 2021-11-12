import './onboardingShowMnemonic.less';
import { Col, Row, Typography, Checkbox, Button, Modal } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PasswordForm } from './PasswordForm';
import { useGenSeedQuery } from './walletUnlocker.api';

export const OnboardingShowMnemonic = (): JSX.Element => {
  const navigate = useNavigate();
  const [isGoBackModalVisible, setIsGoBackModalVisible] = useState<boolean>(false);
  const { data: seedMnemonicList, error: genSeedError } = useGenSeedQuery();
  const { Title } = Typography;

  const onCheckboxChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  useEffect(() => {
    if (genSeedError) {
      setIsGoBackModalVisible(true);
    }
  }, [genSeedError]);

  return (
    <>
      <div id="show-mnemonic">
        <Row justify="center">
          <Col>
            <Title level={2} className="dm-sans dm-sans__xx dm-sans__bold">
              Secret Phrase
            </Title>
          </Col>
        </Row>
        <Row justify="center">
          <Col>
            <p className="dm-sans dm-sans__x">Save your 24-word recovery phrase,in the correct order</p>
          </Col>
        </Row>
        <SeedMnemonicList seed={seedMnemonicList} />
        <Row justify="center">
          <Col>
            <Checkbox onChange={onCheckboxChange} className="dm-sans dm-sans__x">
              I’ve saved my Secret Phrase
            </Checkbox>
          </Col>
        </Row>
        <Row justify="center" className="mt-8">
          <Col>
            <Title level={3} className="dm-sans dm-sans__bold dm-sans__xx">
              Set Password
            </Title>
          </Col>
        </Row>
        <PasswordForm mnemonic={seedMnemonicList || []} />
        {genSeedError && <p className="error">{genSeedError}</p>}
      </div>
      <Modal
        centered={true}
        className="modal-error"
        title="Pairing Issue"
        visible={isGoBackModalVisible}
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
          It seems that you haven't installed the TLS certificate properly. Please go back and try again.
        </p>
      </Modal>
    </>
  );
};

export const SeedMnemonicList = ({ seed }: { seed?: string[] }): JSX.Element => {
  return (
    <ol className="words-list my-8">
      <Row justify="center">
        <Col span={4}>
          {seed?.slice(0, 8).map((word: string, index: number) => (
            <li key={index}>{word}</li>
          ))}
        </Col>
        <Col span={4} offset={1}>
          {seed?.slice(8, 16).map((word: string, index: number) => (
            <li key={index}>{word}</li>
          ))}
        </Col>
        <Col span={4} offset={1}>
          {seed?.slice(16, 24).map((word: string, index: number) => (
            <li key={index}>{word}</li>
          ))}
        </Col>
      </Row>
    </ol>
  );
};
