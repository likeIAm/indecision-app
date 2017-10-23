class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi, I'm ${this.name}`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` The major is ${this.major}`;
    }
    console.log(description);
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greetting = super.getGreeting();
    if (this.homeLocation) {
      greetting += `. I'm from ${this.homeLocation}`;
    }
    return greetting;
  }
}

const me = new Traveler('Luca Oliva', 32, 'Roveredo in Piano');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());