import { DownOutlined } from '@ant-design/icons';
import type { MenuProps, RadioChangeEvent } from 'antd';
import { Button, Dropdown, Grid, Radio, Space } from 'antd';
import classNames from 'classnames';
import React from 'react';

import type { TableMode } from './index';

const { useBreakpoint } = Grid;

export interface ButtonsTableModeProps {
  mode: TableMode;
  setMode: (mode: ButtonsTableModeProps['mode']) => void;
}

const dropdownItems = ({ mode, setMode }: ButtonsTableModeProps): MenuProps['items'] => [
  {
    label: (
      <Button type="ghost" className={classNames({ active: mode === 'all' })} onClick={() => setMode('all')}>
        All
      </Button>
    ),
    key: '0',
  },
  {
    label: (
      <Button
        type="ghost"
        className={classNames({ active: mode === 'trade' })}
        onClick={() => setMode('trade')}
      >
        Swap
      </Button>
    ),
    key: '1',
  },
  {
    label: (
      <Button
        type="ghost"
        className={classNames({ active: mode === 'deposit' })}
        onClick={() => setMode('deposit')}
      >
        Deposit
      </Button>
    ),
    key: '2',
  },
  {
    label: (
      <Button
        type="ghost"
        className={classNames({ active: mode === 'withdraw' })}
        onClick={() => setMode('withdraw')}
      >
        Withdraw
      </Button>
    ),
    key: '3',
  },
];

const ButtonsTableMode = ({ mode, setMode }: ButtonsTableModeProps) => {
  const handleTableModeChange = (ev: RadioChangeEvent) => setMode(ev.target.value);
  return (
    <Radio.Group onChange={handleTableModeChange} value={mode} className="ghost radio-group-txs-table">
      <Radio.Button className="radio-btn-txs-table" value="all">
        All
      </Radio.Button>
      <Radio.Button className="radio-btn-txs-table" value="trade">
        Swap
      </Radio.Button>
      <Radio.Button className="radio-btn-txs-table" value="deposit">
        Deposit
      </Radio.Button>
      <Radio.Button className="radio-btn-txs-table" value="withdraw">
        Withdraw
      </Radio.Button>
    </Radio.Group>
  );
};

// Below lg breakpoint we use dropdown menu, above lg breakpoint we use radio buttons
export const TableModeSelector = ({
  mode,
  setMode,
}: {
  mode: TableMode;
  setMode: (mode: TableMode) => void;
}): JSX.Element => {
  const screens = useBreakpoint();

  return (
    <>
      {screens.lg ? (
        <ButtonsTableMode mode={mode} setMode={setMode} />
      ) : (
        <Dropdown
          overlayClassName="table-dropdown"
          menu={{ items: dropdownItems({ mode, setMode }) }}
          trigger={['click']}
        >
          <Space>
            Type
            <DownOutlined className="dm-mono dm-mono__xs" />
          </Space>
        </Dropdown>
      )}
    </>
  );
};
