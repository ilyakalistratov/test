import { types } from 'mobx-state-tree';

export const NewsStore = types.model('News', {
    serachQuery: '',
    result: null,
    list: types.array
})