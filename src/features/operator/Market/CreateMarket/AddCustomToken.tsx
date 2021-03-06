import { Button, Form, Input, notification } from 'antd';
import classNames from 'classnames';
import type { ChangeEventHandler } from 'react';
import React, { useEffect, useState } from 'react';

import { useTypedDispatch } from '../../../../app/store';
import checkmark from '../../../../assets/images/checkmark.svg';
import type { Asset } from '../../../../domain/asset';
import { useGetAssetDataQuery } from '../../../liquid.api';
import { setAsset } from '../../../settings/settingsSlice';

interface IFormInputs {
  customAssetId: string;
}

interface AddCustomTokenProps {
  className: string;
  setBaseAsset: (asset: Asset) => void;
  setQuoteAsset: (asset: Asset) => void;
  setShowGenericAssetForm: (showGenericAssetForm: boolean) => void;
  activeSelectComponent: 'base' | 'quote';
}

export const AddCustomToken = ({
  className,
  setBaseAsset,
  setQuoteAsset,
  setShowGenericAssetForm,
  activeSelectComponent,
}: AddCustomTokenProps): JSX.Element => {
  const dispatch = useTypedDispatch();
  const [form] = Form.useForm<IFormInputs>();
  const [customAssetId, setCustomAssetId] = useState('');
  const { data: assetData, error } = useGetAssetDataQuery(customAssetId);
  const getAssetDataErrorMsg =
    // @ts-ignore
    error && error?.message !== 'no argument provided' && error?.message !== 'missing argument'
      ? // @ts-ignore
        (error.message as string)
      : null;

  useEffect(() => {
    if (getAssetDataErrorMsg) {
      notification.error({ message: getAssetDataErrorMsg, key: getAssetDataErrorMsg });
    }
  }, [getAssetDataErrorMsg]);

  const onConfirmCustomToken = () => {
    if (!assetData) return;
    const { ticker, asset_id, name, precision } = assetData;
    dispatch(setAsset({ ticker, asset_id, name, precision }));
    if (activeSelectComponent === 'base') {
      setBaseAsset(assetData);
    } else {
      setQuoteAsset(assetData);
    }
    setCustomAssetId('');
    form.resetFields();
    setShowGenericAssetForm(false);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (ev) => {
    setCustomAssetId(ev.target.value);
  };

  return (
    <Form
      layout="vertical"
      form={form}
      name="add_custom_asset_form"
      wrapperCol={{ span: 24 }}
      validateTrigger="onBlur"
      className={className}
      onFinish={onConfirmCustomToken}
    >
      <Form.Item className="input my-4" name="customAssetId">
        <Input
          placeholder="Paste Liquid Asset Hash"
          suffix={
            customAssetId.length === 64 && assetData && !error ? (
              <img src={checkmark} alt="checkmark" />
            ) : null
          }
          onChange={handleChange}
          className={classNames({ error: !!getAssetDataErrorMsg })}
        />
      </Form.Item>
      <Form.Item className="my-4">
        <Button
          htmlType="submit"
          className="w-100"
          disabled={!(customAssetId.length === 64 && assetData && !error)}
        >
          CONFIRM CUSTOM TOKEN
        </Button>
      </Form.Item>
    </Form>
  );
};
