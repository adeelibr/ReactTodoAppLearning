import React from 'react';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

let TodoApp = React.createClass({

  getInitialState() {
    return {
      todos: [
        { id: 1, text: 'Walk the dog' },
        { id: 2, text: 'Do some exercise' },
        { id: 3, text: 'Loose ugly belly' },
        { id: 4, text: 'Ask batman to train you in combat' },
      ]
    };
  },

  handleAddTodo(text) {
    alert('new todo ' + text);
  },

  render() {
    let {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo handleAddTodo={this.handleAddTodo} />
      </div>
    );
  }

});

export default TodoApp;
