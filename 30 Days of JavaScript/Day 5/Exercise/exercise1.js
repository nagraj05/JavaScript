const arr = Array()
console.log(arr)
const a2 = [1,2,3,4,5,6]
const a1 = Array(8)
console.log(a1)
console.log(a2.length)
let lastnumbr = a2.length 
console.log(lastnumbr)
console.log(a2.lastIndexOf(6))
console.log(a2[5])
console.log(a2.indexOf(1))
console.log(a2[0])
console.log(lastnumbr/2)
console.log(a2[3])

const mixedDataTypes = ["apple", 3, "gk", 9, "rt", 66, "no"]
console.log(mixedDataTypes)
console.log(mixedDataTypes.length)

const itCompanies =["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log(itCompanies)
console.log(itCompanies.length )
console.log(itCompanies[0])
console.log(itCompanies[0], itCompanies[3],itCompanies[6])
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())
console.log(itCompanies.toString(""))

let companyIndex = itCompanies.indexOf("Apple")
companyIndex ===-1 
    ? console.log("Not found")
    : console.log("It exists")

console.log(itCompanies)
console.log(itCompanies.splice(1,1))
console.log(itCompanies.sort())
console.log(itCompanies.reverse())
console.log(itCompanies)
console.log(itCompanies.slice(0,3))
console.log(itCompanies.slice(3,7))
console.log(itCompanies.slice(2,3))
console.log(itCompanies.splice(3,1))
console.log(itCompanies)
console.log(itCompanies.splice())



// L2 Q2
let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text)
console.log(text.length)
let tt1 = text.split(".")
// let tt =tt1.split(" ")
console.log(tt1)
// const hu= Array(text)
// console.log(hu)
// console.log(tt.length)
let tt2 = text.split(" ")
console.log(tt2)
console.log(tt2.length)


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.push('Meat')
console.log(shoppingCart)
shoppingCart.push('Sugar')
console.log(shoppingCart)

const newshop= shoppingCart.slice(0,3)
console.log(newshop)
const lstshp = shoppingCart.slice(4,6)
console.log(lstshp)
const finalshp = newshop.concat(lstshp)
console.log(finalshp)


const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
  ];
  
  console.log(countries.includes("Ethiopia"))




  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ] 
  console.log(webTechs.includes("Sass")) 
  webTechs.push("Sass")
  console.log(webTechs)


  const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
  const backEnd = ['Node','Express', 'MongoDB']
  const fullStack = frontEnd.concat(backEnd) 
  console.log(fullStack)



  const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
  console.log(ages.sort())
  console.log(ages.length) 
  console.log(ages[5])
  console.log(ages[6])
  console.log((ages[5]+ages[6]) /2) 

  


