

var generateBtn = document.querySelector("#generate");


var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseLetters = ["A","B","C","D","E","F","G","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!","@","#","$","%","^","&","*","()"];


function getPasswordOptions() {
    var passwordArr = [];
  var howLongPassword = prompt("How long pasword?");
  console.log(howLongPassword);
  var youWantLowerCaseLetters = confirm("Lower case letters?");
  console.log(youWantLowerCaseLetters);
  var youWantUpperCaseLetters = confirm("Upper case letters");
  console.log(youWantUpperCaseLetters);
  var youWantSpecialCharacters = confirm("Special characters");
  console.log(youWantSpecialCharacters);
  var youWantNumericCharacters = confirm("Numeric characters");
  console.log(youWantNumericCharacters);

  var optionsArray = [];
  // conditionals to determine
if (youWantLowerCaseLetters) {
  optionsArray.push(lowerCaseLetters)
}
if (youWantUpperCaseLetters) {
  optionsArray.push(upperCaseLetters)
}
if (youWantSpecialCharacters) {
  optionsArray.push(specialCharacters)
}
if (youWantNumericCharacters) {
  optionsArray.push(numbers)
}
console.log(optionsArray)

for (var i = 0; i < howLongPassword; i++) {
    var randomSelection = optionsArray[Math.floor(Math.random() * optionsArray.length)]

}
generateBtn.addEventListener("click", writePassword);