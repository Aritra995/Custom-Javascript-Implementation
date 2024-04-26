"use strict";

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// const colorsGreaterThanFive = colors.filter( (color) => color.length > 5 );

// console.log(colorsGreaterThanFive);


Array.prototype.customFilter = function (callback) {
    var shallowCopyArray = [];
    for (var index = 0; index < this.length; index++) {
        if (callback(this[index], index, this)) {
            shallowCopyArray.push(this[index]);
        }
    }
    return shallowCopyArray;
};

var colorsGreaterThanFive = colors.customFilter(function (color) {
    return color.length > 5;
});

console.log(colorsGreaterThanFive);