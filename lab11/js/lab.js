/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version

   Requirements: jQuery must be loaded for this script to work.

   Author: Meryl Cabiong
   Date: May 15, 2025
*/

// sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    // convert string to an array and back again to sort it
    return inputString.split('').sort().join('');
}

// click listener for button
$("#submit").click(function(){
    const userName = $("#user-name").val();
    // sort now
    const userNameSorted = sortString(userName);
    // append new div to output div
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});


