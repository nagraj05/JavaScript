let a = 8;
if (a > 7) {
  console.log("It runs");
}

let amFine = true;
if (amFine) {
  console.log("hehe");
}

let b = 4;
if (b > 10) {
  console.log("fine");
} else {
  console.log("not fine");
}

let c = 0;
if (c > 0) {
  console.log("posi");
} else if (c < 0) {
  console.log("neg");
} else {
  console.log("hehe");
}

let today = "hot";
switch (today) {
  case "hot":
    console.log("very hot");
    break;
  case "rainy":
    console.log("ha rain");
    break;
  case "cold":
    console.log("coldy");
    break;
}

let userAsk = prompt("Name of food");
let day = userAsk.toLowerCase();
switch (day) {
  case "pizza":
    alert("good choice");
    break;
  case "biryani":
    alert("love");
    break;
  default:
    alert("name it bitch");
    break;
}

let num = prompt("Enter number");
switch (true) {
  case num > 0:
    console.log("Number is positive");
    break;
  case num == 0:
    console.log("Numbers is zero");
    break;
  case num < 0:
    console.log("Number is negative");
    break;
  default:
    console.log("Entered value was not a number");
}

let k = 20;
k > 15 ? console.log("too big") : console.log("too small");
