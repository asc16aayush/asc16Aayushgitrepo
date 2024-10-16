function printID(id:string|number){
    console.log(id);
}

printID(101);
printID("101");

interface Circle{
    kind:"circle";

    radius:number;
}

interface Square{
    kind:"square";
    sideLength:number;
}

function getArea(shape: Circle | Square): number {
    switch (shape.kind) {
        case "circle":
            // ** is the exponentiation operator in TypeScript, which raises the base to the power of the exponent.
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
    }
}