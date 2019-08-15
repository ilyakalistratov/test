import React from 'react';
import s from './Task.module.css';

const ViewTask = (props) => {
  let removeTask = props.removeTask;
  return (

    <div className='tasks_list'>
      <ul>
        {props.tasks.map(item => {
          return (
            <>
              <div key={item.id}>
                <form className={s.tasks_list_form}>
                  <button className={s.tasks_list_button} onClick={removeTask(item.id)}>-</button>
                </form>
                <li className={s.tasks_list_item}>{item.text}</li>
                <hr />
              </div>
            </>
          )
        })}
      </ul>
    </div>


  )
}
export default ViewTask;