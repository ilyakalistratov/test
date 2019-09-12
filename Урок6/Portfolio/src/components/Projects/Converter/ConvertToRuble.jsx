import React from 'react';
import { Form, Input } from 'antd';

const ConvertToRuble = (props) => {
  const { rubble, handleRubleChange } = props;
  return (
    <Form>
      <Form.Item label='Enter amount in rubles:'>
        <Input
          type="text"
          value={rubble}
          placeholder=''
          onChange={handleRubleChange} />
      </Form.Item>
    </Form>
  )
}

export default ConvertToRuble;