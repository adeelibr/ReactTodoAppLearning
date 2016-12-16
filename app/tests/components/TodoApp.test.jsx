import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import TodoApp from 'TodoApp';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the Todos state on handleAddTodo', () => {
    let todoText = 'Check Something'
    let todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({ todos: [] });
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
  });

  it('should toggle completed value when handleToggle called', () => {
    let todoData = { id: 11, text: 'something', completed: false }
    let todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({ todos: [todoData] });

    // check that todos first item has completed value of false
    expect(todoApp.state.todos[0].completed).toBe(false);

    todoApp.handleToggle(11);

    // check that todos first item has changed completed value to true
    expect(todoApp.state.todos[0].completed).toBe(true);

  });

});
