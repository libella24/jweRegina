"use strict";

let printPerson = function() {
    console.log(this.firstname + " " + this.lastname + " (" + this.age + ")");
};
let callPerson = function() { /* ... */ };

let person = {
    firstname: "Max",
    lastname: "Mustermann",
    age: 24,

    printPerson: printPerson,
    callPerson: callPerson
};

let person2 = {
    firstname: "Erika",
    lastname: "Mustermann",
    age: 23,

    printPerson: printPerson,
    callPerson: callPerson
};

person.printPerson();
person2.printPerson();




