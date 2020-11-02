// Array List ]
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialChar = "@#$%^&*!?";
var passwordLength = [];
var userSelection = [];

// Write password to the #password input
function generatePassword() {

  var length = prompt("Choose between 8-128 characters for your password");
  if (length < 8 || length > 128) {
    alert("please follow the instructions");
    return;
  }
  console.log(length);

  var up = confirm("Would you like upper case letters in your password");
  if (up) //Then push upperCase into charactersToUse 
  {
    userSelection.push(...upperCase)
  }

  console.log(userSelection);

  var lo = confirm("Would you like lower case letters in your password?");
  if (lo)//Then push lowerCase into charactersToUse
  {
    userSelection.push(...lowerCase)
  }

  console.log(userSelection);


  var nu = confirm("Would you like numbers in your password?");
  if (nu) {
    userSelection.push(...numbers)
  }

  console.log(userSelection);

  var sp = confirm("Would you like special characters in your password?");
  if (sp) {
    userSelection.push(...specialChar)
  }
  console.log(userSelection);

  for (var i = 0; i < length; i++) {
    console.log(length[i]);

    passwordLength.push(userSelection[Math.floor(Math.random() * userSelection.length)]);

    console.log(passwordLength.join("+"));
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = passwordLength.join("");

}

let generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);






