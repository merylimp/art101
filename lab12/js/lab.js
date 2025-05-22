/*
   lab.js - creating a function dependent on conditionals

   Requirements: functions must be functional lol 

   Author: Meryl Cabiong
   Date: May 20, 2025
*/


// given a number, return a 1d member

// Function to get member description
function get1D(num) {
    let remainder = num % 5;
    let str = "";

    if (remainder == 0) {
        str = "<span class='harry'>Harry Styles: charming 🕺, fashionable 👗, will always treat you with kindness 💐, and has baking experience because he used to be a baker asf 🧁!! how EXTRODINHARRY🍀</span>";
    } else if (remainder == 1) {
        str = "<span class='louis'>Louis Tomlinson: funny 😂, witty 😏, and a family man 👨‍👩‍👧. He's your go-to when looking for banter 🎤 and exciting times  yodeliooioioioo SOOO FABULOUIS FOR UUU  🎢!!</span>";
    } else if (remainder == 2) {
        str = "<span class='zayn'>Zayn Malik:  will drive uuu inzaynnn hehehe ;) he has the most angelic of voices 🎶, patient and calm 🧘‍♂️. Will always put you first 💘. An AMAZAYN man, that's for sure 💑!!</span>";
    } else if (remainder == 3) {
        str = "<span class='niall'>Niall Horan: the sweetest 💛, he's dependable 🛠, outdoorsy 🌳, and can serenade you anytime, he is PHENOMENIALL 🎸. Oooh yeahhhh maybe you'll find yourself in this new town with him teehee🌈</span>";
    } else if (remainder == 4) {
        str = "<span class='liam'>Liam Payne: aww dang, gone too soon 🕊. He will watch over you wherever he is 🌌. #RIP BRILLIAM liam.  😔 </span>";
    }

    return str;
}

// click function 
$("#button").click(function () {
    let name = $("#input").val();
    let nameLength = name.length;
    let member = get1D(nameLength);

    // Get image path based on remainder thank u to ChatGPT !!!!!!!!!!!!
    let remainder = nameLength % 5;
    let imagePath = "";

    switch (remainder) {
        case 0:
            imagePath = "img/harry.webp";
            break;
        case 1:
            imagePath = "img/louis.jpg";
            break;
        case 2:
            imagePath = "img/zayn.webp";
            break;
        case 3:
            imagePath = "img/niall.webp";
            break;
        case 4:
            imagePath = "img/liam.webp";
            break;
    }

    // Output both member text and image
    $("#output").html(`
        <h1>${member}</h1>
        <img id="member-image" src="${imagePath}" alt="1D Member" style="max-width:300px; margin-top:10px;">
    `);
});
