// function doubleIt(num){
//     return num * 2;
// }

const doubleIt = num => num *2;
const add = (x,y) => x+y;
const doMath = (x,y) =>{
    const sum = x + y ;
    const diff = x - y ;
    const result = sum * diff ;
    return result;
}
const mathResult = doMath(7,5);
const addResult = add(25,20);
const result = doubleIt(5);
console.log(result);
console.log(addResult);
console.log(mathResult);