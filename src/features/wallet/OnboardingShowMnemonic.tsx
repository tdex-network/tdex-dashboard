import './onboardingShowMnemonic.less';
import Icon from '@ant-design/icons';
import { Col, Row, Typography, Checkbox, Spin, Breadcrumb, Grid } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as chevronRight } from '../../assets/images/chevron-right.svg';
import { ONBOARDING_CREATE_OR_RESTORE_ROUTE, ONBOARDING_PAIRING_ROUTE } from '../../routes/constants';

import { PasswordForm } from './PasswordForm';
import { useGenSeedQuery } from './wallet.api';

const { useBreakpoint } = Grid;

export const OnboardingShowMnemonic = (): JSX.Element => {
  const { data: seedMnemonicList, error: genSeedError } = useGenSeedQuery();
  const [seedHasBeenSaved, setSeedHasBeenSaved] = useState<boolean>(false);
  const { Title } = Typography;

  const onCheckboxChange = (e: CheckboxChangeEvent) => {
    setSeedHasBeenSaved(e.target.checked);
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
        <Breadcrumb.Item>Show Mnemonic</Breadcrumb.Item>
      </Breadcrumb>
      <div className="panel">
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
              <p className="dm-sans dm-sans__x">Save your 24-word recovery phrase, in the correct order</p>
            </Col>
          </Row>
          <SeedMnemonicList seed={seedMnemonicList} />
          <Row justify="center">
            <Col>
              <Checkbox onChange={onCheckboxChange} className="dm-sans dm-sans__x" checked={seedHasBeenSaved}>
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
          <PasswordForm mnemonic={seedMnemonicList || []} seedHasBeenSaved={seedHasBeenSaved} />
          {genSeedError && <p className="error">{genSeedError.toString()}</p>}
        </div>
      </div>
    </>
  );
};

export const SeedMnemonicList = ({ seed }: { seed?: string[] }): JSX.Element => {
  const screens = useBreakpoint();

  return (
    <Spin spinning={!seed} delay={500}>
      <ol className="words-list my-8">
        <>
          {screens.xs ? (
            <Row justify="center">
              <Col span={12}>
                {seed?.slice(0, 12).map((word: string, index: number) => (
                  <li key={index}>{word}</li>
                ))}
              </Col>
              <Col span={12}>
                {seed?.slice(12, 24).map((word: string, index: number) => (
                  <li key={index}>{word}</li>
                ))}
              </Col>
            </Row>
          ) : (
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
          )}
        </>
      </ol>
    </Spin>
  );
};
