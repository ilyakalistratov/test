import React from 'react';
import { Form, Input } from 'antd';

class ConvertToDollar extends React.Component {

  render() {
    const { dollar, handleDollarChange } = this.props;

    return (
      <Form>
        <Form.Item label='Enter dollar amount:'>
          <Input type="text" placeholder='' value={dollar} onChange={handleDollarChange} />
        </Form.Item>
      </Form>
    )
  }
}
export default ConvertToDollar;