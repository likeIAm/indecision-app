class IndecisionApp extends React.Component {
    render () {
        const title = 'Indecision App';
        const subTitle = 'Put your life in the hands of a computer';
        const options = ['1 kjk,', '2 gfdds', '3 kjuk'];

        return (
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    pickOption() {
        alert('Picked Option');
    }

    render() {
        return (
            <div>
                <button onClick={this.pickOption}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    // So the best is to bind the mehtod here in the constructor
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
        console.log(this.props.options); // If i do like this without rebinding the method to a proper this, this is undefined when called by the event handler dispacther
        alert('Remove All');
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll/*.bind(this) - but it's very expensive cause for every render I've to rebind*/}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render () {
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        debugger;
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if (option) {
            alert(option);
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));