console.log('App.js is running!');

// JSX -Javascript xml expression
//var template = <h1 id="someid">Something new!!</h1>; // Strange assignament
var template = React.createElement(
    "h1",
    { id: "someid" },
    "Something new!!"
  );
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);