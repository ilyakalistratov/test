import { types } from 'mobx-state-tree';

const Todo = types.model('Todo', {
  name: types.string,
  id: types.string,
  active: false,
}).actions(self => ({
  markDone() {
    self.active = true;
  }
}))

export default Todo;