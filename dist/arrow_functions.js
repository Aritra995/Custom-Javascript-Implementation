"use strict";
/* 
function Prefixer(prefix){
    this.prefix = prefix;
}

// Prefixer.prototype.prefixArray = function(arr){
//     let self = this;
//     return arr.map(function(x){
//         console.log(self.prefix+x);
//     });
// }

// With arrow functions
Prefixer.prototype.prefixArray = function(arr){
    return arr.map((x) => {
        console.log(this.prefix+x);
    });
}

let pre = new Prefixer('Hello ');
pre.prefixArray(['Brad','Jeff']);
 */

// let add = function(a,b){
//     let sum = a+b;
//     console.log(sum);
//     return false;
// }

var add = function add(a, b) {
    var sum = a + b;
    console.log(sum);
    return false;
};

add(2, 2);