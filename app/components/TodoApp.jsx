import React from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

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
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  }

  handleToggle (id) {
    let updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
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
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch} />
              <TodoList todos={filterTodos} onToggle={this.handleToggle} />
              <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default TodoApp;
