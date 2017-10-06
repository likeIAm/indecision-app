console.log('App.js is running!');

// JSX -Javascript xml expression
var template = <h1 id="someid">Something new!!</h1>; // Strange assignament

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);