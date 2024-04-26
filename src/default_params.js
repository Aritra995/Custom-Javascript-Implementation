"use strict"
/* 
function greet($greeting = 'Hello'){
    console.log($greeting);
}

greet();

 */

// Spread operator

let args1 = [1,2,3];
let args2 = [4,5,6];


function test(){
    console.log(`${args1}, ${args2}`);
}

// ES5
// test.apply(null,args);

// ES6
test(...args1,...args2);