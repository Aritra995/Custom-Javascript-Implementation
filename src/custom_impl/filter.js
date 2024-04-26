"use strict"

let colors = ['red','orange','yellow','green','blue','indigo','violet']

// const colorsGreaterThanFive = colors.filter( (color) => color.length > 5 );

// console.log(colorsGreaterThanFive);


Array.prototype.customFilter = function(callback){
    var shallowCopyArray = [];
    for( let index = 0;index < this.length;index++ ){
        if( callback(this[index],index,this) ){
            shallowCopyArray.push( this[index] );
        }
    }
    return shallowCopyArray;
}

const colorsGreaterThanFive = colors.customFilter( (color) => color.length > 5 );

console.log(colorsGreaterThanFive);