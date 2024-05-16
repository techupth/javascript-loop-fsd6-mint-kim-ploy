// Exercise #5: Concatenate the Alphabets
let companyName = "TechUp";
let letter;

//Start coding here
// for (let str of companyName) {
//   console.log("Number " + str() + " character is " + str);
// }

for (let i = 0; i < companyName.length; i++) {
  console.log("Number " + (i + 1) + " character is " + companyName.charAt(i));
}
