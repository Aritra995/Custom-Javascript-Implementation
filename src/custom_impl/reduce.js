"use strict"

let myArray = [1,2,3,4];

// var initialValue = 0;

// const sumOfArray = myArray.reduce( (accumulator,currentValue) => accumulator+currentValue  );

// console.log(sumOfArray);


Array.prototype.customReduce = function(callback,initialValue){
    let finalValue;
    if ( initialValue !== null || initialValue !== undefined ){
        finalValue = initialValue;
    } else{
        finalValue = this[0];
    }
    for( let index = 0;index < this.length;index++ ){
        finalValue += callback(finalValue,this[index],index,this);
    }
    return finalValue;
}


var initialValue = 0;

const sumOfArray = 
myArray.reduce( (accumulator,currentValue) => accumulator+currentValue  );

console.log(sumOfArray);