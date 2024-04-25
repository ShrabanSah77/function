// write a js program to convert temperatures
// Celsius to Fahrenheit.

const n = prompt("please enter the value");
function celcToFahr(n) {
  return (n * 9) / 5 + 32;
}
console.log(celcToFahr(n));

// write a js program to convert temperatures
// Fahrenheit to Celsius.

const n1 = prompt("please enter the value");
function fahrToCelc(n1) {
  return ((n1 - 32) * 5) / 9;
}
console.log(fahrToCelc(n1));

// combined program

const getTemp = (temp, type = "c") => {
  if (type === "c") {
    return 1.8 * temp + 32;
  } else {
    return ((temp - 32) * 5) / 9;
  }
};
console.log(getTemp(32, "F"));
console.log(getTemp(100, "F"), "C");
