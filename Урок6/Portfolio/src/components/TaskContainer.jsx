import React from 'react';
import AddTask from './AddTask';
import ViewTask from './ViewTask';
import s from './Task.module.css';
import { uniqueId } from 'lodash';

class TaskContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [], item: '' }
  }
  addItemValue = (e) => {
    let val = e.target.value;
    this.setState({ item: val });
  }
  addTask = (e) => {
    e.preventDefault();
    let { tasks } = this.state;
    let newTask = { id: uniqueId(), text: this.state.item };
    this.setState({ tasks: [newTask, ...tasks] });
    this.setState({ item: '' });
  }
  removeTask = (id) => (e) => {
    e.preventDefault();
    let { tasks } = this.state;
    let filtered = tasks.filter(item => item.id != id)
    this.setState({ tasks: filtered })
  }

  render() {
    return (
      <div className={s.container}>
        <AddTask addItemValue={this.addItemValue} itemValue={this.state.item} addTask={this.addTask} />
        <ViewTask tasks={this.state.tasks} removeTask={this.removeTask} />
      </div>
    )
  }
}
export default TaskContainer;