console.log('Person');

const isAdult = (age) => age > 17;
const canDrink = (age) => age > 15;
const isSenior = (age) => age > 65;

export { isAdult, canDrink, isSenior as default };