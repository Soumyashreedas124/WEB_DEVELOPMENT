// String

let firstName = "Soumya";
let lastName = "Das";

// concatenate
console.log(firstName + " " + lastName);

// backticks ``
console.log(`Hey my name is ${firstName} ${lastName}`);

// string methods :

// length check :

console.log(firstName.length);
let nameLength = firstName.length;
console.log(typeof nameLength);

// Uppercase
console.log(firstName.toUpperCase()); // SOUMYA

// Lowercase
console.log(firstName.toLowerCase()); //soumya

// char At
console.log(firstName.charAt(0)); // s

// slice
console.log(firstName.slice(1, 4));

// split
console.log(firstName.split("")); // it returns an array

//todo Task: 1
// Use all the string methods to demonstrate all the properties with examples.

// Example:
// let sentence = "He is a good boy"; // 16 char

// console.log(sentence.includes("is"));

//todo Task: 2
// Declare a sentence and include your name in that and check wheather your name is present or not using `include` method.

// Example:
// let sentence = Lorem ipsum dolor sit amet pramod consectetur adipisicing elit. Perferendis, nihil.

// includes method:

let sentence =
  "loremk; j;kkslkhxiugoxh ljsszxfcgvhbjknkl' ;klzxfcgvhbjk soumya";
console.log(sentence.includes("soumya"));  // true
