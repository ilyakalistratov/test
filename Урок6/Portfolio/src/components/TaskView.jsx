import React from 'react';

const TaskView = (props) => {

  return (
    <div className='tasks_list'>
      <ul>
        {props.tasks.map(item => {
          return (
            <li>{item}</li>
          )
        })}
      </ul>
    </div>
  )
}
export default TaskView;