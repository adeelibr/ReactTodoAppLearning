import React from 'react';

import TodoSearch from 'TodoSearch';
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
    alert('new todo ' + text);
  }

  render () {
    let {todos} = this.state;
    return (
      <div>
        <p>{this.state.showCompleted + ' :'} {this.state.searchText}</p>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }

}

export default TodoApp;
