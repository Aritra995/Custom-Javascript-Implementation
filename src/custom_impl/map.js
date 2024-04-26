"use strict"

let myArr = [1,2,3,4];

// const mapOne = myArr.map( (item) => item*2 );

// console.log(mapOne);


Array.prototype.customMap = function(callback,thisArg){
    var newArray = [];
    for( let index = 0;index < this.length;index++ ){
        newArray.push(callback.call(thisArg,this[index],index,this));
    }
    return newArray;
}

const mapOfProduct = myArr.customMap( (item) => item*2 );

console.log(mapOfProduct);