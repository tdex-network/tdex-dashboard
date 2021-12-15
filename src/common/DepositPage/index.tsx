import './depositPage.less';
import Icon from '@ant-design/icons';
import { Breadcrumb, Button, Checkbox, Col, Row, Typography } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import QRCode from 'qrcode.react';
import { Link } from 'react-router-dom';

import alertOctogon from '../../assets/images/alert-octagon.svg';
import { ReactComponent as chevronRight } from '../../assets/images/chevron-right.svg';
import { HOME_ROUTE } from '../../routes/constants';

const { Text } = Typography;

interface DepositPageProps {
  type: 'Fee' | 'Market';
  depositAddress: string;
  isFragmenting: boolean;
  handleDeposit: () => void;
  setUseFragmenter: (checked: boolean) => void;
  getNewAddress: () => void;
}

export const DepositPage = ({
  type,
  depositAddress,
  isFragmenting,
  handleDeposit,
  setUseFragmenter,
  getNewAddress,
}: DepositPageProps): JSX.Element => {
  const handleOptInFragmentationChange = (ev: CheckboxChangeEvent) => {
    setUseFragmenter(ev.target.checked);
  };

  return (
    <>
      <Breadcrumb separator={<Icon component={chevronRight} />} className="mb-2">
        <Breadcrumb.Item>
          <Link to={HOME_ROUTE}>Dashboard</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{`${type} Deposit`}</Breadcrumb.Item>
      </Breadcrumb>
      <Row className="panel">
        <Col span={12} className="pr-10">
          <Button className="w-100 mb-4" onClick={getNewAddress}>
            CREATE NEW DEPOSIT ADDRESS
          </Button>
          <Checkbox onChange={handleOptInFragmentationChange} className="dm-sans dm-sans__x mt-4">
            Advanced: split deposit into multiple fragments for concurrent trade support
          </Checkbox>
        </Col>
        <Col span={12}>
          <Row className="panel panel__grey panel__top">
            <Col span={8} offset={8}>
              <QRCode className="qr-code" level="H" value={depositAddress} />
            </Col>
          </Row>
          <Row className="py-6 deposit-address">
            <Col span={21} offset={1}>
              <Text className="address" copyable>
                {depositAddress}
              </Text>
            </Col>
          </Row>
          <Row className="panel panel__grey panel__bottom text-center">
            <Col span={20} offset={2}>
              <img src={alertOctogon} alt="alert" className="mb-2" />
              <p>
                The pending transaction will appear here, once you are done depositing assets click on CONFIRM
                to claim your deposit.
              </p>
              <Row>
                <Col span={20} offset={2}>
                  <Button onClick={handleDeposit} loading={isFragmenting}>
                    CONFIRM DEPOSIT
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
