'use strict';

console.log('App.js is running!');

// JSX -Javascript xml expression
var template = React.createElement(
  'h1',
  { id: 'someid' },
  'Something new!!'
); // Strange assignament

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
