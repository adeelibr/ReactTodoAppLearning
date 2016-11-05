import React from 'react';

let AddTodo = React.createClass({

  onFormSubmit (e) {
    e.preventDefault();
    let newTodo = this.refs.newTodo.value;
    if (newTodo.length > 0) {
      this.refs.newTodo.value = '';
      this.props.handleAddTodo(newTodo);
    }
  },

  render () {
    return (
        <div>
          <form onSubmit={this.onFormSubmit}>
            <input type="text" ref="newTodo" placeholder="Add A New Todo"/>
            <button type="submit" className="expanded hollow button">Add New Todo</button>
          </form>
        </div>
    );
  }

});

export default AddTodo;
