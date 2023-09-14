const numOne = 10;
const numTwo = 10;
const color = 'blue';

// 1. check if numTwo is greater than or equal to numOne. If so, console log "Number is greater"
if (numTwo >= numOne) {
  console.log('Number is greater');
}

// 2. check if numOne is equal to numTwo OR color is equal to red
// if either of these are true, console log "At least one is true"

if (numOne === numTwo || color === 'blue') {
  console.log('At least one is true');
}

// 3. check if numOne is equal to numTwo AND color is equal to blue
// if BOTH of these are true, console log "Both are true". If both are not true, create a default that console logs "One or Neither are true".

if (numOne === numTwo && color === 'blue') {
  console.log('Both are true');
} else {
  console.log('One or Neither are true');
}
