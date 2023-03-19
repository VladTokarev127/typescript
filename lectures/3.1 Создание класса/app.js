"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
const user = new User('Вася');
console.log(user);
user.name = 'Петя';
console.log(user);
