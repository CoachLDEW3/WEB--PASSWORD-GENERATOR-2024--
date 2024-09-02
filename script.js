
//User input variables.
var confspec;
var confNum;
var conflow;
var conupp;
var userinput;
// Assignment Code
var generateBtn = document.querySelector("#generate");

//variable arrays for characters.
var abcdlow = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var abcdupp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var spec = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '_', '=', '{', '}', '~', '/'];

// //Turn the alfabet from lower case to uppercase
// var toUpper = function (upp){
//   return upp.toUpperCase();
// }

// //Save abcd in another variable.
// var confupp = abcd.map(toUpper);

function generatePassword() {//Begining of generatePassword().
  var userinput = prompt("Please choose between 8 and 128 characters for password: ");
  
  //Popbox for comparing what you enter as option for the length of your password
  if (!userinput) {
    alert("Enter a number.");
    return;
  } else if (userinput < 8 || userinput > 128){
    userinput = parseInt (prompt("Please choose a number between 8 and 128"));
    return;
    //Checking that you enter only numbers
  } else if (isNaN(userinput)){
    alert("It has to be a number");
    return;
  } else {
    //choosing password details
    confspec = confirm ("Do you want special characters?");
    confNum = confirm ("Do you want numbers?");
    confupp = confirm ("Do you want Upper-Case letters?");
    conflow = confirm ("Do you want lower-case letters?");
  }
  //Making sure that you chose a password detail.
  if (!confspec && !confNum && !confupp && !conflow) {
    alert("You must choose at least one option.");
    //choosing password details
    confspec = confirm ("Do you want special characters?");
    confNum = confirm ("Do you want numbers?");
    confupp = confirm ("Do you want Upper-Case letters?");
    conflow = confirm ("Do you want lower-case letters?");
  }
  //New array variable to store the password
  var pass = []
  //Concatenate the special characters in the variable pass
  if (confspec){
    pass=pass.concat(spec)
  }
  //Concatenate the numbers in the variable pass
  if (confNum){
    pass=pass.concat(num)
  }
  //Concatenate the upper-case letters in the variable pass
  if (confupp){
    pass=pass.concat(abcdupp)
  }
  //Concatenate the lower-case letters in the variable pass
  if (conflow){
    pass=pass.concat(abcdlow)
  }
  
  console.log(pass)

  var Pass2 = '';
      // add as many characters that you pick at the begining.
      for (var i = 0; i < userinput; i++) {
        Pass2 = Pass2 + pass[Math.floor(Math.random() * pass.length)];
        console.log(Pass2)
      }
      return  Pass2;//returning the value that is saved on Pass2.
}//End generatePassword function().

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
