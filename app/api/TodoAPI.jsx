import $ from 'jquery';

module.exports = {

  setTodos: function (todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },

  getTodos: function () {
    let stringTodos = localStorage.getItem('todos');
    let todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }

    if ($.isArray(todos)) {
      return todos;
    } else {
      return [];
    }
  },

  filterTodos: function (todos, showCompleted, searchText) {
    let filterTodos = todos;

    // filter by show completed
    filterTodos = filterTodos.filter((todo) => {
      return !todo.completed || showCompleted
    })

    // filter by searchText
    filterTodos = filterTodos.filter((todo) => {
      let todoText = todo.text.toLowerCase();
      return searchText.length === 0 || todoText.indexOf(searchText) > -1;
    })

    // sort todos with non completed first
    filterTodos.sort((a, b) => {
      if (!a.completed && b.completed) { return -1 }
      if (a.completed && !b.completed) { return 1 }
      if (!a.completed && !b.completed) { return 0 }
    })

    return filterTodos;
  },

}
