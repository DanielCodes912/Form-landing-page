var firstName = prompt("Hello\n what is your first name?:");
var lastName = prompt("Last name?:");
var age = prompt("How old are you?:");
var height = prompt("What is your height in centimeters?:");
alert("Thank you for the information")

// nullify all conds
var nameCond = null
var ageCond = null
var heightCond = null

// control flow and boolean would be used
// Name conditions
if (firstName[0] === lastName[1]) {
  nameCond = true;
}  else {
    nameCond = false;
  }

//ageCond
if (age > 15 && age <= 20) {
  ageCond = true;
}else {
  ageCond = false;
}

//heightCond
if (height > 160 && height <= 172) {
  heightCond = true;
}else {
  heightCond = false;
}

//Checking all conditions

if (nameCond && ageCond && heightCond) {
  console.log("Merry Christmas and Happy New Year in Advance")
}else {
  console.log("")
}
