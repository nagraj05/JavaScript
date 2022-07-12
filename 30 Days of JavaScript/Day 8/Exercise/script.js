// L1Q1,Q2, Q3, Q4, Q5
const dog = {
    name : "Pluto",
    legs : 4,
    color : "Black",
    age : 8,
    bark : "woof woof"
}
console.log(dog.name, dog.legs, dog.color, dog.age, dog.bark)

dog.breed = "Pug"
console.log(dog.breed)

getDogInfo = function(){
    return `${dog.name}   ${dog.bark}`
}
console.log(getDogInfo())



const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}
const keys = Object.keys(users)
console.log(keys)
const copyPerson = Object.assign({}, users)
console.log(copyPerson)
const Alex = Object.keys(copyPerson.Alex.skills)
console.log(Alex)
const Asab = Object.keys(copyPerson.Asab.skills)
console.log(Asab)
const Brook = Object.keys(copyPerson.Brook.skills)
console.log(Brook)
const Daniel = Object.keys(copyPerson.Daniel.skills)
console.log(Daniel)
const John = Object.keys(copyPerson.John.skills)
console.log(John)
const Thomas = Object.keys(copyPerson.Thomas.skills)
console.log(Thomas)
const Paul = Object.keys(copyPerson.Paul.skills)
console.log(Paul)

// users.getPersonInfo = function() {
//     let skillsWithoutLastSkill = this.skills
//       .splice(0, this.skills.length - 1)
//       .join(', ')
//     let lastSkill = this.skills.splice(this.skills.length - 1)[0]
  
//     let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`

const user_name = users.Alex.skills;
console.log(user_name)
const x = Object.keys(user_name)
console.log(x) 

let newUsers = []
newUsers.push(users)
console.log(newUsers)

for (let key in users){
    console.log(users[key])
}