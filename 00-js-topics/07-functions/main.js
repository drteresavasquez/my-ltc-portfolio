const numOne = 10;
const numTwo = 10;
const color = 'blue';

// greaterThan
function greaterThan() {
  if (numTwo >= numOne) {
    console.log('Number is greater');
  }
}

// eitherTrue
function eitherTrue() {
  if (numTwo === numOne || color === 'red') {
    console.log('At least one is true');
  }
}

// bothTrue
function bothTrue() {
  if (numTwo === numOne && color === 'blue') {
    console.log('Both are true');
  } else {
    console.log('One or Neither are true');
  }
}

// Currently these conditional statments run as soon as the JS loads, but we want to control when that happens.

// Create 3 functions. Wrap them around the logical statements above:
// 1. greaterThan
// 2. eitherTrue
// 3. bothTrue

// run them in the following order:
// 1. eitherTrue
eitherTrue();
// 2. greaterThan
greaterThan();
// 3. bothTrue
bothTrue();
