console.log('App.js is running!');

// JSX -Javascript xml expression
const app = {
    title: 'Indecision App',
    subtitle: 'This is some info',
    options: ['one', 'two']
};

const template = (
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


const user = {
    name: 'Luca Oliva',
    age: 32,
    location: 'Malta'
};

const template2 = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

const getFirstName = (x) => x.split(' ')[0];
console.log(getFirstName('Luca Oliva'));

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 8,
    multiply: function() {
        var that = this;
        return this.numbers.map(function (number) {
                return number * that.multiplyBy
            });
    },
    multiplyArrow() { // this is the new method istance syntax
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiplyArrow());

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);