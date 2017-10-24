import React from 'React';

const Option = (props) => {
    return (
      <div>
        {props.optionText}
        <button 
            onClick={() => { // if i write only {props.handleDeleteOption} I'll pass the event like parameter
                props.handleDeleteOption(props.optionText)
            }}
        >
            Remove
        </button>
      </div>
    );
}

export default Option;