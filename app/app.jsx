import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

$(document).foundation();
require('style!css!sass!./styles/app.scss');

let App = React.createClass({
  render: function () {
    return (
      <p>Boilerplate Project</p>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
