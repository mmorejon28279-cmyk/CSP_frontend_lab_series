// Your code goes here. Follow the steps in README.md and run from index.html.
console.log("TEST - TIER 4")

//login system 

let u = "admin";
let p = "1234";
let username;
let password;

while (u != username && password != p) {
  username = prompt("Enter username:");
  password = prompt("Enter password:");

  if (username === u && password === p) {
    alert("Welcome!");
    break;
  } else {
    alert("Invalid credentials. Try again.");
  }
}