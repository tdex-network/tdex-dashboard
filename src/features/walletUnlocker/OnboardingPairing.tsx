import './onboardingPairing.less';
import { Button, Col, Form, Input, Modal, notification, Row, Typography } from 'antd';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useTypedDispatch, useTypedSelector } from '../../app/store';
import type { RootState } from '../../app/store';
import { HOME_ROUTE, ONBOARDING_CREATE_OR_RESTORE_ROUTE } from '../../routes/constants';
import { decodeCert, decodeBase64UrlMacaroon, downloadCert, extractHostCertMacaroon } from '../../utils';
import { liquidApi } from '../liquid.api';
import { operatorApi } from '../operator/operator.api';
import { setBaseUrl, setMacaroonCredentials, setTdexdConnectUrl } from '../settings/settingsSlice';
import { walletApi } from '../wallet/wallet.api';

import { useIsReadyQuery, walletUnlockerApi } from './walletUnlocker.api';

const { Title } = Typography;

interface IFormInputs {
  tdexdConnectUrl: string;
}

export const OnboardingPairing = (): JSX.Element => {
  const [form] = Form.useForm<IFormInputs>();
  const [isValidConnectUrl, setIsValidConnectUrl] = useState<boolean>(false);
  const [showRedBorder, setShowRedBorder] = useState<boolean>(false);
  const [isDownloadCertModalVisible, setIsDownloadCertModalVisible] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const { tdexdConnectUrl, proxyHealth, useProxy, isTauri } = useTypedSelector(
    ({ settings }: RootState) => settings
  );
  const { isSuccess: isReadySuccess, isError: isReadyError } = useIsReadyQuery(undefined, {
    // Skip if no tdexdConnectUrl or if proxy is used but not serving
    skip: !tdexdConnectUrl || (proxyHealth && proxyHealth !== 'SERVING'),
  });

  useEffect(() => {
    console.log(isReadyError, isReadySuccess);
    if (isReadySuccess) {
      navigate(HOME_ROUTE);
    }
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
      const connectData = extractHostCertMacaroon(values.tdexdConnectUrl);
      if (!useProxy) {
        if (connectData?.cert) {
          dispatch(setBaseUrl('https://' + connectData?.host));
        } else {
          dispatch(setBaseUrl('http://' + connectData?.host));
        }
      }

      dispatch(setTdexdConnectUrl(values.tdexdConnectUrl));

      if (connectData?.macaroon) {
        const decodedMacaroonHex = decodeBase64UrlMacaroon(connectData.macaroon);
        dispatch(setMacaroonCredentials(decodedMacaroonHex));
      }

      setTimeout(() => {
        console.log(isReadyError, isReadySuccess);
        if (isReadyError) {
          navigate(ONBOARDING_CREATE_OR_RESTORE_ROUTE);
        } else if (isReadySuccess) {
          navigate(HOME_ROUTE);
        }
      }, 2000);
    } catch (err) {
      // @ts-ignore
      notification.error({ message: err.message });
    }
  };

  const showDownloadCertModal = () => {
    setIsDownloadCertModalVisible(true);
  };

  const downloadCertificate = (connectString: string) => {
    try {
      const connectData = extractHostCertMacaroon(connectString);
      const certPem = decodeCert(connectData?.cert ?? '');
      if (!useProxy && connectData?.cert && connectData?.macaroon) {
        downloadCert(certPem);
        setIsDownloadCertModalVisible(false);
      }
    } catch (err) {
      console.error('downloadCertificate', err);
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
                  className={classNames('scrollbar', {
                    'invalid-connect-url': showRedBorder,
                  })}
                  placeholder="Paste the TDEX connect URL"
                  onPaste={(ev) => {
                    const connectString = ev.clipboardData.getData('text');
                    const connectData = extractHostCertMacaroon(connectString);
                    if (connectData?.host && connectData?.cert) {
                      if (!isTauri && !useProxy) {
                        showDownloadCertModal();
                      }
                    }
                  }}
                  onChange={(ev) => {
                    const connectData = extractHostCertMacaroon(ev.target.value);
                    if (form.getFieldValue('tdexdConnectUrl')?.length > 0) {
                      if (!connectData?.host) {
                        setIsValidConnectUrl(false);
                        setShowRedBorder(true);
                      } else {
                        setIsValidConnectUrl(true);
                        setShowRedBorder(false);
                      }
                    } else {
                      setShowRedBorder(false);
                    }
                  }}
                />
              </Form.Item>
              <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                <Button htmlType="submit" className="w-100" disabled={!isValidConnectUrl}>
                  CONNECT
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
      <Modal
        title="Download & install TLS Certificate"
        visible={isDownloadCertModalVisible}
        onOk={() => downloadCertificate(form.getFieldValue('tdexdConnectUrl'))}
        onCancel={() => setIsDownloadCertModalVisible(false)}
      >
        <Title className="dm-sans dm-sans__xx dm-sans__bold" level={3}>
          Please read carefully
        </Title>
        <ol className="dm-mono dm-mono__x">
          <li>Accept to download the daemon TLS certificate</li>
          <li>Double click on it to install</li>
          <li>Mark it as "always trust"</li>
          <li>Click CONNECT button to finish onboarding</li>
        </ol>
      </Modal>
    </>
  );
};
