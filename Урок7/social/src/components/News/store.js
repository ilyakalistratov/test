import {types} from 'mobx-state-tree';

const hit = types.model({
    created_at: types.maybeNull(types.string),
    author: types.maybeNull(types.string),

    story_title:types.maybeNull(types.string),
    story_url:types.maybeNull(types.string),
})
export const Store = types.model({
    serachQuery: types.string,
    result: types.array(hit),
    list: types.array(hit)
}).actions(self => ({
    onhandleInput(text) {
        self.serachQuery = text;
    },
    setResult(data) {
        const newdata = data.map(item => {
            return {
                created_at: item.created_at,
                author: item.author,
                story_title: item.story_title,
                story_url: item.story_url
            };
    });

        self.result = newdata
        const lists = newdata.slice(0, 3);

        self.list = lists;
    },
    onLoadMore(e) {
        const newList = self.result.slice(self.list.length, self.list.length + 3);
        console.log(newList)
        self.list= [...newList]

    },
})
)

export const store = Store.create({
    serachQuery: '',
    result: [],
    list: [],
})