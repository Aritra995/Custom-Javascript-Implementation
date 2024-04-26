"use strict";

var myArr = [1, 2, 3, 4];

// const mapOne = myArr.map( (item) => item*2 );

// console.log(mapOne);


Array.prototype.customMap = function (callback) {
    var newArray = [];
    for (var index = 0; index < this.length; index++) {
        newArray.push(callback(this[index], index, this));
    }
    return newArray;
};

var mapOfProduct = myArr.customMap(function (item) {
    return item * 2;
});

console.log(mapOfProduct);