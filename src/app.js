console.log('App.js is running!');

// JSX -Javascript xml expression
var template =
    <div>
        <h1 id="someid">Something new!!</h1>
        <p>Hello</p>
    </div>
;

var template2 = (
    <div>
        <h1>Luca Oliva</h1>
        <p>Age: 32</p>
        <p>Location: Malta</p>
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(template2, appRoot);