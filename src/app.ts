// const anchor = document.querySelector("a")!; // when you certain that ancore tag is in html
// console.log(anchor.href);
// // or

// const anchor2 = document.querySelector("a");
// console.log(anchor2?.href); // giving ?(remove the null error)

// or onec can add if check on anchor

const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form);
const type = document.querySelector("#type") as HTMLSelectElement;
console.log(type.value);

const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const detail = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// adding event listner

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, detail.value, amount.valueAsNumber);
});

// understanding the classes
class Invoic {
  // declaring the instances/or properties of the class
  client: string;
  detail: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
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
let invoices: Invoic[] = [];
invoices.push(invoice1);
