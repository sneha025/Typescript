"use strict";
// const anchor = document.querySelector("a")!; // when you certain that ancore tag is in html
// console.log(anchor.href);
// // or
// const anchor2 = document.querySelector("a");
// console.log(anchor2?.href); // giving ?(remove the null error)
// or onec can add if check on anchor
const form = document.querySelector(".new-item-form");
console.log(form);
const type = document.querySelector("#type");
console.log(type.value);
const tofrom = document.querySelector("#tofrom");
const detail = document.querySelector("#details");
const amount = document.querySelector("#amount");
// adding event listner
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, detail.value, amount.valueAsNumber);
});
// understanding the classes
class Invoic {
    constructor(c, d, a) {
        // buid contructor for the assigning
        // the object/instance of the class
        this.client = c;
        this.detail = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes Rs ${this.amount} for ${this.detail}`;
    }
}
let invoice1 = new Invoic("sneha", "rent", 567);
console.log(invoice1);
// assign Invoice class as a type to any variable or object
let invoices = [];
invoices.push(invoice1);
