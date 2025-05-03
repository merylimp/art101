// index.js - Lab 7: Functions
// Author: Meryl Cabiong
// Date: May 3, 2025



// sortUserName - a function that takes the user's input and sorts letters of their name
function sortUserName() {
    var userName = window.prompt("Hey, what's your name? It's my job to fix it!")
    console.log("userName =", userName);
    // split string to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    // sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    // join array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);

    return nameSorted;
}


// output
document.writeln("I fixed your name! you are very very welcome ",
    sortUserName(), "</br>");
