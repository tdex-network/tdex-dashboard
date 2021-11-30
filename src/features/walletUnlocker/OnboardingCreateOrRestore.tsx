import './onboardingCreateOrRestore.less';
import { Col, Row, Typography, Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ONBOARDING_RESTORE_MNEMONIC_ROUTE, ONBOARDING_SHOW_MNEMONIC_ROUTE } from '../../routes/constants';

export const OnboardingCreateOrRestore = (): JSX.Element => {
  const { Title } = Typography;
  const navigate = useNavigate();

  return (
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
            <p className="dm-mono">Create your Tdex daemon wallet and start offering Liquid-based markets</p>
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
            <p className="dm-mono">Restore your Tdex daemon wallet and get back to business</p>
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
  );
};
