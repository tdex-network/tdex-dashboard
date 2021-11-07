import './onboardingPairing.less';
import { Button, Col, Form, Input, notification, Row, Typography } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { useTypedDispatch } from '../../app/store';
import { ONBOARDING_SHOW_MNEMONIC_ROUTE } from '../../routes/constants';
import { setTdexdConnectUrl } from '../settings/settingsSlice';

const { Title } = Typography;

interface IFormInputs {
  tdexdConnectUrl: string;
}

export const OnboardingPairing = (): JSX.Element => {
  const [form] = Form.useForm<IFormInputs>();
  const history = useHistory();
  const dispatch = useTypedDispatch();

  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      dispatch(setTdexdConnectUrl(values.tdexdConnectUrl));
      history.push(ONBOARDING_SHOW_MNEMONIC_ROUTE);
    } catch (err) {
      // @ts-ignore
      notification.error({ message: err.message });
    }
  };

  // function downloadBase64File(contentType: string, base64Data: string, fileName: string) {
  //   const data = '-----BEGIN CERTIFICATE-----\n' + base64Data + '\n-----END CERTIFICATE-----';
  //   const linkSource = `data:${contentType};base64,${data}`;
  //   const downloadLink = document.createElement('a');
  //   //downloadLink.style = 'none';
  //   downloadLink.href = linkSource;
  //   downloadLink.download = fileName;
  //   downloadLink.click();
  // }

  return (
    <Row id="pairing" className="w-100">
      <Col span={18} offset={3}>
        <Title level={2} className="dm-sans dm-sans__medium dm-sans__bold text-center mb-8">
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
            <Input.TextArea placeholder="Paste the tdexdconnect url or scan QR code" />
          </Form.Item>
          <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
            <Button htmlType="submit">PAIR DASHBOARD</Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
