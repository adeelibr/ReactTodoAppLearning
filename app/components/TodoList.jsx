import React from 'react';
import Todo from 'Todo';

let TodoList = React.createClass({

  render() {
    let {todos} = this.props;

    let renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      } else {
        return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle} />
        )
      });
      }
    };

    return (
        <div>
          {renderTodos()}
        </div>
    );
  }

});

export default TodoList;
