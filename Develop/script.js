// Array List 
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var specialChar = ['@','#','$','%','^','&','*','!','?'];
var userPassw = [];
var userSelection = [];




let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var length = prompt("Choose between 8-128 characters for your password");
  if (length < 8 || length > 128) {
    alert("please follow the instructions");
    return;
  }
  console.log(length);

   var up = confirm("would you like upper case in your password");
  if (up) {
    userSelection.push(...upperCase);
  }
  console.log(userSelection);

  var lo = confirm("would you like lower case in your password?");
  if (up) {
    userSelection.push(...lowerCase);

  }
  console.log(lowerCase);


  var nu = confirm("would you like numbers in your password?");
  if (up) {
    userSelection.push(...numbers);

  }

  console.log(numbers);

  var sp = confirm("would you like special characters in your password?");
  if (up) {
    userSelection.push(...specialChar);

  }

  console.log(specialChar);




  
  //var passwordText = document.querySelector("#password");








  
  //passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
