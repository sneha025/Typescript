"use strict";
// string
let mynames = "Sneha Maurya";
function areaOfCircles(radius) {
    return 2 * Math.PI * radius;
}
console.log(areaOfCircles(2));
// arrays and objects
let names = ["hitashi", "saske", "yoshida"];
names.push("sneha");
let numbers = [4, 6, 7];
numbers.push(8);
// explicit type
let People_;
People_ = {
    name: "sneha",
    age: 43,
    working: false
};
// let info: People;
// info.name = "sneha";
// info.age = 34;
// info.working = false;
//explicit types
//array
let ninjas;
// when you want to store more than one type
let mixed = []; // union types
mixed.push(34);
mixed.push("hello");
// any type
let age;
age = "25";
