import './onboardingPairing.less';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Col, Form, Input, Modal, notification, Row, Typography } from 'antd';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useTypedDispatch, useTypedSelector } from '../../app/store';
import { HOME_ROUTE, ONBOARDING_CREATE_OR_RESTORE_ROUTE } from '../../routes/constants';
import {
  decodeCert,
  decodeBase64UrlMacaroon,
  downloadCert,
  extractConnectUrlData,
  checkConnectUrlDataValidity,
} from '../../utils';
import { liquidApi } from '../liquid.api';
import { operatorApi } from '../operator/operator.api';
import {
  getTdexdConnectUrl,
  setBaseUrl,
  setConnectUrlProto,
  setMacaroonCredentials,
  setTdexdConnectUrl,
  setUseProxy,
} from '../settings/settingsSlice';
import { walletApi } from '../wallet/wallet.api';

import { walletUnlockerApi } from './walletUnlocker.api';
import { setIsPackaged } from './walletUnlockerSlice';

const { Title } = Typography;

interface IFormInputs {
  tdexdConnectUrl: string;
}

interface IPasswordFormInputs {
  password: string;
}

export const OnboardingPairing = (): JSX.Element => {
  const [form] = Form.useForm<IFormInputs>();
  const [passwordForm] = Form.useForm<IPasswordFormInputs>();
  const [isValidConnectUrl, setIsValidConnectUrl] = useState<boolean>(false);
  const [showRedBorder, setShowRedBorder] = useState<boolean>(false);
  const [isDownloadCertModalVisible, setIsDownloadCertModalVisible] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const { useProxy, isTauri } = useTypedSelector(({ settings }) => settings);
  const isPackaged = useTypedSelector(({ walletUnlocker }) => walletUnlocker.isPackaged);
  // UnlockWallet Modal
  const [isEnterPasswordModalVisible, setIsEnterPasswordModalVisible] = useState<boolean>(false);
  const handleEnterPasswordModalCancel = () => setIsEnterPasswordModalVisible(false);
  const [isTdexdConnectUrlLoading, setIsTdexdConnectUrlLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      // Reset the APIs state completely
      // Especially useful when redirected on this page after failed pairing attempt
      dispatch(liquidApi.util.resetApiState());
      dispatch(operatorApi.util.resetApiState());
      dispatch(walletUnlockerApi.util.resetApiState());
      dispatch(walletApi.util.resetApiState());
      // Auto connect if IS_PACKAGED (like in Umbrel)
      if ((window as any).IS_PACKAGED && (window as any).TDEX_DAEMON_URL) {
        // isPackaged is false on first load, set it to true
        dispatch(setIsPackaged(true));
        dispatch(setBaseUrl((window as any).TDEX_DAEMON_URL));
        const isReady = await dispatch(walletUnlockerApi.endpoints.isReady.initiate());
        // If connection to daemon fails, switch to regular pairing and show toast error message
        if (isReady.error) {
          dispatch(setIsPackaged(false));
          notification.error({
            message: 'Automatic connection with TDEX connect url from environment variable has failed',
            key: 'auto_connect_failure',
          });
        } else {
          if (isReady.data?.initialized) {
            setIsEnterPasswordModalVisible(true);
          } else {
            navigate(ONBOARDING_CREATE_OR_RESTORE_ROUTE);
          }
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEnterPasswordModalOk = async () => {
    try {
      setIsTdexdConnectUrlLoading(true);
      const values = await passwordForm.validateFields();
      const connectUrl = await dispatch(getTdexdConnectUrl(values.password)).unwrap();
      const connectUrlData = extractConnectUrlData(connectUrl);
      if (connectUrlData && checkConnectUrlDataValidity(connectUrlData)) {
        await onFinish(connectUrl);
      }
      passwordForm.resetFields();
      handleEnterPasswordModalCancel();
    } catch (err) {
      if (typeof err === 'string' && err === 'Unauthorized') {
        notification.error({ message: 'Invalid password', key: 'invalid_password' });
      } else {
        dispatch(setIsPackaged(false));
        notification.error({
          message: 'Automatic connection with TDEX connect url from environment variable has failed',
          key: 'auto_connect_failure',
        });
      }
    } finally {
      setIsTdexdConnectUrlLoading(false);
    }
  };

  /**
   * onFinish form
   * @param connectUrl Comes from textarea input or env var
   */
  const onFinish = async (connectUrl?: string) => {
    try {
      let tdexdConnectUrl: string;
      if (connectUrl) {
        tdexdConnectUrl = connectUrl;
      } else {
        tdexdConnectUrl = (await form.validateFields()).tdexdConnectUrl;
      }
      const connectData = extractConnectUrlData(tdexdConnectUrl);
      // If no cert we don't use proxy
      const isProxyNeeded = useProxy && !!connectData?.cert;
      dispatch(setUseProxy(isProxyNeeded));
      if (!isProxyNeeded) {
        dispatch(setBaseUrl(`${connectData?.proto}://` + connectData?.host));
      }
      dispatch(setTdexdConnectUrl(tdexdConnectUrl));
      dispatch(setConnectUrlProto(connectData?.proto));
      if (connectData?.macaroon) {
        const decodedMacaroonHex = decodeBase64UrlMacaroon(connectData.macaroon);
        dispatch(setMacaroonCredentials(decodedMacaroonHex));
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

  const downloadCertificate = (connectString: string) => {
    try {
      const connectData = extractConnectUrlData(connectString);
      const certPem = decodeCert(connectData?.cert ?? '');
      if (!useProxy) {
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
      {isPackaged ? (
        <Modal
          style={{ textAlign: 'center' }}
          title="Enter Password"
          visible={isEnterPasswordModalVisible}
          onOk={handleEnterPasswordModalOk}
          onCancel={() => {
            passwordForm.resetFields();
            handleEnterPasswordModalCancel();
          }}
          confirmLoading={isTdexdConnectUrlLoading}
          closable={true}
          maskClosable={true}
          maskStyle={{ backdropFilter: 'blur(6px)' }}
        >
          <Form layout="vertical" form={passwordForm} name="unlock_wallet_form" wrapperCol={{ span: 24 }}>
            <Form.Item noStyle label="Enter your password" name="password">
              <Input.Password
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                className="input__medium"
              />
            </Form.Item>
          </Form>
        </Modal>
      ) : (
        <div className="panel">
          <Row id="pairing" className="w-100">
            <Col span={18} offset={3}>
              <Title level={2} className="dm-sans dm-sans__xx dm-sans__bold text-center mb-8">
                Welcome on TDEX Dashboard
              </Title>
              <Form
                onFinish={({ tdexdConnectUrl }) => onFinish(tdexdConnectUrl)}
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
                      const connectData = extractConnectUrlData(connectString);
                      if (connectData && checkConnectUrlDataValidity(connectData)) {
                        if (connectData?.cert && !isTauri && !useProxy) {
                          showDownloadCertModal();
                        }
                      }
                    }}
                    onChange={(ev) => {
                      const connectData = extractConnectUrlData(ev.target.value);
                      if (form.getFieldValue('tdexdConnectUrl')?.length > 0) {
                        if (connectData && checkConnectUrlDataValidity(connectData)) {
                          setIsValidConnectUrl(true);
                          setShowRedBorder(false);
                        } else {
                          setIsValidConnectUrl(false);
                          setShowRedBorder(true);
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
      )}
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
