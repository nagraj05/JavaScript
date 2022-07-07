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

function circumOfCircle(r) {
  let circle = 2 * Math.PI * r;
  return circle;
}
console.log(circumOfCircle(3));

function density(mass, volume) {
  let d = mass / volume;
  return d;
}
console.log(density(4, 21));

function speed(d, t) {
  let s = d / t;
  return s;
}
console.log(speed(10, 2));

function weight(m, g) {
  let w = m * g;
  return w;
}
console.log(weight(10, 2));

function convertToFahrenheit(c) {
  let f = c * (9 / 5) + 32;
  return f;
}
console.log(convertToFahrenheit(25));

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






