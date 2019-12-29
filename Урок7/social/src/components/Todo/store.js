import {types, getSnapshot} from 'mobx-state-tree';

export const Todo = types.model( 'Todo', {
    name: types.optional(types.string, ''),
    id: types.optional(types.string,''),
    active: types.optional(types.string, ''),
}).actions(self => ({
    markDone() {
        self.active = true;
    }
})
)

export const Store = types.model( 'Store', {
    Todos:types.array(Todo)
}).actions(self => ({
    add(task) {
        self.Todos.push(task);
    },
    remove(id) {
        const filtered = self.Todos.filter(task => task.id !== id)
        self.Todos = filtered
    },
    finish(id) {
        const taskIndex = self.Todos.findIndex(task => task.id === id)
        const newState = (self.Todos[taskIndex].active == 'active') ? 'finished' : 'active';
        self.Todos[taskIndex].active = newState
    }
}))
export const store = Store.create({
    Todos: [],
})

