for (let i = 0; i <= 5; i++) {
  console.log(`i = ${i}`);
}

for (let i = 10; i >= 0; i--) {
  console.log(i);
}

const myFood = ["Biryani", "coffee", "tomato", "Space"];
const newFood = [];
for (let i = 0; i < myFood.length; i++) {
  newFood.push(myFood[i].toUpperCase());
}
console.log(newFood);

const numbers = [10, 6, 8, 4, 6, 5];
const newNum = [];
for (let i = 0; i < numbers.length; i++) {
  newNum.push(numbers[i] * 2);
}
console.log(newNum);

/* While loop
let i = 0
while(condition){
    console.log(i)
    increment/decrement
}
*/

let nagraj = 0;
while (nagraj <= 5) {
  console.log(nagraj);
  nagraj++;
}

/* 
do while

let i = 0
do{
    console.log(i)
    i++
}while(i <=5)
*/

let i = 0;
do {
  console.log(`i = ${i}`);
  i++;
} while (i <= 3);

const kl = [5, 6, 8, 9, 6, 4];
let sum = 0;
for (const lk of kl) {
  console.log(lk * lk);
  sum = sum + lk;
}
console.log(sum);

for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}

// 0 1 2

for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}

// 0 1 2 4 5
