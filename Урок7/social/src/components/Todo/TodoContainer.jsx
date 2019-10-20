import React, { Component } from 'react';
import { observer } from 'mobx-react';
import TodoList from './TodoList';
import Form from './Form';

class TodoContainer extends Component {
    render() {
        const { store } = this.props;
        return (
            <div className="App">
                <div>
                    <h3 className="subtitle">Make a new To do</h3>
                    <Form store={store} />
                </div>
                {
                    store.Todos && (
                        <div className="card-container">
                            {store.Todos.map((todo, i) => (
                                <TodoList todo={todo} key={i} store={store} />))}
                        </div>
                    )
                }

            </div>
        );
    }
}
export default (observer(TodoContainer));