// Import external node modules
// install -> import -> use

import validator from 'validator'; // see that here I'm not using './util' but directly the name of the module, that has an export default

console.log(validator.isEmail('luca@gmail.com'));
