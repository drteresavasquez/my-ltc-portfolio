// // TODO: Arithmetic CHALLENGE Test your arithmetic knowledge. Complete the problems below and check your console. All the answers should be true.

// // CHANGE THE 0's below
// //1. solve the following math with subtraction
const equal25 = 26 - 1 === 25;
// //2. Solve the following math with addition
const equal12 = 12 + 0 === 12;
// //3. Solve the following math problem with multplication:
const equal14 = 7 * 2 === 14;

const firstNum = 13;
const secondNum = 32;
// // 4. Create the string "The first number is {firstNum} and the second number is {secondNum}! If I add them they equal {firstNum + secondNum}."
const string = `The first number is ${firstNum} and the second number is ${secondNum}! If I add them they equal ${
  firstNum + secondNum
}.`;

// // THE TEST
console.log("Equals 25? ", equal25);
console.log("Equals 12? ", equal12);
console.log("Equals 14? ", equal14);
console.log(
  "Are the strings exactly the same? ",
  string ===
    "The first number is 13 and the second number is 32! If I add them they equal 45."
);
