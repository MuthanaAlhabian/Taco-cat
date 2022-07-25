//get our user value
function getValue(){

    document.getElementById("alert").classList.add("invisible");
    //get user string for the page
    let userString = document.getElementById("userString").value;

    //check for a palidrome
    let returnObj = checkForPalindrome(userString);

    //display out message to the screen
    displayMessage(returnObj);
}

//check if string is a palidrome
function checkForPalindrome(userString){

    userString = userString.toLowerCase();

    //remove spaces and special characters
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex,"");

    let revString = [];
    let returnObj = {};

    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    }

    if(revString == userString){
        returnObj.msg = "Well Done! You entered a palindrome!"
    }
    else{
        returnObj.msg = "Sorry You did not enter a palindrome!"
    }

    returnObj.reversed = revString;

    return returnObj;
}

//display a messsage to the string
function displayMessage(returnObj){

    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");
}