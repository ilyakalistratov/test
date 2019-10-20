import {types} from 'mobx-state-tree';
import {store as todo, Store as TodoStore} from './components/Todo/store';
import {store as news, Store as NewsStore} from './components/News/store';

export const Store  = types.model({
    todo: TodoStore,
    news: NewsStore,
})

export const store = Store.create({
    todo,
    news
})
