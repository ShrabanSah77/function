// Shraban is very busy person. He is a student of
// broadway. He is currently studying MERN full stack
// developer

const truncate = (sentence) => sentence.substring(0, 20).concat("...");

console.log(
  truncate(
    "Shraban is very busy person. He is a student of broadway. He is currently studying MERN full stack developer"
  )
);

const truncate1 = (sentence) => sentence.substring(0, 30).concat("...");
console.log(
  truncate1(
    "Shraban kumar sah is very lazy person. He is unable to manage time for himself as well as for other. He is always busy in watching videos"
  )
);
