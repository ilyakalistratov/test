import React from 'react';
import { Form, Input } from 'antd';

class AddTask extends React.Component {

  render() {
    return (
      <div>
        <Form onSubmit={this.props.addTask} >
          <Form.Item >
            <Input type="text" value={this.props.itemValue} required placeholder='new task...' onChange={this.props.addItemValue} />
          </Form.Item>
        </Form>
      </div >
    )
  }
}
export default AddTask;