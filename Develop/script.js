// Array List 
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['@', '#', '$', '%', '^', '&', '*', '!', '?'];
var passwordLength = [];
var userSelection = [];
var characterToUse= [];






let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {



  var passwordLength = prompt("Choose between 8-128 characters for your password");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("please follow the instructions");
    return;
  }
  console.log(passwordLength);


  
  
 //DECLARE a new list of "charactersToUse"
 charactersToUse=[];

  var up = confirm("Would you like upper case letters in your password");
  if (up) //Then push upperCase into charactersToUse 
  {
    userSelection.push(...upperCase)}


  console.log(upperCase);


  var lo = confirm("Would you like lower case letters in your password?");
  if (lo)//Then push lowerCase into charactersToUse
   {

    userSelection.push(...lowerCase)
  }




  console.log(lowerCase);


  var nu = confirm("Would you like numbers in your password?");
  if (nu) {
    userSelection.push(...numbers)
  }

  console.log(numbers);

  var sp = confirm("Would you like special characters in your password?");
  if (sp)
{
  userSelection.push(...specialChar)
}
  console.log(specialChar);

}

//DECLARE new password strings
var password="";

//WHILE password.length<passwordLength
while( password.length< passwordLength){

  var randomCharacter=userSelection[Math.floor(Math.random())*userSelection.length];

  password+=randomCharacter


}
//function writePassword(){


//var password= generatePassword();
//var passwordText= document.querySelector("#password");

//passwordText.value = password;



















// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
