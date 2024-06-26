"use strict";

var myArr = [1, 2, 3, 4];

delete myArr[1];
// myArr.forEach(element => {
//     console.log(element);
// });


Array.prototype.customForEach = function customForEach(callback) {
    for (var index = 0; index < this.length; index++) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this);
        }
    }
};

myArr.customForEach(function (val) {
    console.log(val);
});