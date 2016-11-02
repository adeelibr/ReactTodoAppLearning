import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import TodoList from 'TodoList';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });
});
