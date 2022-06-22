// L1 Q1
let userInput = prompt("Enter your age.")
if (userInput>18){
    alert("You are old enough to drive")
} else{
    alert(`You are left with ${18-userInput} years to drive`)
}

// L1 Q2
let enterAge = prompt("Your age?")
const myAge = 26
if (enterAge>myAge){
    alert(`You are ${enterAge-myAge} years older than me`)
} else if(enterAge<myAge){
    alert(`You are ${myAge- enterAge} year younger than me`)
}else{
    alert("cool")
}

// L1 Q3
let a = 4
let b =3
if(a>b){
    console.log("a is greater than b")
}else{
    console.log("a is less than b")
}

a>b ? console.log("a is greater than b") : console.log("a is less than b")

// L1 Q4

let enterANumber = prompt("Enter a number.")
if (enterANumber%2 == 0){
    alert(`${enterANumber} is even number`)
}else{
    alert(`${enterANumber} is odd number`)
}


// L2 Q1

let marks = prompt("Enter marks")
if(marks >=90){
    alert ("A")
} else if( marks >= 70) {
    alert("B")
}else if (marks >=60){
    alert("C")
}else if (marks >=50){
    alert ("D")
}else{
    alert("F")
}

let month = prompt("Enter month")
switch(month){
    case 'september':
        console.log("The Season is Autumn")
        break
    case 'october':
        console.log("The Season is Autumn")
        break
    case 'november':
        console.log("The Season is Autumn")
        break
    case 'december':
        console.log("The Season is Winter")
        break
    case 'january':
        console.log("The Season is Winter")
        break
    case 'february':
        console.log("The Season is Winter")
        break
    case 'march':
        console.log("The Season is Spring")
        break
    case 'april':
        console.log("The Season is Spring")
        break
    case 'may':
        console.log("The Season is Spring")
        break
    case 'june':
        console.log("The Season is Summer")
        break
    case 'july':
        console.log("The Season is Summer")
        break
    case 'august':
        console.log("The Season is Summer")
        break
    case 'november':
        console.log("The Season is Autumn")
        break        
}


// L2 Q3
let day = prompt("Enter Day")
switch (day){
    case 'sunday':
        console.log(`${day} is a weekend`)
        break
    case 'monday':
        console.log(`${day} is a weekday`)
        break
    case 'tueday':
        console.log(`${day} is a weekday`)
        break
    case 'wednesday':
        console.log(`${day} is a weekday`)
        break
    case 'thursday':
        console.log(`${day} is a weekday`)
        break
    case 'friday':
        console.log(`${day} is a weekday`)
        break
    case 'saturday':
        console.log(`${day} is a weekend`)
        break                        
}

// L3 Q3

let month = prompt("Enter Month")
let monthu = month.toLowerCase()
let monthl = month.toUpperCase()
switch (month){
    case 'january':
        console.log(`${month} has 31 days`)
        break
    case 'february':
        console.log(`${month} has 28 days`)
        break
        case 'march':
            console.log(`${month} has 31 days`)
            break
            case 'april':
        console.log(`${month} has 30 days`)
        break
        case 'may':
        console.log(`${month} has 31 days`)
        break
        case 'june':
        console.log(`${month} has 30 days`)
        break
        case 'july':
        console.log(`${month} has 31 days`)
        break
        case 'august':
        console.log(`${month} has 31 days`)
        break
        case 'september':
        console.log(`${month} has 30 days`)
        break
        case 'october':
        console.log(`${month} has 31 days`)
        break
        case 'november':
        console.log(`${month} has 30 days`)
        break
        case 'december':
        console.log(`${month} has 31 days`)
        break        
}