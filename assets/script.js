

var cities = [];
var key = "c9d4fc2e822514ab1be527c50cbfeeb2"
 
  $( ".button" ).click(function() { 
    Weather()
  });
  $("card .stored").val(localStorage.getItem("day"));

  
  



  function Weather() {
    console.log("This is logging")
    var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"; 
    $("#today-weather").empty();
    $.ajax({
      url: queryURL,
      method: "GET",
      
    }) 
    console.log("logged")
    }