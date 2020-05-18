

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector('#password');

var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseLetters = ["A","B","C","D","E","F","G","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!","@","#","$","%","^","&","*","()"];


function getPasswordOptions() {
    var passwordArr = [];
  var howLongPassword = prompt("How long pasword?");

  if (howLongPassword < 8){
    alert ("Password is too short!")
    return; 
  }
    else if (howLongPassword > 128) {
      alert ("Password is too long")
      return;
    }

  var youWantLowerCaseLetters = confirm("Lower case letters?");
  
  var youWantUpperCaseLetters = confirm("Upper case letters");
  
  var youWantSpecialCharacters = confirm("Special characters");
  
  var youWantNumericCharacters = confirm("Numeric characters");
  

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
  

var password = ""

  for (var i = 0; i < howLongPassword; i++) {
      var randomSelection = optionsArray[Math.floor(Math.random() * optionsArray.length)]
  password += randomSelection;
  }

  passwordText.value = password;
}
generateBtn.addEventListener("click", getPasswordOptions);

