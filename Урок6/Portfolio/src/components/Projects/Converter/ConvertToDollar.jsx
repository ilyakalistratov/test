import React from 'react';
import { Form, Input } from 'antd';

const ConvertToDollar = (props) => {
  const { dollar, handleDollarChange } = props;
  return (
    <Form>
      <Form.Item label='Enter dollar amount:'>
        <Input
          type="text"
          placeholder=''
          value={dollar}
          onChange={handleDollarChange} />
      </Form.Item>
    </Form>
  )
}

export default ConvertToDollar;