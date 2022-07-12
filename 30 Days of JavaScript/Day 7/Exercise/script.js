// L1Q1

function fullName() {
  let first = "Nagraj";
  let space = " ";
  let last = "Tadingi";
  let Name = first + space + last;
  console.log(Name);
}
fullName();

// L1Q2

function fullNames(first, last) {
  return first + " " + last;
}
console.log(fullNames("Nagraj", "Tadingi"));

// L1Q3
function addNumbers(p1, p2) {
  return p1 + p2;
}
console.log(addNumbers(10, 20));

// L1Q4

function areaOfRectangle(length, width) {
  return length * width;
}
console.log(areaOfRectangle(5, 4));
console.log(areaOfRectangle(100, 4));

// L1Q5
function perimeterOfRectangle(l, b) {
  // let perimeter = 2*(l +b)
  // return perimeter
  return 2 * (l + b);
}
console.log(perimeterOfRectangle(5, 5));

// L1Q6
function volumeofRectPrism(l, w, h) {
  return l * w * h;
}
console.log(volumeofRectPrism(5, 5, 5));

// L1Q7

function areaOfCircle(r) {
  let circle = Math.PI * r * r;
  return circle;
}
console.log(areaOfCircle(2));

// L1Q8

function circumOfCircle(r) {
  let circle = 2 * Math.PI * r;
  return circle;
}
console.log(circumOfCircle(3));

// L1Q9
function density(mass, volume) {
  let d = mass / volume;
  return d;
}
console.log(density(4, 21));

// L1Q10

function speed(d, t) {
  let s = d / t;
  return s;
}
console.log(speed(10, 2));

// L1Q11
function weight(m, g) {
  let w = m * g;
  return w;
}
console.log(weight(10, 2));

// L1Q12
function convertToFahrenheit(c) {
  let f = c * (9 / 5) + 32;
  return f;
}
console.log(convertToFahrenheit(25));

// L1Q13
function bmi(weight, height) {
  let sum = (weight / Math.pow(height / 100, 2)).toFixed(1);

  if (sum < 18.5) {
    console.log("Underweight");
  } else if (sum >= 18.5 && sum <= 24.9) {
    console.log("Normal weight");
  } else if (sum >= 25 && sum <= 29.9) {
    console.log("Overweight");
  } else {
    console.log("obese");
  }

  return sum;
  // console.log(sum)
}
bmi(100, 165);

// L1Q14

function checkSeason(month) {
  let m = month;
  switch (m) {
    case "september":
      console.log("The Season is Autumn");
      break;
    case "october":
      console.log("The Season is Autumn");
      break;
    case "november":
      console.log("The Season is Autumn");
      break;
    case "december":
      console.log("The Season is Winter");
      break;
    case "january":
      console.log("The Season is Winter");
      break;
    case "february":
      console.log("The Season is Winter");
      break;
    case "march":
      console.log("The Season is Spring");
      break;
    case "april":
      console.log("The Season is Spring");
      break;
    case "may":
      console.log("The Season is Spring");
      break;
    case "june":
      console.log("The Season is Summer");
      break;
    case "july":
      console.log("The Season is Summer");
      break;
    case "august":
      console.log("The Season is Summer");
      break;
    case "november":
      console.log("The Season is Autumn");
      break;
  }
  return m;
}
checkSeason("may");

const numb = [0, 10, 5];
numb.sort(function (k1, k2) {
  return k1 - k2;
});
console.log(numb);
console.log(numb.slice(-1));

const neg = [0, -10, -2];
neg.sort(function (a, b) {
  return a - b;
});
console.log(neg);
console.log(neg.slice(-1));

function quad() {}

// function greetings(name = 'Peter') {
//   let message = `${name}, welcome to 30 Days Of JavaScript!`
//   return message
// }

// console.log(greetings())
// console.log(greetings('Asabeneh'))

// const solveQuadEquation = (a,b,c) =>{
//   let l = 2(a*x) +(b*x) +c
//   return l
// }
// console.log(solveQuadEquation())

const array1 = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];

array1.forEach(function (e) {
  console.log(e);
});

// L2Q4
function showDateTime() {
  let r = new Date();
  let q =
    r.getDate() +
    "/" +
    (r.getMonth() + 1) +
    "/" +
    r.getFullYear() +
    " " +
    r.getHours() +
    ":" +
    r.getMinutes();
  return q;
}
console.log(showDateTime());

//  L2Q5

function swapValues(x, y) {
  let a = x;
  x = y;
  y = a;
  return [x, y];
}
console.log(swapValues(4, 5));

function swap(x, y) {
  var t = x;
  x = y;
  y = t;
  return [x, y];
}

console.log(swap(2, 3));

//JavaScript program to swap two variables

//take input from the users
// let a = prompt('Enter the first variable: ');
// let b = prompt('Enter the second variable: ');

// //create a temporary variable
// let temp;

// //swap variables
// temp = a;
// a = b;
// b = temp;

// console.log(`The value of a after swapping: ${a}`);
// console.log(`The value of b after swapping: ${b}`);

// L2Q6

function reverseArray(arr) {
  let arr1 = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    arr1.push(arr[i]);
  }
  return arr1;
}
const arr = [1, 2, 3, 4];
console.log(reverseArray(arr));
console.log(reverseArray([10, 6, 5, 2]));

const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
const newArr = [];
for (let i = countries.length - 1; i >= 0; i--) {
  newArr.push(countries[i]);
}
console.log(newArr);

const countries1 = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
const newArr2 = [];
for (let i = 0; i < countries1.length; i++) {
  newArr2.push(countries1[i]);
}
console.log(newArr2);

// function showPrimes(n) {
//   nextPrime: for (let i = 2; i < n; i++) {

//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) continue nextPrime;
//     }

//     console.log( i ); // a prime
//   }
// }showPrimes(1000)


let r = ["tomato", "apple","orange"]
function capitalizeArray(l){
  let newArrayy = []
  for(let i of l ){
    newArrayy.push(i.toUpperCase())
  }
  return newArrayy
}
console.log(capitalizeArray(r))


let nameNagraj = (a,b) => a+b
console.log(nameNagraj(10,2))


// const fru = ["apple","mango"]

// function addItem(fru1){
//   let k = []
//   for(const i in fru){
//     k.push(i)
//   }
//   return k
// }
// console.log(addItem(fru))


function addItem(fruits){
  const newfruitss = ["Sugar", "tomato"]

  newfruitss.push(fruits)
  // console.log(newArray)
  return newfruitss
}
console.log(addItem("orange"))


// function menu(isFriday) {
//   const food = ['🍗', '🍳'];
//   isFriday ? food.push('🍷') : food;

//   console.log(food)
//   return food;
  
// }
// menu()


function removeItem (nt){
  const listOfItems = ["live", "song", "kill"]
  listOfItems.pop(nt)
  return listOfItems
}
console.log(removeItem("kill"))



function sumOfNumbers(...args){
  let sum = 0
  for (const ele of args){
    sum +=ele
  }
  return sum
}
console.log(sumOfNumbers(1,2,3,4)) 



let userName = ["John", "pop"]
console.log(userName)
function takeName(x){
  userName.push(x)
  console.log(userName)
  return userName
}
console.log(userName)
console.log(takeName("huh"))
