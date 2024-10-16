console.log("Hello");
console.log("Aayush");
console.log("Raj");
let no:number=10;
console.log(no);

function add(a:number,b:number):number{
    return a+b;
}

const result=add(5,7);
console.log("sum of number is : "+result);


for(var i=0;i<5;i++){
    console.log(i);
}

// interface creation

interface User{
    name:string;
    pass:string;
    age:number;
    email:string;
}

// object creation
const objUser:User={
    name:"Aayush Raj",
    pass:"12345",
    age:22,
    email:"aayush@1"
};

console.log(objUser);

// classes and inheritence

class Animal{
    constructor(public name:string){}
        makeSound():void{
            console.log(`${this.name} makes a sound`);
        }
    }
class Dog extends Animal{
    makeSound(): void {
        console.log(`${this.name} barks`);
    }

}

const animal=new Animal("cat");
animal.makeSound();

const dog=new Dog("jabra");
dog.makeSound();


// generics
function Identity<T>(args:T):T{
    return args;
}

const num=Identity<number>(42);
const myName=Identity<string>("Aayush Raj");

console.log(num);
console.log(myName);

// Enums
// Enums allow you to define a set of named constant.

enum Direction{
    Up,
    Down,
    Left,
    Right
}

const move=Direction.Right;
console.log(move);

// print the value of enum
console.log(Direction[move]);
console.log(Direction[1]);

enum Direction1{
    Up=1,
    Down,
    Left=30,
    Right
    
}

console.log(Direction1.Up);
console.log(Direction1.Down);
console.log(Direction1.Left);
console.log(Direction1.Right);



// costructor and inheritence in details

class Phone{
    phoneFeature : string;
    constructor(feature:string){
        this.phoneFeature=feature;
    }

    displayDetails():void{
        console.log("phone feature is called and initialized");
        console.log("phone feature are :"+this.phoneFeature);
    }
}

class SmartPhone extends Phone{
    constructor(feature:string){
        super(feature);
        console.log("smartphone constructor called");

    }
    displayDetails(): void {
        console.log("smartphone feature is "+ this.phoneFeature);
    }
}

// object creation and calling a function
const phone1=new SmartPhone("superb camera phone");
phone1.displayDetails();


