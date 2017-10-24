console.log('util');

const square = (num) => num * num;
export const add = (num1, num2) => num1 + num2;

const substract = (num1, num2) => num1 - num2;
//export default substract;
//export default (num1, num2) => num1 - num2;


export { square, substract as default };