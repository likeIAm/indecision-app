class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreetting() {
    return `Hi, I'm ${this.name}`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

const me = new Person('Luca Oliva');
console.log(me.getDescription());

const other = new Person();
console.log(other.getGreetting());