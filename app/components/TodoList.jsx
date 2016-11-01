import React from 'react';
import Todo from 'Todo';

let TodoList = React.createClass({

  render() {
    let {todos} = this.props;

    let renderTodos = () => {
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo} />
        )
      });
    };

    return (
        <div>{renderTodos()}</div>
    );
  }

});

export default TodoList;
