/* 
 Lab 003 – Data Types in JavaScript (Boolean, Undefined, Null & Immutability)
*/

// TODO 1: Booleans
// - Create isStudent = true, hasLicense = false
let isStudent = true;
console.log(isStudent)

let hasLicense = false;
console.log(hasLicense)
// - Print results of true || false, true && false, !true
true || false
console.log(true || false)

true && false
console.log(true && false)

!true
console.log(!true)
// TODO 2: Short-circuit evaluation
// - Print result of false && (5 > 2)
false && (5 > 2)
console.log(false && (5 > 2))
// - Print result of true || (2 > 5)
true || (2 > 5)
console.log(true || (2 > 5))
// TODO 3: Undefined
// - Declare variable grade and print it
let grade;
console.log(grade)
// TODO 4: Null
// - Create city = null, print it
let city = null;
console.log(city)

// - Reassign city = "Miami" and print again

city = "miami"
console.log(city)
// TODO 5: Immutability
// - Create word = "hello"
let word = "hello";
console.log(word)
// - Try word[0] = "H", print word
word[0] = "H"
console.log(word)
// - Reassign word = "Hello" and print again
word = "hello"
console.log(word)
// 🚀 Stretch Goals
// - Check if number is between 10 and 20 using &&
// - Check if city is "Miami" or "Berlin" using ||
