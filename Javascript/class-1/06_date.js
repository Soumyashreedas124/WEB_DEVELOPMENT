// Dates

let myDate = new Date();
console.log(myDate);

console.log(myDate.toDateString());
console.log(myDate.toTimeString());

// custom date

const myBday = new Date("2001-09-02");
console.log(
  `My birthdate is : ${myBday.getDate()}-${
    myBday.getMonth() + 1
  }-${myBday.getFullYear()}`
);
