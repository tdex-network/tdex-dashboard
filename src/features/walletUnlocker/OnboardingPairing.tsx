import './onboardingPairing.less';
import { Button, Col, Form, Input, Modal, notification, Row, Typography } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useTypedDispatch } from '../../app/store';
import { HOME_ROUTE, ONBOARDING_SHOW_MNEMONIC_ROUTE } from '../../routes/constants';
import { decodeCert, decodeMacaroon, downloadCert, extractHostCertMacaroon } from '../../utils/connect';
import { setMacaroonCredentials, setTdexDaemonBaseUrl, setTdexdConnectUrl } from '../settings/settingsSlice';

const { Title } = Typography;

interface IFormInputs {
  tdexdConnectUrl: string;
}

export const OnboardingPairing = (): JSX.Element => {
  const [form] = Form.useForm<IFormInputs>();
  const [isValidCert, setIsValidCert] = useState<boolean>(false);
  const [macaroon, setMacaroon] = useState<string>('');
  const [isDownloadCertModalVisible, setIsDownloadCertModalVisible] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();

  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      dispatch(setTdexdConnectUrl(values.tdexdConnectUrl));
      if (macaroon) {
        navigate(HOME_ROUTE);
      } else {
        navigate(ONBOARDING_SHOW_MNEMONIC_ROUTE);
      }
    } catch (err) {
      // @ts-ignore
      notification.error({ message: err.message });
    }
  };

  const showDownloadCertModal = () => {
    setIsDownloadCertModalVisible(true);
  };

  return (
    <>
      <Row id="pairing" className="w-100">
        <Col span={18} offset={3}>
          <Title level={2} className="dm-sans dm-sans__xx dm-sans__bold text-center mb-8">
            Welcome on TDEX Dashboard
          </Title>
          <Form
            onFinish={onFinish}
            layout="vertical"
            form={form}
            name="pairing_form"
            wrapperCol={{ span: 24 }}
            validateTrigger="onBlur"
          >
            <Form.Item name="tdexdConnectUrl" className="mb-8">
              <Input.TextArea
                placeholder="Paste the tdexdconnect url or scan QR code"
                onPaste={showDownloadCertModal}
              />
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
              <Button htmlType="submit" className="w-100" disabled={!isValidCert}>
                PAIR DASHBOARD
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Modal
        title="Download & install TLS Certificate"
        visible={isDownloadCertModalVisible}
        onOk={() => {
          try {
            const { host, cert, macaroon } = extractHostCertMacaroon(form.getFieldValue('tdexdConnectUrl'));
            if (host) {
              dispatch(setTdexDaemonBaseUrl('https://' + host));
            } else {
              throw new Error('Tdexd Connect URL is not valid');
            }
            if (cert) {
              const certPem = decodeCert(cert);
              downloadCert(certPem);
              setIsValidCert(true);
              setIsDownloadCertModalVisible(false);
            } else {
              throw new Error('Tdexd Connect URL is not valid');
            }
            if (macaroon) {
              const decodedMacaroonHex = decodeMacaroon(macaroon);
              dispatch(setMacaroonCredentials(decodedMacaroonHex));
              setMacaroon(decodedMacaroonHex);
            }
          } catch (err) {
            // @ts-ignore
            notification.error({ message: err.message });
          }
        }}
        onCancel={() => setIsDownloadCertModalVisible(false)}
      >
        <Title className="dm-sans dm-sans__xx dm-sans__bold" level={3}>
          Please read carefully
        </Title>
        <ol className="dm-mono dm-mono__x">
          <li>Accept to download the daemon TLS certificate</li>
          <li>Double click on it to install</li>
          <li>Mark it as "always trust"</li>
          <li>Click PAIR DASHBOARD button to finish onboarding</li>
        </ol>
      </Modal>
    </>
  );
};
