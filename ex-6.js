// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here

for (let i = 1; i <= companyName.length; i++) {
  reversedCompanyName += companyName.charAt(companyName.length - i);
}
console.log(reversedCompanyName);
