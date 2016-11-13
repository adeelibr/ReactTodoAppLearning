import React from 'react';

let Todo = React.createClass({

  render() {
    let {id, text} = this.props;
    return (
        <div><span>{id}</span> {text}</div>
    );
  }

});

export default Todo;
