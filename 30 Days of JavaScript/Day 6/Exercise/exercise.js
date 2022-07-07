// L1 Q1

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

let r = 0;
do {
  console.log(r);
  r++;
} while (r <= 10);

// L1 Q2

for (let i = 10; i >= 0; i--) {
  console.log(`i = ${i}`);
}

let k = 10;
while (k >= 0) {
  console.log(`p = ${k}`);
  k--;
}

let a = 10;
do {
  console.log(`h = ${a}`);
  a--;
} while (a >= 0);

let py = 7;
let newWord = "";
for (let i = 1; i <= py; i++) {
  for (let j = 0; j < i; j++) {
    newWord += "#";
  }
  newWord += "\n";
}
console.log(newWord);
