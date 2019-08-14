import React from 'react';
import TaskAdd from './TaskAdd';
import TaskView from './TaskView';
import s from './Task.module.css';

class TaskContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: ['Сходить в магазин', 'Прочитать про философию React', 'Решить задачи на Codewars'], item: '' }
  }
  addItemValue = (e) => {
    let val = e.target.value;
    this.setState({ item: val });
  }
  addTask = (e) => {
    e.preventDefault();
    let tasks = this.state.tasks;
    let newTask = this.state.item;
    this.setState({ tasks: [newTask, ...tasks] });
    this.setState({ item: '' });
  }

  render() {
    return (
      <div className={s.container}>
        <TaskAdd addItemValue={this.addItemValue} itemValue={this.state.item} addTask={this.addTask} />
        <TaskView tasks={this.state.tasks} />
      </div>
    )
  }
}
export default TaskContainer;