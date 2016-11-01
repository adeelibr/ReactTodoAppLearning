import React from 'react';

let TodoApp = React.createClass({

  getInitialState() {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Do some exercise'
        }
      ]
    };
  },

  render() {
    return (<div>TodoApp.jsx</div>);
  }

});

export default TodoApp;
