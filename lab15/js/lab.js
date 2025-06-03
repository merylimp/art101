/*
   lab.js - use AJAX for APIs

   Requirements: API must work

   Author: Meryl Cabiong
   Date: June 2, 2025
*/


$("#activate").click(function() {
  $.ajax({
    url: "https://dog.ceo/api/breeds/image/random",
    data: {},
    type: "GET",
    dataType: "json",
    success: function (data) {
      console.log(data);
      $("#output").html(
        '<img src="' + data.message + '" alt="Dog Image" width="300">'
      );
    },
    error: function (jqXR, textStatus, errorThrown) {
      console.log("Error:", textStatus, errorThrown);
      $("#output").html("<p>Failed to load dog image.</p>");
    },
  });
});