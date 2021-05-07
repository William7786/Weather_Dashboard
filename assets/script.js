$( ".button" ).click(function() {
    Weather()
  });

  function Weather() {
    console.log("This is logging")
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="; 
    }