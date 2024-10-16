const map1=new Map([
    ['Aayush','physics'],
    ['jalaj','catoon'],
    ['mishra','nothing'],
    ['sagar','maths'],
    ['ram','archery']
]);
function display(map1){
    map1.forEach((name,subject)=> {
        console.log(`${subject}'s favorite subject is------${name}.`);
        
    });
}

display(map1);