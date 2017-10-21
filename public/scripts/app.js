'use strict';

console.log('App.js is running!');

// JSX -Javascript xml expression
var app = {
    title: 'Indecision App',
    subtitle: 'This is some info',
    options: ['one', 'two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
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

var user = {
    name: 'Luca Oliva',
    age: 32,
    location: 'Malta'
};

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var getFirstName = function getFirstName(x) {
    return x.split(' ')[0];
};
console.log(getFirstName('Luca Oliva'));

var multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 8,
    multiply: function multiply() {
        var that = this;
        return this.numbers.map(function (number) {
            return number * that.multiplyBy;
        });
    },
    multiplyArrow: function multiplyArrow() {
        var _this = this;

        // this is the new method istance syntax
        return this.numbers.map(function (number) {
            return number * _this.multiplyBy;
        });
    }
};

console.log(multiplier.multiplyArrow());

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
