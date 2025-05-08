// index.js - Lab 8: Anon Functions and Callbacks
// Author: Meryl Cabiong
// Date: May 8, 2025


function multiplyFour (x) {
    return (x * 4);
}

// test function
console.log("4 x 4 =", multiplyFour(4));
console.log("4 x 5 = ", multiplyFour(5));


array = [2, 4, 6, 8, 10]
console.log("My array", array);

var result = array.map(multiplyFour);

var result = array.map(function(x){
    return (x + 2);
})

var mapResults = array.map(multiplyFour);
// should return [4, 6, 8, 10, 12]
console.log("Results: ", mapResults);

