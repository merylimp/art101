/*
   lab.js - create a Fizzbuzz loop

   Requirements: Fizzbuzz loop must work  

   Author: Meryl Cabiong
   Date: May 26, 2025
*/

// Script
for (i = 1; i <= 200; i++) {
    let str = "";
    
    if (i % 105 === 0) {
      str += "FizzBuzzBoom";
      $("#output").append("<p>" + str + "</p>");
    } else if (i % 35 === 0) {
      str += "BuzzBoom";
      $("#output").append("<p>" + str + "</p>");
    } else if (i % 21 === 0) {
      str += "FizzBoom";
      $("#output").append("<p>" + str + "</p>");
    } else if (i % 15 === 0) {
      str += "FizzBuzz";
      $("#output").append("<p>" + str + "</p>");
    } else if (i % 3 === 0) {
      str += "Fizz";
      $("#output").append("<p>" + str + "</p>");
    } else if (i % 5 === 0) {
      str += "Buzz";
      $("#output").append("<p>" + str + "</p>");
    } else if (i % 7 === 0) {
      str += "Boom";
      $("#output").append("<p>" + str + "</p>");
    } else {
      console.log(i);  
      str +=i
      $("#output").append("<p>" + str + "</p>");
    }
      





}
