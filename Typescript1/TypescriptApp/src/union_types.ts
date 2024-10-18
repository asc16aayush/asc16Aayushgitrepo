function printID(id:string|number){
    console.log(id);
}

printID(101);
printID("101");

interface Circle{
    kind:"circle";

    radius:number;
}
interface Triangle{
    kind:"triangle";
    base:number;
    height:number;

}

interface Square{
    kind:"square";
    sideLength:number;
}

function getArea(shape: Circle | Square|Triangle): number {
    switch (shape.kind) {
        case "circle":
            // ** is the exponentiation operator in TypeScript, which raises the base to the power of the exponent.
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        case "triangle":
            return 0.5*shape.base*shape.height;

    }
}



const myCircle:Circle={
    kind:"circle",
    radius:5
};

const mySquare:Square={
    kind:"square",
    sideLength:4
};


const myTriangle:Triangle={
    base:5,
    height:10,
    kind:"triangle"

};

console.log(getArea(myCircle));
console.log(getArea(mySquare));
console.log(getArea(myTriangle));