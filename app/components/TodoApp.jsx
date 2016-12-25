import React from 'react';
import uuid from 'node-uuid';

import TodoSearch from 'TodoSearch';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

import TodoAPI from 'TodoAPI';

class TodoApp extends React.Component{

  constructor (props) {
    super(props);
    this.state = {
      todos: TodoAPI.getTodos(),
      showCompleted: false,
      searchText: '',
    }

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidUpdate () {
    TodoAPI.setTodos(this.state.todos);
  }

  handleSearch (showCompleted, searchText) {
    // console.log(showCompleted);
    // console.log(searchText);
    this.setState({
      showCompleted,
      searchText: searchText.toLowerCase()
    });
  }

  handleAddTodo (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: uuid(), text: text, completed: false }
      ]
    });
  }

  handleToggle (id) {
    let updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    // console.log(updatedTodos);
    this.setState({ todos: updatedTodos });
  }

  render () {
    let {todos, showCompleted, searchText} = this.state;
    let filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={filterTodos} onToggle={this.handleToggle} />
        <AddTodo onAddTodo={this.handleAddTodo} />
        <p>{this.state.showCompleted + ' :'} {this.state.searchText}</p>
      </div>
    );
  }

}

export default TodoApp;
