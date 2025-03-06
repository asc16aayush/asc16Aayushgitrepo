// const arr: number[] = [2, 5, 4, 8, 6];
// let result = sum(arr);
// console.log(result);

// function sum(arr: number[]): number {
//   let a: number = 0;
//   for (let i = 0; i < arr.length; i++) {
//     a = arr[i] + a;
//   }
//   return a;
// }


// function sum(arr: number[]): number {
//     return arr.reduce((sum, num) => sum + num, 0);
//   }
  


// -----------------
const arr: number[] = [2, 5, 4, 8, 6];
console.log(arr.reduce((sum, num) => sum + num, 0));

export{}