import React from 'react';
import { observer } from 'mobx-react';

const TodoList = (props) => {
  const onRemove = id => e => {
    e.preventDefault();
    props.store.remove(id)
  }
  return (
    <div className="card" >
      <div className="card-body">
        <button className='btn__todo' onClick={onRemove(props.todo.id)}>-</button>
        <span className="card-title"> {props.todo.name}</span>
      </div>
    </div>
  )
}
export default observer(TodoList);