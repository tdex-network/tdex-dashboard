import { PlusOutlined } from '@ant-design/icons';
import { Button, Divider, Input, Select } from 'antd';
import type { ChangeEventHandler } from 'react';
import { useState } from 'react';

interface SelectWithAdditionProps {
  items: string[];
  selectedItem: string;
  selectItem: (item: string) => void;
  addNewItem: (item: string) => void;
}

export const SelectWithAddition = ({
  items,
  selectedItem,
  selectItem,
  addNewItem,
}: SelectWithAdditionProps): JSX.Element => {
  const [item, setItem] = useState<string>('');
  const onItemChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setItem(event.target.value);
  };

  const addItem = () => {
    if (item) {
      addNewItem(item);
      setItem('');
    }
  };

  const handleSelection = (item: string) => {
    selectItem(item);
  };

  return (
    <Select
      className="w-100"
      value={selectedItem}
      onSelect={handleSelection}
      dropdownRender={(menu) => (
        <div>
          {menu}
          <Divider className="my-1" />
          <div className="d-flex flex-nowrap p-2">
            <Input value={item} onChange={onItemChange} />
            <Button type="link" className="p-2 d-flex" style={{ cursor: 'pointer' }} onClick={addItem}>
              <PlusOutlined /> Add item
            </Button>
          </div>
        </div>
      )}
    >
      {items?.map((item, index) => (
        <Select.Option key={`${item}_${index}`} value={item}>
          {item}
        </Select.Option>
      ))}
    </Select>
  );
};
