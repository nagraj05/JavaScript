let challenge = '30 Days of JavaScript'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substr(3,4))
console.log(challenge.substring(3,7))
console.log(challenge.substring(3))
console.log(challenge.includes("Script"))
console.log(challenge.split())
console.log(challenge.split(" "))
console.log(challenge.replace("JavaScript","Python"))
let a = 'Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon'
console.log(a.split(','))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt("J"))
console.log(challenge.indexOf("a"))
console.log(challenge.lastIndexOf("a")) 
let sen = "You cannot end a sentence with because because because is a conjunction"
console.log(sen.indexOf("because"))
console.log(sen.lastIndexOf("because"))
console.log(sen.search("because"))
console.log(challenge.trim())
console.log(challenge.startsWith("30"))
console.log(challenge.endsWith("JavaScript"))
console.log(challenge.match("a"))
let myKo = "30 Days of "
console.log(myKo.concat("JavaScript"))
console.log(challenge.repeat(2))

// Exercise 2

let paraGraph = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(paraGraph)

let que2 = `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
console.log(que2)
let myNumber = "10"
let myNum = "10"
console.log(myNumber==myNum )
let gravity = 9.8
console.log(Math.ceil(gravity))


let typeA= "python", typeB= "jargon";
console.log(typeA.includes("on"),typeB.includes("on"))

let que6 = "I hope this course is not full of jargon."
console.log(que6.includes("jargon"))

let rnd= Math.random()
console.log(rnd)
elev = rnd*101
console.log(elev)
jop = Math.floor(elev)
console.log(jop)
let nagraj= Math.floor(Math.random()*11)
console.log(nagraj)

let op= Math.floor(Math.random()*51 )+50;
console.log(op)


let kenro = Math.floor(Math.random()*256)
console.log(kenro)

let pop= "Javascript"

// let kol = Number(pop)
const popLength= pop.length
let mango = pop.charAt(Math.floor(Math.random()*popLength))
console.log(mango)

console.log('1\t1\t1\t1\t1' )
console.log('2\t1\t2\t4\t8' )
console.log('3\t1\t3\t9\t27' )
console.log('4\t1\t4\t16\t64' )
console.log('5\t1\t5\t25\t125' )


let newWord = "You cannot end a sentence with because because because is a conjunction"
console.log(newWord.substr(31,24))


// Exercise 3

let loveSen ="Love is the best thing in this world. Some found their love and some are still looking for their love."
console.log(loveSen.match("love"))
let love1 = /love/gi
console.log(loveSen.match(love1))


let ram = "You cannot end a sentence with because because because is a conjunction"
let ram1 = /because/gi
console.log(ram.match(ram1))

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replace(/[^\w\s]|_/g, ""))
// console.log(sentence.replace("$",""))
let newSen= sentence.split(/\s/)
// console.log(newSen)
console.log('words = ' + JSON.stringify(newSen));



let salCal = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
let huh = salCal.match(/\d+/g)
console.log(huh)
let total = (+huh[0]+ +huh[2])*12+ +huh[1]
console.log(total)


