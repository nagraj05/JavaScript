//scope.js
function letsLearnScope() {
  var gravity = 9.81;
  console.log(gravity);
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true) {
  var gravity = 9.81;
  console.log(gravity); // 9.81
}
console.log(gravity); // 9.81

for (var i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
console.log(i); // 3

//scope.js
function letsLearnScope() {
  // you can use let or const, but gravity is constant I prefer to use const
  const gravity = 9.81;
  console.log(gravity);
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true) {
  const gravity = 9.81;
  console.log(gravity); // 9.81
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
// console.log(i), Uncaught ReferenceError: i is not defined

const rectangle = {
  length: 20,
  width: 20,
};
console.log(rectangle); // {length: 20, width: 20}

const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: true,
};
console.log(person);

const sapien = {
  firstName: "Nagraj",
  lastName: "Tadingi",
  age: 26,
  country: "India",
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  address: {
    street: 'Heitamienkatu 16',
    pobox: 2002,
    city: 'Helsinki'},

// console.log(sapien)
getFullName: function(){
    return `${sapien.firstName}${sapien.lastName}`
    }
}
sapien.isMarried = false,
sapien.skills.push ("Javascript1")

sapien.getPersonInfo = function(){
    let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(', ')
  let lastSkill = this.skills.splice(this.skills.length - 1)[0]

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fName = sapien.getFullName()
    let statement = `${fName} is a ${this.title = "teacher"}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
  return statement
}
const copyPerson= Object.assign({},sapien)
console.log(sapien)
console.log(sapien.getPersonInfo())
console.log(copyPerson)


const keys = Object.keys(copyPerson)
console.log(keys)
const add = Object.keys(copyPerson.address)
console.log(add)

const values = Object.values(copyPerson)
console.log(values)


const entries = Object.entries(copyPerson)
console.log(entries)


console.log(copyPerson.hasOwnProperty('skills'))
console.log(copyPerson.hasOwnProperty('score'))