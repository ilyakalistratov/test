import React from 'react';
import s from './Task.module.css';

const TaskView = (props) => {

  return (

    <div className='tasks_list'>
      <ul>
        {props.tasks.map(item => {
          return (
            <>
              <div>
                <form className={s.tasks_list_form}>
                  <button className={s.tasks_list_button}>-</button>
                </form>
                <li className={s.tasks_list_item}>{item}</li>
                <hr />
              </div>
            </>
          )
        })}
      </ul>
    </div>


  )
}
export default TaskView;