// Import external node modules
// install -> import -> use

import validator from 'validator'; // see that here I'm not using './util' but directly the name of the module, that has an export defaultyar

console.log(validator.isEmail('luca@gmail.com'));

import React from 'react';
import ReactDOM from 'react-dom';

const template = <p>THIS IS JSX FROM WEBPACK</p>;

ReactDOM.render(template, document.getElementById('app'));
