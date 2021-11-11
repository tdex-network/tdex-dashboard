import './onboardingPairing.less';
import { Button, Col, Form, Input, Modal, notification, Row, Typography } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useTypedDispatch } from '../../app/store';
import { HOME_ROUTE, ONBOARDING_SHOW_MNEMONIC_ROUTE } from '../../routes/constants';
import { setMacaroonCredentials, setTdexdConnectUrl } from '../settings/settingsSlice';

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

  function base64ToHex(str: string) {
    const raw = atob(str);
    let result = '';
    for (let i = 0; i < raw.length; i++) {
      const hex = raw.charCodeAt(i).toString(16);
      result += hex.length === 2 ? hex : '0' + hex;
    }
    return result.toUpperCase();
  }

  function downloadBase64File(contentType: string, base64Data: string, fileName: string) {
    const paramsString = base64Data.split('?')[1];
    const params = new URLSearchParams(paramsString);
    const { cert, macaroon } = Object.fromEntries(params.entries());
    if (!cert) {
      notification.error({ message: 'tdexdConnectUrl not valid' });
      return;
    }
    // Macaroon
    // https://github.com/tdex-network/tdex-daemon/issues/499
    if (macaroon) {
      let macaroonFixed = macaroon.replaceAll('-', '+');
      macaroonFixed = macaroonFixed.replaceAll('_', '/');
      const macaroonHex = base64ToHex(macaroonFixed);
      dispatch(setMacaroonCredentials(macaroonHex));
      setMacaroon(macaroonHex);
    }
    // Format certificate
    setIsValidCert(true);
    // Add line breaks
    let certFormatted = cert.replace(/(.{64})/g, '$1\n');
    // https://github.com/tdex-network/tdex-daemon/issues/499
    certFormatted = certFormatted.replaceAll('-', '+');
    certFormatted = certFormatted.replaceAll('_', '/');
    certFormatted += '==';
    //
    const certWithHeaders = '-----BEGIN CERTIFICATE-----\n' + certFormatted + '\n-----END CERTIFICATE-----';
    const uriContent = URL.createObjectURL(new Blob([certWithHeaders], { type: contentType }));
    const link = document.createElement('a');
    link.setAttribute('href', uriContent);
    link.setAttribute('download', fileName);
    const event = new MouseEvent('click');
    link.dispatchEvent(event);
  }

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
          downloadBase64File('application/x-pem-file', form.getFieldValue('tdexdConnectUrl'), 'cert.pem');
          setIsDownloadCertModalVisible(false);
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
