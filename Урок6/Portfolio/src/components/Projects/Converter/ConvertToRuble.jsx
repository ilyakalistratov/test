import React from 'react';
import { Form, Input } from 'antd';

class ConvertToRuble extends React.Component {

  render() {
    const { rubble, handleRubleChange } = this.props;

    return (
      <Form>
        <Form.Item label='Enter amount in rubles:'>
          <Input type="text" value={rubble} placeholder='' onChange={handleRubleChange} />
        </Form.Item>
      </Form>


    )
  }
}
export default ConvertToRuble;