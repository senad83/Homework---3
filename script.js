// Assignment Code
var generateBtn = document.querySelector("#generate");
var howLongPasword = prompt("How long pasword?")
var youWantLowerCaseLetters = confirm("Lower case letters?")


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
