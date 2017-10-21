console.log('App.js is running!');

// JSX -Javascript xml expression
const app = {
    title: 'Indecision App',
    subtitle: 'This is some info',
    options: []
};

const onSubmitForm = (e) => {
    debugger;
    e.preventDefault();
    //const option = document.getElementsByName('option')[0].value;
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const onRemoveAll = () => {
    app.options = [];
    render();
};

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            {/*app.options.length > 0 &&
                <ol>
                    {app.options.forEach((option) => {
                        return <li>{option}</li>
                    })}
                </ol>
                */}
            <p>{app.options.length}</p>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
            <button onClick={onRemoveAll}>Remove All</button>
            <form onSubmit={onSubmitForm}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>
    );

    
    const appRoot = document.getElementById('app');

    ReactDOM.render(template, appRoot);
};
const appRoot = document.getElementById('app');
render();

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        {/*app.options.length > 0 &&
            <ol>
                {app.options.forEach((option) => {
                    return <li>{option}</li>
                })}
            </ol>
            */}
        <p>{app.options.length}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
        <form onSubmit={submitForm}>
            <input type="text" name="option" />
            <button>Add option</button>
        </form>
    </div>
);

//ReactDOM.render(template, appRoot);