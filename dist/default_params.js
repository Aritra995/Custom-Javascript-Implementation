"use strict";
/* 
function greet($greeting = 'Hello'){
    console.log($greeting);
}

greet();

 */

// Spread operator

var args1 = [1, 2, 3];
var args2 = [4, 5, 6];

function test() {
    console.log(args1 + ", " + args2);
}

// ES5
// test.apply(null,args);

// ES6
test.apply(undefined, args1.concat(args2));