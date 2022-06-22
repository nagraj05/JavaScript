let firstName = "Nagraj" , lastName = "Tadingi" , country = "India" , city = "Rayagada" , age = 26 , isMarried = false , year = 2022;
console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))

let a = '10'
b = 10
console.log(typeof(a)== b)

let c = 9.8
d = parseInt(9.8)
e = 10
console.log(d == e)


let f = 10>5
    ? ("hi")
    : ("bye")
console.log(f)

let g = 10>5
h = "helo" == "helo"
i = true
console.log(g,h,i)

let j = 10<5
k = "lo" =="li"
l = false
console.log(j,k,l)

console.log(4>3)
console.log(4>=3)
console.log(4<3)
console.log(4<=3)
console.log(4==4)
console.log(4===4)
console.log(4!=4)
console.log(4!==4)
console.log(4!='4')
console.log(4=='4')
console.log(4==='4')
console.log(!('python'.length == 'jargon'.length))



console.log(4>3 && 10<12)
console.log(4>3 && 10>12)
console.log(4>3 || 10<12)
console.log(4>3 || 10>12)
console.log(!(4>3))
console.log(!(4<3))
console.log(!(false))
console.log(!(4>3 && 10<12))
console.log(!(4>3 && 10>12))
console.log(!(4==='4'))
let yui = "dragon"
kio = "python"
console.log(!(yui.includes("on")== kio.includes("on")))


let que7 = new Date()
console.log(que7)
console.log(que7.getFullYear())
console.log(que7.getMonth())
let que77 = Date.now()
console.log(que77)
console.log(que7.getDate())
console.log(que7.getHours())
console.log(que7.getMinutes())
console.log(que7.getTime()/60)



// Exercise 2

// let base = prompt("Enter base")
// let height = prompt("Enter Height")
// alert(0.5*base*height)


// let sideA = parseInt(prompt("a"))
// let sideB = parseInt(prompt ("b"))
// let sideC = parseInt(prompt ("c"))
// alert(`the result is ${sideA + sideB + sideC}`)


// let lenRec = parseInt(prompt("Length"))
// let widRec = parseInt(prompt("width"))
// alert (`The area is ${lenRec*widRec}`)
// alert(`the perimeter is ${2*(lenRec+widRec)}`)


// const PI = 3.14
// let radiusO = prompt("r")
// alert (`area is ${PI*radiusO*radiusO}`)
// alert(`circumference is ${2*PI*radiusO}`) 

// let xSlope= prompt("x")
// ySlope = 2*xSlope-2
// alert(`slope is ${}`)

// let x1 =2
// x2 = 2
// y1 = 6
// y2 = 10
// console.log((y2-y1)/(x2-x1))

let birthYear = prompt("")
let current = new Date()
let cYear = current.getFullYear() - birthYear 
// console.log(cYear)
if (cYear > 18 ){
    alert(`You are ${cYear}. You are old enough`)

} 
else{
    alert(`You are ${cYear} . Not old enough. You will be allowed after ${18-cYear} years` )
}
