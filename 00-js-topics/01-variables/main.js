let variableName = "Value";
console.log("Line 2: ", variableName);

variableName = "New Value";
console.log("Line 5: ", variableName);

const newVariable = 123;
console.log("variable created with const: ", newVariable);

newVariable = 33;
console.log("Trying to reassign a const variable: ", newVariable);

console.log(
  "This does not print because the code is broken since we tried to reassign a const variable."
);
