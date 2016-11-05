import React from 'react';

let AddTodo = React.createClass({

  render() {
    return (
        <div>
          Add Todo
          <form onPress="">
            <input type='text' name='newTodo' />
            <button type='submit'>Add New Todo</button>
          </form>
        </div>
    );
  }

});

export default AddTodo;
