import React from 'react';
import s from './Task.module.css';

class TaskAdd extends React.Component {


  render() {
    return (
      <div className={s.taskForm}>
        <input type="text" value={this.props.itemValue} required placeholder='new task...' onChange={this.props.addItemValue} />
        <button onClick={this.props.addTask}>Add</button>
      </div>
    )
  }
}
export default TaskAdd;