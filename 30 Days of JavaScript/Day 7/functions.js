// So far we have seen many builtin JavaScript functions.
// In this section, we will focus on custom functions.
// What is a function?
//  Before we start making functions, lets understand what function is and why we need function?

// A function is a reusable block of code or programming statements designed to perform a certain task.
// A function is declared by a function key word followed by a name, followed by parentheses (). A parentheses can take a parameter. If a function take a parameter it will be called with argument. A function can also take a default parameter. To store a data to a function, a function has to return certain data types. To get the value we call or invoke a function. Function makes code:

// clean and easy to read
// reusable
// easy to test

// A function can be declared or created in couple of ways:

// Declaration function
// Expression function
// Anonymous function
// Arrow function

function functionName() {
  // code goes here
}
functionName(); // calling function by its name & with parentheses

function square() {
  let num = 2;
  let sq = num * num;
  console.log(sq);
}
square();

function addTwoNumbers() {
  let numOne = 10;
  let numTwo = 20;
  let sum = numOne + numTwo;

  console.log(sum);
}

addTwoNumbers();

function printFullName() {
  let firstName = "Nagraj";
  let lastName = "Tadingi";
  let space = " ";
  let fullName = firstName + space + lastName;
  console.log(fullName);
}

printFullName(); // calling a function

function printFullName() {
  let firstName = "Nagraj";
  let lastName = "Tadingi";
  let space = " ";
  let fullName = firstName + space + lastName;
  return fullName;
}
console.log(printFullName());

function test() {
  let rgds = "nag";
  let hju = "tad";
  let nm = rgds + hju;
  return nm;
}
console.log(test());

// function with parameters
function areaOfCircle(r) {
  let area = Math.PI * r * r;
  return area;
}
console.log(areaOfCircle(10));

function nag(side) {
  return side + side;
}
console.log(nag(10));

// functions with two parameters
function vik(p1, p2) {
  let sum = p1 + p2;
  console.log(sum);
}
vik(10, 20);

function printMyName(first, last) {
  let namu = first + " " + last;
  return namu;
}
console.log(printMyName("Nagraj", "Tadingi"));

function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
const numbers = [2, 3, 4, 5, 6];
console.log(sumOfArray(numbers));
