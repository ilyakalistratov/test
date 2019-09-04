import React from 'react';
import { Form, Input } from 'antd';

const AddTask = (props) => {
  return (
    <div>
      <Form onSubmit={props.addTask} >
        <Form.Item >
          <Input type="text" value={props.itemValue} required placeholder='new task...' onChange={props.addItemValue} />
        </Form.Item>
      </Form>
    </div >
  )
}
export default AddTask;