import React from 'react';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

class TodoApp extends React.Component{

  constructor (props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, text: 'Walk the dog' },
        { id: 2, text: 'Do some exercise' },
        { id: 3, text: 'Loose ugly belly' },
        { id: 4, text: 'Ask batman to train you in combat' },
      ]
    }

    this.onAddTodo = this.onAddTodo.bind(this);
  }

  // getInitialState() {
  //   return {
  //     todos: [
  //       { id: 1, text: 'Walk the dog' },
  //       { id: 2, text: 'Do some exercise' },
  //       { id: 3, text: 'Loose ugly belly' },
  //       { id: 4, text: 'Ask batman to train you in combat' },
  //     ]
  //   };
  // },

  onAddTodo(text) {
    alert('new todo ' + text);
  }

  render() {
    let {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.onAddTodo} />
      </div>
    );
  }

}

export default TodoApp;
