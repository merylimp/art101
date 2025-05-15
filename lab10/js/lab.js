/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: Meryl Cabiong
   Date: May 5, 2025
*/


function generateRandomText() {
    const text = "live life, breathe air, i know somehow we're gonna get there and feel so wonderfulllll, it's all for realll, i'm tellin yah just how i feel !!!! :)"
    const min = 7;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    const randStart = Math.floor(Math.random() * (text.length - randLen +1));
    return text.slice(randStart, randStart + randLen);
}

$("#make-convo").click(function(){
    const newText = generateRandomText();
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});