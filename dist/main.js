"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
    function User(username, email, password) {
        _classCallCheck(this, User);

        this.username = username;
        this.email = email;
        this.password = password;
    }

    _createClass(User, [{
        key: 'register',
        value: function register() {
            console.log(this.username + ' is now registered');
        }
    }], [{
        key: 'countUsers',
        value: function countUsers() {
            console.log('There are 50 users');
        }
    }]);

    return User;
}();

var Member = function (_User) {
    _inherits(Member, _User);

    function Member(username, email, password, memberPackage) {
        _classCallCheck(this, Member);

        var _this = _possibleConstructorReturn(this, (Member.__proto__ || Object.getPrototypeOf(Member)).call(this, username, email, password));

        _this.package = memberPackage;
        return _this;
    }

    _createClass(Member, [{
        key: 'getPackage',
        value: function getPackage() {
            console.log(this.username + ' is subscribed to ' + this.package);
        }
    }]);

    return Member;
}(User);

var mike = new Member('john', 'john@gmail.com', '1234567890', 'Standard');
mike.register();
mike.getPackage();
/* // let bob = new User('bob','bob@test.com','12345');
// bob.register();
// User.countUsers();
 */

// var a = 'Test1';
// let b = 'Test2';

/* function testVar(){
    var a = 30;
    if(true){
        var a = 50;
        console.log(a);
    }
    console.log(a);
}


function testLet(){
    let a = 30;
    if(true){
        let a = 50;
        console.log(a);
    }
    console.log(a);
}

for(let i =0;i < 10;i++){
    console.log(i);
}
console.log(i);

// testLet();
 */
/* const colors = [];
colors.push('red');
colors.push('blue');


console.log(colors);
 */

/* "scripts": {
    "build": "babel src -d dist"
  }, */

//   https://jsonplaceholder.typicode.com/