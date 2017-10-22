'use strict';

console.log('App.js is running!');

// JSX -Javascript xml expression
var app = {
    title: 'Indecision App',
    subtitle: 'This is some info',
    options: []
};

var onSubmitForm = function onSubmitForm(e) {
    debugger;
    e.preventDefault();
    //const option = document.getElementsByName('option')[0].value;
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    render();
};

var onMakeDecision = function onMakeDecision() {
    var random = Math.floor(Math.random() * app.options.length);
    var option = app.options[random];
    alert(option);
    console.log(random);
};

var render = function render() {
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
            app.options.map(function (option, idx) {
                return React.createElement(
                    'li',
                    { key: idx },
                    option
                );
            })
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'What should i do?'
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'form',
            { onSubmit: onSubmitForm },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Addd option'
            )
        )
    );

    var appRoot = document.getElementById('app');

    ReactDOM.render(template, appRoot);
};
var appRoot = document.getElementById('app');
render();

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
        'p',
        null,
        app.options.length
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
    ),
    React.createElement(
        'form',
        { onSubmit: onSubmitForm },
        React.createElement('input', { type: 'text', name: 'option' }),
        React.createElement(
            'button',
            null,
            'Add option'
        )
    )
);

//ReactDOM.render(template, appRoot);
