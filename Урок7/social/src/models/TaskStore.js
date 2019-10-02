import { types } from 'mobx-state-tree';
import Todo from './Todo';
import { finished } from 'stream';

const TaskStore = types.model('Todo', {
  Todo: types.array(Todo)
}).actions(self => ({
  add(task) {
    self.Todo.push(task);
  },
  remove(id) {
    const filtered = self.Todo.filter(task => task.id !== id)
    self.Todo = filtered
  },
  finish(id) {
    const taskIndex = self.Todo.findIndex(task => task.id === id)
    const newState = (self.Todo[taskIndex].active == 'active') ? 'finished' : 'active';
    self.Todo[taskIndex].active = newState
  }
}));

export default TaskStore;