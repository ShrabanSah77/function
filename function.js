console.log("Welcome to the function class.");

function hi(user) {
  const hello = `Hi, ${user}`;
  return hello;
}
const result = hi("shraban kumar sah");
const result1 = "shraban1";
console.log({ result, result1 });

// same program in ES6

const hello = (name) => {
  return `hi, ${name}`;
};

const output = hi("shraban kumar sah");
const output1 = "shraban1";
console.log({ result, result1 });

// Example

// Write a js funciotn to multiply 3 numbers, Ask user for numbers using prompt

const mul = (num1, num2, num3) => {
  return num1 * num2 * num3;
};
const num1 = Number(prompt("enter first number"));
const num2 = Number(prompt("enter second number"));
const num3 = Number(prompt("enter third number"));

const multiplication = mul(num1, num2, num3);
console.log(mul(num1, num2, num3));

