

2.test.ts


let name: string = 'Tom'
let age: number = 20;
console.log(name, age);



//=====================================================


3.test.js



let name = 'Tom'
let age = 20;
console.log(name, age);

//Error
// let name:string = 'Tom'
// let age:number =  20;
// console.log(name,age);

let age = 20;   //first number
age = 'naveen'; //then string
age = true; //then boolean
console.log(typeof age);
//this is not allowed in typescript
//but when you run the code it will run Why?
//because ts conversted into js