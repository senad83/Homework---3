

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector('#password');

var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseLetters = ["A","B","C","D","E","F","G","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!","@","#","$","%","^","&","*","()"];


function getPasswordOptions() {
    var passwordArr = [];
  var howLongPassword = prompt("How long pasword?");
  console.log(howLongPassword);
  if (howLongPassword < 8){
    return; 
  }
    else if (howLongPassword > 128) {
      return;
    }

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
    optionsArray = optionsArray.concat(lowerCaseLetters)
  }
  if (youWantUpperCaseLetters) {
    optionsArray = optionsArray.concat(upperCaseLetters)
  }
  if (youWantSpecialCharacters) {
    optionsArray = optionsArray.concat(specialCharacters)
  }
  if (youWantNumericCharacters) {
    optionsArray = optionsArray.concat(numbers)
  }
  console.log(optionsArray)

var password = ""

  for (var i = 0; i < howLongPassword; i++) {
      var randomSelection = optionsArray[Math.floor(Math.random() * optionsArray.length)]
  password += randomSelection;
  }
  console.log(password);
  passwordText.value = password;
}
generateBtn.addEventListener("click", getPasswordOptions);

