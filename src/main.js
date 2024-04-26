"use strict"

class User{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    static countUsers(){
        console.log('There are 50 users');
    }

    register(){
        console.log(this.username + ' is now registered');
    }
}

class Member extends User{
    constructor(username, email, password, memberPackage){
        super(username,email,password);
        this.package = memberPackage;
    }

    getPackage(){
        console.log(this.username+' is subscribed to '+this.package);
    }
}

let mike = new Member('john','john@gmail.com','1234567890','Standard');
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
