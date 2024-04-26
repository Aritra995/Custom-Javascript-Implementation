"use strict";

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

function getData(method, url) {
    var _this = this;

    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            resolve(xhr.response);
            // if(this.status >= 200 && this.status < 300){
            //     resolve(xhr.response);
            // }else{
            //     reject({
            //         status:this.status,
            //         statusText: xhr.statusText
            //     });
            // }
        };
        xhr.onerror = function () {
            reject({
                status: _this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}

getData('GET', 'https://jsonplaceholder.typicode.com/todos').then(function (data) {
    var todos = JSON.parse(data);
    var output = '';
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = todos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var todo = _step.value;

            output += '\n            <li>\n                <h3>' + todo.title + '</h3>\n                <p>Completed: ' + todo.completed + '</p>\n            </li>\n        ';
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    document.getElementById('template').innerHTML = output;
}).catch(function (error) {
    console.log(error);
});