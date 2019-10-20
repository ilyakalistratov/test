import React from 'react';
import { uniqueId } from 'lodash';
import { observer } from 'mobx-react';

class Form extends React.Component {
  onAddtask = e => {
    e.preventDefault();
    this.props.store.add({
      name: this.nameInput.value,
      id: uniqueId(),
      active: 'active'
    });
    e.target.reset();
    this.nameInput.focus();
  }

  render() {
    return (
      <form
        onSubmit={this.onAddtask}>
        <label htmlFor="name">
          <input
            required
            className="input"
            type="text"
            ref={input => (this.nameInput = input)}
            id="name"
          />
        </label>
        <button
          className="btn btn-info mb-2"
          type="submit">
          Add
          </button>
      </form>
    );
  }
}
export default observer(Form)