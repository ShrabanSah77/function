// write implicit function to find prime number

const checkPrime = (num) => {
  if (num <= 1) {
    return "false";
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return "false";
    }
  }
  return "true";
};

console.log(checkPrime(2));