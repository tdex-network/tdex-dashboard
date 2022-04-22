import { Col, Form, notification, Row, Typography } from 'antd';

import { useTypedDispatch, useTypedSelector } from '../../app/store';
import { SelectWithAddition } from '../../common/SelectWithAddition';

import { addExplorerLiquidAPI, setExplorerLiquidAPI } from './settingsSlice';

const { Title } = Typography;

export interface ExplorerLiquidApiFormValue {
  explorerLiquidApi: string;
}

export const ExplorersLiquidApiForm = (): JSX.Element => {
  const dispatch = useTypedDispatch();
  const [form] = Form.useForm<ExplorerLiquidApiFormValue>();
  const { explorersLiquidAPI, explorerLiquidAPI } = useTypedSelector(({ settings }) => settings);

  const onSubmit = async () => {
    try {
      const values = await form.validateFields();
      dispatch(setExplorerLiquidAPI(values.explorerLiquidApi));
    } catch (err) {
      // @ts-ignore
      notification.error({ message: err.message });
    }
  };

  return (
    <div className="mb-4">
      <Row>
        <Col span={24}>
          <Title className="dm-sans dm-sans__x dm-sans__bold dm-sans__grey" level={3}>
            Liquid explorer API endpoints
          </Title>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form
            form={form}
            layout="vertical"
            name="explorer_liquid_api_form"
            onFinish={onSubmit}
            validateTrigger="onBlur"
            initialValues={{ explorerLiquidAPI }}
          >
            <Form.Item
              noStyle
              name="explorerLiquidAPI"
              rules={[
                { required: true },
                { type: 'string', message: 'Please enter a valid explorer endpoint' },
              ]}
            >
              <SelectWithAddition
                className="ant-select-short"
                items={explorersLiquidAPI}
                selectedItem={explorerLiquidAPI}
                addNewItem={(item: string) => {
                  if (item?.startsWith('http://') || item?.startsWith('https://')) {
                    dispatch(addExplorerLiquidAPI(item));
                  } else {
                    notification.error({ message: 'item is not valid', key: 'item is not valid' });
                  }
                }}
                selectItem={(item: string) => dispatch(setExplorerLiquidAPI(item))}
              />
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
