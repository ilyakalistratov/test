import TaskStore from "./TodoStore/TaskStore";
import { onPatch } from 'mobx-state-tree';
import makeInspectable from 'mobx-devtools-mst';
import {NewsStore} from "./NewsStore/NewsStore";

export const TaskStore1 = TaskStore.create({})
export const NewsStore1 = NewsStore.create({})

makeInspectable(TaskStore1);
onPatch(TaskStore1, patch => {
    console.log(patch)
})
makeInspectable(NewsStore1);
onPatch(NewsStore1, patch => {
    console.log(patch)
})