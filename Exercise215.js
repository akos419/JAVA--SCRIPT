const input = require("prompt-sync")();

let num1 = Number(input("Enter an integer: "));
let num2 = Number(input("Enter an integer: "));

let square1 = num1 * num1;
let square2 = num2 * num2;

let sumOfSquare = square1 + square2;
let differenceOfSquare = square1 - square2;

console.log("The square of the first number is " + square1);
console.log("The square of the second number is " + square2);
console.log("The sum of the squares is " + sumOfSquare);
console.log("The difference of the squares is " + differenceOfSquare);


