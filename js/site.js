//Get the strings from the page
//Controller function
function getvalues() {
    
    document.getElementById("alert").classList.add("invisible");
    
    let userstring = document.getElementById("userstring").value;
    
    let revstring = reversestring(userstring);
    
    displaystring(reverseString);

}

//Reverse the string
//Logic function
function reversestring(userstring) {
    
    let revstring = [];
    
    //reverse a string using a for loop
    for (let index = userstring.length - 1 ; index >= 0; index--) {
        revstring += userstring[index];
        
    }

    return revstring
        
    
}

//Display the reversed string to the user
//View Function 
function displaystring(params) {
    
    //write to the page 
    document.getElementById("msg").innerHTML = `your string reversed is:` ${revstring};
    //show the alert box
    document.getElementById("alert").classList.remove("invisible")
}