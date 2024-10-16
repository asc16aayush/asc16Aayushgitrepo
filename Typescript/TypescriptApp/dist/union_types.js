function printID(id) {
    console.log(id);
}
printID(101);
printID("101");
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            // ** is the exponentiation operator in TypeScript, which raises the base to the power of the exponent.
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
    }
}
const myCircle = {
    kind: "circle",
    radius: 5
};
const mySquare = {
    kind: "square",
    sideLength: 4
};
console.log(getArea(myCircle));
console.log(getArea(mySquare));
