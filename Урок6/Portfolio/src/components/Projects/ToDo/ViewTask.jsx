import React from 'react';
import { List, Button } from 'antd';

const ViewTask = (props) => {
  let removeTask = props.removeTask;
  const { tasks } = props;
  return (
    <div className='tasks_list'>
      <List itemLayout="horizontal">
        {tasks.map(item => {
          return (
            <List.Item key={item.id}>
              <Button type="primary" style={{ marginRight: 10 }} onClick={removeTask(item.id)}>-</Button>
              <List.Item.Meta
                description={item.text}
              />
            </List.Item>
          )
        })}
        {tasks.length > 0 ? (tasks.length === 1 ? <List.Item><p>{tasks.length} task</p></List.Item> : <List.Item><p>{tasks.length} tasks</p></List.Item>) : null}
      </List>
    </div>
  )
}
export default ViewTask;