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
