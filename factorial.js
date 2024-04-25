// Question 2

// write a js function to solve the factorial of 5
// Recursive function
const num = 9;
function factorial(num) { // funciton call
    if (num ===0) {
        return num = 1;
    }
    const result = num -1;       // declear
    return num * factorial(result)
}
console.log(factorial(num));       // print
