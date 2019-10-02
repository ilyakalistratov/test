import React from 'react';
import { observer } from 'mobx-react';

const TodoList = (props) => {

  const onRemove = id => e => {
    e.preventDefault();
    props.store.remove(id)
  }
  const onFinished = id => e => {
    e.preventDefault();
    props.store.finish(id)
  }
  return (
    <div className="card" >
      <div className="card-body">
        <button className='btn__todo' onClick={onRemove(props.todo.id)}>-</button>
        {(props.todo.active === 'active') ? <span className="card-title" onClick={onFinished(props.todo.id)}> {props.todo.name}</span> :
          <s><span className="card-title" onClick={onFinished(props.todo.id)}> {props.todo.name}</span></s>}
      </div>
    </div>
  )
}
export default observer(TodoList);