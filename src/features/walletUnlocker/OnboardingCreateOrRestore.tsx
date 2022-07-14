import './onboardingCreateOrRestore.less';
import Icon from '@ant-design/icons';
import { Col, Row, Typography, Button, Breadcrumb } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ReactComponent as chevronRight } from '../../assets/images/chevron-right.svg';
import { PairingIssueModal } from '../../common/PairingIssueModal';
import {
  ONBOARDING_PAIRING_ROUTE,
  ONBOARDING_RESTORE_MNEMONIC_ROUTE,
  ONBOARDING_SHOW_MNEMONIC_ROUTE,
} from '../../routes/constants';

import { useIsReadyQuery } from './walletUnlocker.api';

export const OnboardingCreateOrRestore = (): JSX.Element => {
  const { Title } = Typography;
  const navigate = useNavigate();
  const [isPairingIssueModalVisible, setIsPairingIssueModalVisible] = useState<boolean>(false);
  const { error: isReadyError } = useIsReadyQuery();

  useEffect(() => {
    if (isReadyError) {
      setIsPairingIssueModalVisible(true);
    }
  }, [isReadyError]);

  return (
    <>
      <Breadcrumb separator={<Icon component={chevronRight} />} className="mt-8">
        <Breadcrumb.Item>
          <Link to={ONBOARDING_PAIRING_ROUTE}>Pairing</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Create or Restore</Breadcrumb.Item>
      </Breadcrumb>
      <div className="panel">
        <div id="create-or-restore">
          <Row justify="center">
            <Col>
              <Title level={2} className="dm-mono dm-mono__xxx dm-mono__bold">
                Already Have a Wallet?
              </Title>
            </Col>
          </Row>
          <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={12}>
              <div className="card text-center">
                <h2 className="dm-mono dm-mono__xx dm-mono__bold text-center">Create Wallet</h2>
                <p className="dm-mono">
                  Create the wallet of your TDEX provider and start offering Liquid-based markets
                </p>
                <Row>
                  <Col span={12} offset={6}>
                    <Button className="w-100" onClick={() => navigate(ONBOARDING_SHOW_MNEMONIC_ROUTE)}>
                      CREATE
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={12}>
              <div className="card text-center">
                <h2 className="dm-mono dm-mono__xx dm-mono__bold text-center">Restore Wallet</h2>
                <p className="dm-mono">Restore the wallet of your TDEX provider and get back to business</p>
                <Row>
                  <Col span={12} offset={6}>
                    <Button className="w-100" onClick={() => navigate(ONBOARDING_RESTORE_MNEMONIC_ROUTE)}>
                      RESTORE
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <PairingIssueModal isPairingIssueModalVisible={isPairingIssueModalVisible} />
    </>
  );
};
