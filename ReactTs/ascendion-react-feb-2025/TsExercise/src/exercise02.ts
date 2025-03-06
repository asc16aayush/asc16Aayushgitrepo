let arr:number[]=[1,2,3,4,5];
// console.log(arr.map(myFunc));
let a1=arr.map(myFunc);
console.log(a1);


function myFunc(a:number){
    return a*2;
}

export{}