/* 
 Lab 002 – Data Types in JavaScript
*/

// TODO 1: Create variables age (34) and price (12.99), print both
let age = 34;
console.log(age)

let price = 12.99;
console.log(price)
// TODO 1b: Divide "Sandra" by 2 and print result (expect NaN)
console.log("Sandra" / 2)
// TODO 2: Print basic math ops: + - * /
console.log(2 + 2)
console.log(4 - 2)
console.log(3 * 2)
console.log(6 / 2)
// TODO 2b: Use exponentiation (2 ** 3) and modulo (7 % 2)
console.log(2 ** 3)
console.log(7 % 2)
// TODO 3: Assignment operators with score variable
let score = 10;
console.log(score)

score +=1
console.log(score)

score -=2
console.log(score)

score *=2
console.log(score)

score /=2
console.log(score)
// TODO 4: Expressions with operator precedence
const result = ((7 + 5) / 3) - 8
console.log(((7 + 5) / 3) - 8)
// TODO 5: Strings (single, double, backticks)
console.log("Matthew")

console.log('Matthew')

console.log(`Matthew`)

console.log(`Hello, my name is Matthew and I am 15 years old.`)
// TODO 6: String properties and methods
// - greeting.length
let greeting = "Hello there!";
console.log(greeting.length)
// - charAt(0), charAt(5), [3]
console.log(greeting.charAt(0))

console.log(greeting.charAt(5))

console.log(greeting[3])
// - indexOf("sad")
let message = "Don't be sad, be happy!"
console.log(message)

console.log(message.indexOf("sad"))
// - repeat()
console.log("la".repeat(5))

// - substring, substr, slice examples
console.log(message.substring(0,3))

console.log(message.substr(0,3))

console.log(message.slice(0,3))
// 🚀 Stretch Goals
// - Even number check using %
// - localeCompare() example
