/* 
 Lab 004 – Conditionals and Loops
*/

// TODO 1: if..else with age discounts
let age = 15;

if (age <= 16) {
console.log ("Teenager discount.");
} else if (age >= 65) {
console.log ("Senior discount");
} else {
console.log ("No discount");
}

let vpoints = 3200;
let cart = 245;
let total;
let discount = 0;

if (vpoints >= 5000) {
    total = cart * .8
    discount = 20
} else if (vpoints >= 2000) {
    total = cart * .9
    discount = 10
} else if (vpoints >= 1000) {
    total = cart * .95
    discount = 5
} else {
 total = cart
}

console.log(`your total is: $${total} with a discount of ${discount}%`)
// TODO 2: Nested if with two numbers
let number1 = 10;
let number2= 20;

if (typeof number1 == `number` && typeof number2 == `number`) {

if (number1 == number2) {
console.log("numbers are equal");
} else if (number1 > number2) {
console.log("number 1 is bigger");
} else{
console.log("number 1 is smaller");
}
} else {
    console.log("Number1 and Number2 are not of number data types")
}


// TODO 3: Switch statement for language greeting
let language = "French"; 

switch(language) {
    case "Spanish":
        console.log("Hola, mundo!")
        break;
    case "French":
        console.log("Bonjour tout le monde")
        break;
     default: 
        console.log("Hello, world!")
        break;
}

let model = prompt("enter model of car")

switch(model) {
    //Ford
    case "Focus":
    case "F150":
    case "Mustang":
        console.log(`Your ${model} is a Ford`)
        break;
    //tesla
    case "Model S":
    case "Model 3":
    case "Model X":
    case "Model Y":
        console.log(`Your ${model} is a Tesla`)
        break;
    //Porsche
    case "911":
    case "Carrera":
    case "Tycan":
    case "918":
        console.log(`Your ${model} is a Porsche`)
        break;
    //Audi
    case "R8":
    case "A4":
    case "S4 cuatro":
    case "S5":
        console.log(`Your ${model} is a Audi`)
        break;
    default:
        console.log("That is not a valid response")
}
// TODO 4: While loop (1 to 10)

// TODO 5: Do..while loop (1 to 5)

// TODO 6: For loop (1 to 20, print "ten" at 10 and "twenty" at 20)

// TODO 7: Even/Odd loop (1 to 20)

// 🚀 Stretch Goals
// - Backwards loop from 20 to 1
// - Skip multiples of 3 in even/odd loop
