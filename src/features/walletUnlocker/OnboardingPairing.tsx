import './onboardingPairing.less';
import { Button, Col, Form, Input, Modal, notification, Row, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useTypedDispatch, useTypedSelector } from '../../app/store';
import { HOME_ROUTE, ONBOARDING_CREATE_OR_RESTORE_ROUTE } from '../../routes/constants';
import { decodeCert, decodeBase64UrlMacaroon, downloadCert, extractHostCertMacaroon } from '../../utils';
import liquidApi from '../liquid.api';
import operatorApi from '../operator/operator.api';
import { setBaseUrl, setMacaroonCredentials, setTdexdConnectUrl } from '../settings/settingsSlice';
import walletApi from '../wallet/wallet.api';

import walletUnlockerApi from './walletUnlocker.api';

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
  const { useProxy } = useTypedSelector(({ settings }) => settings);

  useEffect(() => {
    // Reset the APIs state completely
    // Especially useful when redirected on this page after failed pairing attempt
    dispatch(liquidApi.util.resetApiState());
    dispatch(operatorApi.util.resetApiState());
    dispatch(walletUnlockerApi.util.resetApiState());
    dispatch(walletApi.util.resetApiState());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      dispatch(setTdexdConnectUrl(values.tdexdConnectUrl));
      if (macaroon) {
        navigate(HOME_ROUTE);
      } else {
        navigate(ONBOARDING_CREATE_OR_RESTORE_ROUTE);
      }
    } catch (err) {
      // @ts-ignore
      notification.error({ message: err.message });
    }
  };

  const showDownloadCertModal = () => {
    setIsDownloadCertModalVisible(true);
  };

  const setConnectUrlDataToStore = (connectString: string) => {
    try {
      const { host, cert, macaroon } = extractHostCertMacaroon(connectString);
      if (!useProxy) {
        if (host) {
          dispatch(setBaseUrl('https://' + host));
        } else {
          throw new Error('Tdexd Connect URL is not valid');
        }
      }
      if (cert) {
        const certPem = decodeCert(cert);
        setIsValidCert(true);
        if (!useProxy) {
          downloadCert(certPem);
          setIsDownloadCertModalVisible(false);
        }
      } else {
        throw new Error('Tdexd Connect URL is not valid');
      }
      if (macaroon) {
        const decodedMacaroonHex = decodeBase64UrlMacaroon(macaroon);
        dispatch(setMacaroonCredentials(decodedMacaroonHex));
        setMacaroon(decodedMacaroonHex);
      }
    } catch (err) {
      console.error('setConnectUrlDataToStore', err);
      if (err instanceof Error) {
        notification.error({ message: err.message });
      }
    }
  };

  return (
    <>
      <div className="panel">
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
              <Form.Item name="tdexdConnectUrl" className="mb-16">
                <Input.TextArea
                  className="overflow-hidden"
                  placeholder="Paste the Tdex daemon connect URL"
                  onPaste={(ev) => {
                    if (!(window as any).__TAURI__ && !(window as any).USE_PROXY) {
                      showDownloadCertModal();
                    } else {
                      const connectString = ev.clipboardData.getData('text');
                      setConnectUrlDataToStore(connectString);
                    }
                  }}
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
      </div>
      <Modal
        title="Download & install TLS Certificate"
        visible={isDownloadCertModalVisible}
        onOk={() => setConnectUrlDataToStore(form.getFieldValue('tdexdConnectUrl'))}
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
