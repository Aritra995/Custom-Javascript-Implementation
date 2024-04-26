"use strict"

let myArr = [1,2,3,4];

delete myArr[1];
// myArr.forEach(element => {
//     console.log(element);
// });


Array.prototype.customForEach = 
    function customForEach(callback,thisArg){
        for( let index = 0; index < this.length;index++ ){
            if ( this.hasOwnProperty(index) ){
                callback.call(thisArg,this[index],index,this);
            }
        }
    }

myArr.customForEach( (val) => {
    console.log(val);
} )
