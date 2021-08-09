const numbers = [1, 2, 3, 4, 5, 6];

const greaterThanZero = (el) => el > 0;
const greaterThanFive = (el) => el > 5;
const even = (el) => el % 2 === 0;

console.log(numbers.filter((el) => el > 0));
console.log(numbers.filter(greaterThanZero));
console.log(numbers.filter(greaterThanFive));

const students = [
  { name: "Jake", score: 6.4 },
  { name: "Susan", score: 8.6 },
  { name: "Emma", score: 9.4 },
  { name: "Peter", score: 9.1 },
];
