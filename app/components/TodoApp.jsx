import React from 'react';
import TodoList from 'TodoList';

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

  render() {
    let {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    );
  }

});

export default TodoApp;
