/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Meryl Cabiong
   Date: May 11 2025
*/

// add button to challenge section
$("#Challenge").append("<button id='button-challenge'>Make Special</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#Challenge").toggle("Challenge");
});



// add button to problems section
$("#Problems").append("<button id='button-problems'>Make Special</button>");

// add a click listener to the problems button
$("#button-problems").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#Problems").toggle("Problems");
});



// add button to results section
$("#Results").append("<button id='button-results'>Make Special</button>");

// add a click listener to the results button
$("#button-results").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#Results").toggle("Results");
});