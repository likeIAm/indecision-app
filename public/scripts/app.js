'use strict';

console.log('App.js is running!');

// JSX -Javascript xml expression
var app = {
    title: 'Indecision App',
    subtitle: 'This is some info'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
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
ReactDOM.render(template, appRoot);
