debugger;
const onShowDetails = () => {
    isVisible = !isVisible;
    render();
}

let isVisible = false;

const appRoot = document.getElementById('app');

const render = () => {
    
    const template = (
        <div>
            <h1>Visibility toggle</h1>
            <button onClick={onShowDetails}>{isVisible ? 'Hide details' : 'Show Details'}</button>
            {isVisible && <p>Hey, this are some details you can see</p>}
        </div>
    );
    
    ReactDOM.render(template, appRoot);
}

render();




