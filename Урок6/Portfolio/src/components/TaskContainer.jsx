import React from 'react';
import TaskAdd from './TaskAdd';
import TaskView from './TaskView';

class TaskContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: ['Сходить в магазин', 'Прочитать про философию React', 'Решить задачи на Codewars'], item: ''}
    }

    render() {
        return (
            <div>
                <TaskAdd />
                <TaskView items={this.state.items} />
            </div>
        )
    }
}
 export default TaskContainer;