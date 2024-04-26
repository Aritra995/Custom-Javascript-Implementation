"use strict"

// const { status } = require("express/lib/response");

// Immediately resolved

// var myPromise = Promise.resolve('Foo');

// myPromise.then( (res) => console.log(res) );

/* var myPromise = new Promise((resolve,reject) => {
    setTimeout(() => resolve(4), 2000);
});

myPromise.then( (res) => {
    res+=3;
    console.log(res);
} );
 */

function getData(method,url){
    return new Promise((resolve,reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload = () => {
            resolve(xhr.response);
            // if(this.status >= 200 && this.status < 300){
            //     resolve(xhr.response);
            // }else{
            //     reject({
            //         status:this.status,
            //         statusText: xhr.statusText
            //     });
            // }
        }
        xhr.onerror = () => {
            reject({
                status:this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    })
}

getData('GET','https://jsonplaceholder.typicode.com/todos').then((data) => {
    let todos = JSON.parse(data);
    let output = '';
    for(let todo of todos){
        output += `
            <li>
                <h3>${todo.title}</h3>
                <p>Completed: ${todo.completed}</p>
            </li>
        `;
    }
    document.getElementById('template').innerHTML = output
}).catch((error) => {
    console.log(error);
});