// write a js function that reverse the string

const reverse = (word) => {
  let newString = "";
  for (let i = word.length - 1; i >= 0; i--) {
    newString += word[i];
  }
  return newString;
};
console.log(reverse("1234"));

// write a js function to check if the word is
// palindrom of not.
// Example: "mom", "dad"

const palindrom = (word) => {
  let newString = "";
  for (let i = word.length - 1; i >= 0; i--) {
    newString += word[i];
  }
  if (newString === word) {
    return true;
  } else {
    return false;
  }
};

console.log(palindrom("dad"));

// write a js function to find the largest word in
//the sentence
// Ex: "My name is Khansahab"

function getLongestWord(str) {
  let words = str.split("");
  let maxlength = 0;
  let getLongestWord = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxlength) {
      maxlength = words[i];
    }
  }
  console.log(max.length);
  console.log(longestWord);
}
