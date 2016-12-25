import expect from 'expect';

import TodoAPI from 'TodoAPI';

describe('TodoAPI', () => {

  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      let todos = [{ id: 112, text: 'something', completed: false }];
      TodoAPI.setTodos(todos);

      let actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      let badTodos = { a: 'b' };
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad localStorage data', () => {
      let actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should get valid todos array', () => {
      let todos = [{ id: 112, text: 'something', completed: false }];
      // TodoAPI.setTodos(todos);
      localStorage.setItem('todos', JSON.stringify(todos));
      let actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    });

  });

  describe('filterTodos', () => {
    let todos = [
      { id: 1, text: 'something', completed: true },
      { id: 2, text: 'other stuff', completed: false },
      { id: 4, text: 'some other something', completed: true },
    ];

    it('should return all items if showCompleted is true', () => {
      let filterTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filterTodos.length).toBe(3);
    });

    it('should return 1 items if showCompleted is false', () => {
      let filterTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filterTodos.length).toBe(1);
    });

    it('should sort by completed status', () => {
      let filterTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filterTodos[0].completed).toBe(false);
    });

    it('should filter todos by search text', () => {
      let filterTodos = TodoAPI.filterTodos(todos, true, 'some');
      expect(filterTodos.length).toBe(2);
    });

    it('should return all todos if search text is empty', () => {
      let filterTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filterTodos.length).toBe(3);
    });

  });


});
