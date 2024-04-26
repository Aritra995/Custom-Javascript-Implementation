"use strict";

var name = 'John';

function markUpperCase(word) {
    return word.toUpperCase();
}

var template = '<h1>' + markUpperCase('Hello') + ', ' + name + '</h1>         \n<p>This is a simple template in javascript</p>';

document.getElementById('template').innerHTML = template;