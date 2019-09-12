import React from 'react';
import { List, Button } from 'antd';

class ViewTask extends React.PureComponent {
  render() {
    const { tasks, removeTask } = this.props;
    return (
      <div className='tasks_list'>
        <List itemLayout="horizontal">
          {tasks.map(item => {
            return (
              <List.Item key={item.id}>
                <Button
                  type="primary"
                  style={{ marginRight: 10 }}
                  onClick={removeTask(item.id)}
                >
                  -
                </Button>
                <List.Item.Meta
                  description={item.text}
                />
              </List.Item>
            )
          })}
          {tasks.length && (
            <List.Item>
              <p>
                {tasks.length} task{tasks.length > 1 && 's'}
              </p>
            </List.Item>
          )
          }
        </List>
      </div>
    )
  }
}

export default ViewTask;