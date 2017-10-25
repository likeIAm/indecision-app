import React from 'React';

const Option = (props) => {
    return (
      <div className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>
        <button className="button button--link"
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