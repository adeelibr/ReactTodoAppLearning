import React from 'react';

class AddTodo extends React.Component {

  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    let newTodo = this.refs.newTodo.value;
    if (newTodo.length > 0) {
      this.refs.newTodo.value = '';
      this.props.onAddTodo(newTodo);
    } else {
      this.refs.newTodo.focus();
      // Alert('Todo Input Can Not Be Empty');
    }
  }

  render () {
    return (
        <div className="container__footer">
          <form onSubmit={this.handleSubmit}>
            <input type="text" ref="newTodo" placeholder="Add A New Todo"/>
            <button type="submit" className="expanded hollow button">Add New Todo</button>
          </form>
        </div>
    );
  }

}

export default AddTodo;
