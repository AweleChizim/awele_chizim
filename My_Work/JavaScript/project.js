alert('Welcome User');

var username = prompt("Please enter your name:");
var favColor = prompt("What is your favourite colour?");

document.write("Hello " + username + ". Your favourite color is " + favColor);

var inputNum = prompt("Enetr a number greater than 1:");
var randNum = Math.floor(Math.random() * inputNum);

document.write("The number is" + randNum);
console.log('Program Complete');