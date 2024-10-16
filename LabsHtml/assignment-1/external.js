console.log("external js");
function externalscript(){
    console.log("the external script / modified");
}
externalscript();

function loop_demo(){
for(var i=0;i<5;i++){
    console.log(i);
    console.log("value of i is = "+i);
}
}
loop_demo();

console.log("-------------------");

let numbers = [5, 10, 15, 20, 25];

// 1. push()
numbers.push(30);
console.log("After push(30):", numbers); // [5, 10, 15, 20, 25, 30]

// 2. pop()
let lastElement = numbers.pop();
console.log("After pop():", numbers, "| Last Element:", lastElement); // [5, 10, 15, 20, 25]

// 3. shift()
let firstElement = numbers.shift();
console.log("After shift():", numbers, "| First Element:", firstElement); // [10, 15, 20, 25]

// 4. unshift()
numbers.unshift(5);
console.log("After unshift(5):", numbers); // [5, 10, 15, 20, 25]

// 5. slice()
let slicedArray = numbers.slice(1, 4);
console.log("After slice(1, 4):", slicedArray); // [10, 15, 20]

// 6. splice()
numbers.splice(2, 1, 12, 18);
console.log("After splice(2, 1, 12, 18):", numbers); // [5, 10, 12, 18, 25]

// 7. concat()
let additionalNumbers = [30, 35];
let concatenatedArray = numbers.concat(additionalNumbers);
console.log("After concat([30, 35]):", concatenatedArray); // [5, 10, 12, 18, 25, 30, 35]

// 8. join()
let joinedString = numbers.join(', ');
console.log("After join(', '):", joinedString); // "5, 10, 12, 18, 25"

// 9. indexOf()
let indexOfTwelve = numbers.indexOf(12);
console.log("Index of 12:", indexOfTwelve); // 2

// 10. lastIndexOf()
numbers.push(10); // [5, 10, 12, 18, 25, 10]
let lastIndexOfTen = numbers.lastIndexOf(10);
console.log("Last Index of 10:", lastIndexOfTen); // 5

// 11. includes()
let hasTwenty = numbers.includes(20);
console.log("Includes 20:", hasTwenty); // false

// 12. reverse()
numbers.reverse();
console.log("After reverse():", numbers); // [10, 25, 18, 12, 10, 5]

// 13. sort()
numbers.sort((a, b) => a - b);
console.log("After sort():", numbers); // [5, 10, 10, 12, 18, 25]

// 14. filter()
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers); // [10, 10, 12, 18]

// 15. map()
let doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubledNumbers); // [10, 20, 20, 24, 36, 50]

// 16. reduce()
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of Numbers:", sum); // 80

// 17. forEach()
console.log("ForEach Output:");
numbers.forEach(num => console.log(num)); // Outputs each number

// 18. find()
let firstEven = numbers.find(num => num % 2 === 0);
console.log("First Even Number:", firstEven); // 10

// 19. findIndex()
let firstIndexOfTen = numbers.findIndex(num => num === 10);
console.log("First Index of 10:", firstIndexOfTen); // 1

// 20. some()
let hasGreaterThanTwenty = numbers.some(num => num > 20);
console.log("Has Greater Than 20:", hasGreaterThanTwenty); // true

// 21. every()
let allGreaterThanZero = numbers.every(num => num > 0);
console.log("All Greater Than Zero:", allGreaterThanZero); // true

// 22. fill()
numbers.fill(0, 2, 4);
console.log("After fill(0, 2, 4):", numbers); // [5, 10, 0, 0, 18, 25]
