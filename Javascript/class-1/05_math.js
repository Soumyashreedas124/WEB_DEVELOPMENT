let num1 = 100;
let num2 = 200;
let num3 = num1 + num2;
console.log(-num3);
console.log(Math.abs(-num3));

console.log(Math.round(5.3));
console.log(Math.ceil(5.1)); // ceil value means upper value : 6
console.log(Math.floor(5.1)); // floor value means lower value : 5
console.log(Math.min(4, 2, 1, 8, 9)); // min value
console.log(Math.max(5, 100, 2, 8, 7)); // max value

// generate random number between 10 to 30
let min = 10;
let max = 30;
let random = Math.round(Math.random() * (max - min + 1) + min);
console.log(random); // random number 
