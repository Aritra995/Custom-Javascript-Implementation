"use strict"

const array1 = [5, 12, 8, 130, 44];

// const found = array1.find((element) => element > 10);

// console.log(found);

Array.prototype.customFind = function(callback,thisArg){
    for( let index = 0;index < this.length;index++ ){
        if( callback.call(thisArg,this[index],index,this) ){
            return this[index];
        }
    }
    return undefined;
}

const found = array1.find((element) => element > 10);

console.log(found);