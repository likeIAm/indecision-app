console.log('App.js is running!');

// JSX -Javascript xml expression
var app = {
    title: 'Indecision App',
    subtitle: 'This is some info'
};

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var template2 = (
    <div>
        <h1>Luca Oliva</h1>
        <p>Age: 32</p>
        <p>Location: Malta</p>
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);