import React from 'react';
import s from './Task.module.css';

class TaskAdd extends React.Component {


  render() {
    return (
      <div className={s.taskForm}>
        <form className='todo_form' onSubmit={this.props.addTask}>
          <input type="text" value={this.props.itemValue} required placeholder='new task...' onChange={this.props.addItemValue} />
          <button>Add</button>
        </form>
      </div>
    )
  }
}
export default TaskAdd;