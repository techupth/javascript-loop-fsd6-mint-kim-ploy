// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
for (let letter of companyName) {
  reversedCompanyName = letter + reversedCompanyName; //เพิ่มตัวอักษร string เก็บใน "" ทีละตัว เช่น 1."T" + "" => "T" 2."e" + "T" = "eT"
}

console.log(reversedCompanyName);
