import React, { Component } from 'react';
import Form from './Form';
import { observer, inject } from 'mobx-react';
import TodoList from "./TodoList";

class TodoContainer extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <div>
        <h3 className="subtitle">Make a new To do</h3>
        <Form store={store} />
        <div className="card-container">
          {store.Todo.map((todo, i) => (
            <TodoList todo={todo} key={i} store={store} />))}
        </div>
      </div>
    )
  }
}
export default inject('store')(observer(TodoContainer));