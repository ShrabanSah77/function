// Question 3

// calculate interest of the given sum

const interest = (p,t,r) => {
    return (p*t*r)/100;
};

const p = prompt("Please enter principle");
const t = prompt("please enter time");
const r = prompt("please enter rate");

console.log(interest(p,t,r));