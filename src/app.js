import './utils.js'; // like this i simply run that file
import substracttt, { square, add } from './utils.js'; // The default is not in parenthesis ans i can call like i want
import isSenior, { isAdult, canDrink } from './person.js';
console.log('app');

console.log(square(3));
console.log(add(3, 5));
console.log(isAdult(16));
console.log(substracttt(100, 20));
console.log('Is Senior: ' + isSenior(20)); 