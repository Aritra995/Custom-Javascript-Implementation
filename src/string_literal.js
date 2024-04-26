"use strict"

let name = 'John';

function markUpperCase(word) {
    return word.toUpperCase();
}

let template = 
`<h1>${markUpperCase('Hello')}, ${name}</h1>         
<p>This is a simple template in javascript</p>`;

document.getElementById('template').innerHTML = template;