
type array=(number | string | boolean)[];
type str=number | string | boolean;

let arr:array=[1,'hello',3,true];
let a1=contains(arr,3);
console.log(a1);

function contains(arr: array, value:str ): boolean {
  return arr.includes(value);
}

export{}