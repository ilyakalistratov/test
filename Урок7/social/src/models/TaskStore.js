import { types } from 'mobx-state-tree';
import Todo from './Todo';

const TaskStore = types.model('Todo', {
  Todo: types.array(Todo)
}).actions(self => ({
  add(task) {
    self.Todo.push(task);
  },
  remove(id) {
    const filtered = self.Todo.filter(task => task.id !== id)
    self.Todo = filtered
  }
}));

export default TaskStore;