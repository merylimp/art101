// index.js - Lab 6: Arrays and Objects
// Author: Meryl Cabiong
// Date: April 24, 2025


// Define Variables
myTransport = ["Volkswagen Jetta", "bus", "walking"];


// create an object for my main ride 
myMainRide = {
    make : "Volkswagen", 
    model : "Jetta", 
    color : "Black",
    year : 2010, 
    age : function() {
        return 2025 - this.year;
    }
}



// output
document.writeln("Kinds of transportation I use: ", myTransport,"</br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");




















// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
