import { Input, Form } from 'antd';
import classNames from 'classnames';
import React from 'react';

import { lbtcUnitOrTickerToFractionalDigits } from '../../utils';

interface InputAmountProps {
  assetPrecision: number;
  formItemName: string;
  hasError?: boolean;
  lbtcUnitOrTicker: string;
  setInputValue: (value: string) => void;
  suffix?: string;
  disabled?: boolean;
}

export const InputAmount = ({
  assetPrecision,
  formItemName,
  hasError,
  lbtcUnitOrTicker,
  setInputValue,
  suffix,
  disabled,
}: InputAmountProps): JSX.Element => {
  return (
    <Form.Item
      name={formItemName}
      className={classNames('balance-input-container d-flex justify-end dm-mono mb-0', {
        'has-error': hasError,
      })}
    >
      <Input
        disabled={disabled ?? false}
        type="text"
        placeholder="0"
        suffix={suffix}
        onBlur={(ev) => {
          if (ev.target.value === '') setInputValue('0');
        }}
        onFocus={(ev) => {
          if (ev.target.value === '0') setInputValue('');
        }}
        onChange={(ev) => {
          if (ev.target.value.includes(',')) {
            setInputValue(ev.target.value.replace(',', '.'));
          } else if (ev.target.value.includes('.') && ev.target.value.split('.').length > 2) {
            // No more than one dot
            setInputValue(ev.target.value.slice(0, -1));
          } else if (
            ev.target.value.includes('.') &&
            ev.target.value.split('.')[1].length >
              lbtcUnitOrTickerToFractionalDigits(lbtcUnitOrTicker, assetPrecision)
          ) {
            // No more than x decimals
            setInputValue(ev.target.value.slice(0, -1));
          } else {
            setInputValue(ev.target.value);
          }
        }}
        onKeyPress={(ev) => {
          // No dot if L-sats
          if (lbtcUnitOrTicker === 'L-sats' && !ev.key.match(/^[0-9]+$/)) ev.preventDefault();
          // Only numbers and dot
          if (!ev.key.match(/^[0-9.]+$/)) ev.preventDefault();
        }}
      />
    </Form.Item>
  );
};
