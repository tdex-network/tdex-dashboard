import { Form, notification } from 'antd';
import React from 'react';

import { useTypedDispatch, useTypedSelector } from '../../app/store';
import { SelectWithAddition } from '../../common/SelectWithAddition';

import { addExplorerLiquidUI, setExplorerLiquidUI } from './settingsSlice';

export interface ExplorerLiquidUiFormValue {
  explorerLiquidUI: string;
}

export const ExplorersLiquidUiForm = (): JSX.Element => {
  const dispatch = useTypedDispatch();
  const [form] = Form.useForm<ExplorerLiquidUiFormValue>();
  const { explorersLiquidUI, explorerLiquidUI } = useTypedSelector(({ settings }) => settings);

  const onSubmit = async () => {
    try {
      const values = await form.validateFields();
      dispatch(setExplorerLiquidUI(values.explorerLiquidUI));
    } catch (err) {
      // @ts-ignore
      notification.error({ message: err.message });
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      name="explorer_liquid_ui_form"
      onFinish={onSubmit}
      validateTrigger="onBlur"
      initialValues={{ explorerLiquidUI }}
    >
      <Form.Item
        noStyle
        name="explorerLiquidUI"
        rules={[{ required: true }, { type: 'string', message: 'Please enter a valid explorer endpoint' }]}
      >
        <SelectWithAddition
          items={explorersLiquidUI}
          selectedItem={explorerLiquidUI}
          addNewItem={(item: string) => {
            if (item?.startsWith('http://') || item?.startsWith('https://')) {
              dispatch(addExplorerLiquidUI(item));
            } else {
              notification.error({ message: 'item is not valid' });
            }
          }}
          selectItem={(item: string) => dispatch(setExplorerLiquidUI(item))}
        />
      </Form.Item>
    </Form>
  );
};
