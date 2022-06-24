// syntax using array constructor
const arr = Array();
console.log(arr);
// syntax using square brackets
//  This is for empty list
const arr1 = [];
console.log(arr1);

// How to create an array with values
const numbers = [0, 10, 3.14, 2.96];
const names = ["nt", "tn", "ntt", "ntnt"];

console.log("numbers:", numbers);
console.log("number of numbers:", numbers.length);

console.log("names: ", names);
console.log("number of names:", names.length);

// Array can have items of different data types

const mixNames = [
  "pj",
  "rj",
  "jj",
  "op",
  { country: ["finland", "india", "aus"] },
  { skills: ["html", "css", "javascript"] },
];
console.log(mixNames);

// Creating an array using split()
let nameMe = "Nagraj";
const newName = nameMe.split("");
console.log(newName);

let companiesTech = "fb, google, snap , insta";
const newComp = companiesTech.split(",");
console.log(newComp);

// Accessing an array
const newFruits = ["banana", "mango", "pineapple"];
let newFru = newFruits[0];
console.log(newFruits[1]);

const numbers1 = [0, 3.14, 9.81, 37, 98.6, 100]; // set of numbers

console.log(numbers1.length); // => to know the size of the array, which is 6
console.log(numbers1); // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers1[0]); //  -> 0
console.log(numbers1[5]); //  -> 100

let lastIndex = numbers1.length - 1;
console.log(numbers1[lastIndex]); // -> 100

// Modifying array element
const lol = ["tomato", "hi", "cool"];
lol[0] = "ku";
lol[2] = "pp";
lol[3] = "rr";
console.log(lol);

// Methods to manipulate array
// There are different methods to manipulate an array.
// These are some of the available methods to deal with arrays:Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift

const emptyArr = Array();
console.log(emptyArr);
const eightEmpty = Array(8);
console.log(eightEmpty);

const moT = Array(8);
console.log(moT.fill("X"));

const firstList = [2, 3, 4];
const secondList = [5, 6, 7];
const thirdList = secondList.concat(firstList);
console.log(thirdList);
console.log(firstList.length);

const randomNumbers = [1, 2, 3, 4, 5, 6, 7];
console.log(randomNumbers.indexOf(5));
console.log(randomNumbers.indexOf(9));

const randomFruits1 = ["apple", "banana", "Orange", "lemon"];
let index = randomFruits1.indexOf("apple");
console.log(index);

if (index === -1) {
  console.log("This fruit doesn't exist");
} else {
  console.log("It does exists");
}

index === -1
  ? console.log("This fruit  exist")
  : console.log("It doesn't exists");

const haha = [1, 2, 3, 6, 8, 7, 9, 45];
console.log(haha.lastIndexOf(45));
console.log(haha.includes(6));
console.log(Array.isArray(haha));
console.log(haha.toString());
console.log(haha.join(""));

const sLo = [1, 2, 3, 4, 5, 6];
// console.log(sLo.slice())
// console.log(sLo.slice(0))
// console.log(sLo.slice(1,4))
// console.log(sLo.splice())
// console.log(sLo.splice(0))
// console.log(sLo.splice(3))
sLo.push(4);
console.log(sLo);
sLo.pop();
console.log(sLo);
sLo.unshift(1);
console.log(sLo);
console.log(sLo.reverse());
console.log(sLo.sort());

// Array of arrays

const Nagraj = [1, 2, 3];
const Tadingi = [4, 5, 6];
const arrayOfArrays = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(arrayOfArrays[0]);

const frontEnd = ["html", "css", "javascript"];
const backEnd = ["time", "space", "universe"];
const fullStack = [frontEnd, backEnd];
console.log(fullStack);
