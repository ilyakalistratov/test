import React from 'react';

class TaskAdd extends React.Component {

	render() {
		return (
			<div>
				<input type="text" value={this.props.itemValue} placeholder='new task...' onChange={this.props.addItemValue} />
				<button onClick={this.props.addTask}>Add</button>
			</div>
		)
	}
}
export default TaskAdd;