'use strict';

console.log('App.js is running!');

// JSX -Javascript xml expression
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        { id: 'someid' },
        'Something new!!'
    ),
    React.createElement(
        'p',
        null,
        'Hello'
    )
);

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Luca Oliva'
    ),
    React.createElement(
        'p',
        null,
        'Age: 32'
    ),
    React.createElement(
        'p',
        null,
        'Location: Malta'
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template2, appRoot);
