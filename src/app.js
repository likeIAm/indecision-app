import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

const Layout = (props) => {
    return (
        <div>
            <p>Header</p>
            {props.content}
            {props.children}
            <p>Footer</p>
        </div>
    );
}

const jsx = <p>First method to pass jsx to a children</p>;

ReactDOM.render(
    <Layout content={jsx}>
        <p>Second method to pass jsx to a children</p>
    </Layout>
    , document.getElementById('app'));