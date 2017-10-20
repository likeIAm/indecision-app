console.log('App.js is running!');

// JSX -Javascript xml expression
var app = {
    title: 'Indecision App',
    subtitle: 'This is some info',
    options: ['one', 'two']
};

var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);


var user = {
    name: 'Luca Oliva',
    age: 32,
    location: 'Malta'
};

var template2 = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);