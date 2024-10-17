console.log("Hello");
console.log("Aayush");
console.log("Raj");
let no = 10;
console.log(no);
function add(a, b) {
    return a + b;
}
const result = add(5, 7);
console.log("sum of number is : " + result);
for (var i = 0; i < 5; i++) {
    console.log(i);
}
// object creation
const objUser = {
    name: "Aayush Raj",
    pass: "12345",
    age: 22,
    email: "aayush@1"
};
console.log(objUser);
// classes and inheritence
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name} makes a sound`);
    }
}
class Dog extends Animal {
    makeSound() {
        console.log(`${this.name} barks`);
    }
}
const animal = new Animal("cat");
animal.makeSound();
const dog = new Dog("jabra");
dog.makeSound();
// generics
function Identity(args) {
    return args;
}
const num = Identity(42);
const myName = Identity("Aayush Raj");
console.log(num);
console.log(myName);
// Enums
// Enums allow you to define a set of named constant.
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
const move = Direction.Right;
console.log(move);
// print the value of enum
console.log(Direction[move]);
console.log(Direction[1]);
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 30] = "Left";
    Direction1[Direction1["Right"] = 31] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
console.log(Direction1.Down);
console.log(Direction1.Left);
console.log(Direction1.Right);
// costructor and inheritence in details
class Phone {
    constructor(feature) {
        this.phoneFeature = feature;
    }
    displayDetails() {
        console.log("phone feature is called and initialized");
        console.log("phone feature are :" + this.phoneFeature);
    }
}
class SmartPhone extends Phone {
    constructor(feature) {
        super(feature);
        console.log("smartphone constructor called");
    }
    displayDetails() {
        console.log("smartphone feature is " + this.phoneFeature);
    }
}
// object creation and calling a function
const phone1 = new SmartPhone("superb camera phone");
phone1.displayDetails();
