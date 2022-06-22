let isLightOn = null;
console.log(isLightOn);
let a = 8,
  b = 3;
console.log(a + b);
console.log(3 > 2);
console.log(3 >= 2);
console.log(3 === "3");
console.log(3 !== "3");
console.log("mango".length == "tomat".length);
console.log(4 > 3 && 10 > 5);
console.log(4 < 3 || 10 > 5);
console.log(!(4 < 3));

let isRaining = true;
isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");
isRaining = false;

isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");

let number = 5;
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`);
number = -5;

number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`);

// alert("hi")
// let nih = prompt("hey", "")
// console.log(nih)
// const agree=confirm("r u sure")
// console.log(agree)

let today = new Date();
console.log(today);
console.log(today.getMonth());

const now = new Date();
const year = now.getFullYear(); // return year
const month = now.getMonth() + 1; // return month(0 - 11)
const date = now.getDate(); // return date (1 - 31)
const hours = now.getHours(); // return number (0 - 23)
const minutes = now.getMinutes(); // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`); // 4/1/2020 0:56
