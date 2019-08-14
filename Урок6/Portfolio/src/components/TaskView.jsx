import React from 'react';

const TaskView = (props) => {
	return (
		<div>
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