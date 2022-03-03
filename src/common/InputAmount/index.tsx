import { Input, Form } from 'antd';
import classNames from 'classnames';
import React from 'react';

import { unitToFixedDigits } from '../../utils';

interface InputAmountProps {
  formItemName: string;
  hasError: boolean;
  setInputValue: (value: string) => void;
  // LbtcUnit or ticker
  unit: string;
}

export const InputAmount = ({
  formItemName,
  hasError,
  setInputValue,
  unit,
}: InputAmountProps): JSX.Element => {
  return (
    <Form.Item
      name={formItemName}
      className={classNames('balance-input-container d-flex justify-end dm-mono mb-2', {
        'has-error': hasError,
      })}
    >
      <Input
        type="text"
        placeholder="0"
        onBlur={(ev) => {
          if (ev.target.value === '') setInputValue('0');
        }}
        onFocus={(ev) => {
          if (ev.target.value === '0') setInputValue('');
        }}
        onChange={(ev) => {
          if (ev.target.value.includes(',')) {
            setInputValue(ev.target.value.replace(',', '.'));
          }
          if (ev.target.value.includes('.')) {
            // No more than one dot
            if (ev.target.value.split('.').length > 2) {
              setInputValue(ev.target.value.slice(0, -1));
            }
            // No more than x decimals
            if (ev.target.value.split('.')[1].length > unitToFixedDigits(unit)) {
              setInputValue(ev.target.value.slice(0, -1));
            }
          }
        }}
        onKeyPress={(ev) => {
          // No dot if L-sats
          if (unit === 'L-sats' && !ev.key.match(/^[0-9]+$/)) ev.preventDefault();
          // Only numbers and dot
          if (!ev.key.match(/^[0-9.]+$/)) ev.preventDefault();
        }}
      />
    </Form.Item>
  );
};
