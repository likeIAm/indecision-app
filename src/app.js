import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldClass {
    constructor() {
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log(`Number: ${this.state.count}`);
    }
}

const oldClass = new OldClass();
console.log(oldClass);
console.log(oldClass.handleClick());
const unBindedHandleClick = oldClass.handleClick;
console.log(unBindedHandleClick());

class NewClass {
    state = { 
        count: 0
    }
    handleClick = () => {
        console.log(`Number: ${this.state.count}`);
    }
}

const newClass = new NewClass();
console.log(newClass);
console.log(newClass.handleClick());
const unBindedHandleClick2 = newClass.handleClick;
console.log(unBindedHandleClick2());
  
