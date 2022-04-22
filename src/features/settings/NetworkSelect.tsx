import { Col, Row, Select, Typography } from 'antd';
import type { NetworkString } from 'ldk';

import { configRecord } from '../../app/config';
import { useTypedDispatch, useTypedSelector } from '../../app/store';

import { setExplorerLiquidAPI, setExplorerLiquidUI, setNetwork } from './settingsSlice';

const { Title } = Typography;
const { Option } = Select;

export const NetworkSelect = (): JSX.Element => {
  const dispatch = useTypedDispatch();
  const network = useTypedSelector(({ settings }) => settings.network);

  return (
    <div className="mb-4">
      <Row>
        <Col span={24}>
          <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey" level={3}>
            Network
          </Title>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Select
            className="ant-select-short"
            dropdownClassName="ant-select-short"
            value={network}
            onChange={(network: NetworkString) => {
              dispatch(setNetwork(network));
              dispatch(setExplorerLiquidAPI(configRecord[network].explorerLiquidAPI));
              dispatch(setExplorerLiquidUI(configRecord[network].explorerLiquidUI));
            }}
          >
            <Option value="liquid">Liquid</Option>
            <Option value="testnet">Testnet</Option>
            <Option value="regtest">Regtest</Option>
          </Select>
        </Col>
      </Row>
    </div>
  );
};
