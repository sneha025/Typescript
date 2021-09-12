let greet: Function;
greet = () => {
  console.log("Hello!!");
};
// parameter in functions

const add1 = (a: number, b: number, c?: number) => {
  // oprtional paramet c using ?
  console.log(c); // if we don't give c the value will be undefined
  return a + b;
};

const add2 = (a: number, b: number, c: number = 10) => {
  console.log(c);
  return a + b + c;
}; // giving c as defualt parameter

let result = add2(5, 6);
add2(5, 7, 9);

const add3 = (a: number, b: number, c: number = 10): number => { // giving return type 
  return a + b + c;
}; //if don't give the return type Typescript inffere the type of return


