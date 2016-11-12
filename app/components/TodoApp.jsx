import React from 'react';

import TodoSearch from 'TodoSearch';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

let counter = 5;

class TodoApp extends React.Component{

  constructor (props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, text: 'Walk the dog' },
        { id: 2, text: 'Do some exercise' },
        { id: 3, text: 'Loose ugly belly' },
        { id: 4, text: 'Ask batman to train you in combat' },
      ],
      showCompleted: false,
      searchText: '',
    }

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch (showCompleted, searchText) {
    console.log(showCompleted);
    console.log(searchText);
    this.setState({
      showCompleted,
      searchText: searchText.toLowerCase()
    });
  }

  handleAddTodo (text) {
    // let {todos} = this.state;
    // let newTodos = todos;
    // newTodos.push({ id: counter++, text: text});
    // this.setState({ todos: newTodos });
    // alert('new todo ' + text);
    this.setState({
      todos: [
        ...this.state.todos,
        { id: counter++, text: text }
      ]
    });
  }

  render () {
    let {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
        <p>{this.state.showCompleted + ' :'} {this.state.searchText}</p>
      </div>
    );
  }

}

export default TodoApp;
