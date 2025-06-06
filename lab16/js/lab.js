/*
   lab.js - use JSON for APIs

   Requirements: program must work!!! 

   Author: Meryl Cabiong
   Date: June 5, 2025
*/


const ajaxObj = {
  url: "https://corsproxy.io/?https://xkcd.com/info.0.json",
  data:{},
  type: "GET",
  dataType: "json"
};

$("button").click(function () {
  $.ajax(ajaxObj)
    .done(function (data) {
      console.log(data);

      let title = data.title;
      let num = data.num; 
      let desc = data.transcript;
      let imgUrl = data.img; 

      $("#output").html(`<h2>${title}</h2>`);
      $("#output").append(`<img src="${imgUrl}" alt="${data.alt}" title="${data.alt}">`);
      $("#output").append(`<p class='date'>Comic: ${num}</p>`);
      $("#output").append(`<p class='desc'>${desc}</p>`);
    })
    .fail(function (xhr, status, error) {
      console.log("Error:", error);
    });
});