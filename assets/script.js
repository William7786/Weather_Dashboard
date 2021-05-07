var cityList =$("#city-list");
var cities = [];
var key = "c9d4fc2e822514ab1be527c50cbfeeb2";

 
  $( ".button" ).click(function() { 
    Weather()
  });
  $("card .stored").val(localStorage.getItem("day"));

  
  function FormatDay(date){
    var date = new Date();
    console.log(date);
    var month = date.getMonth()+1;
    var day = date.getDate();
    
    var dayOutput = date.getFullYear() + '/' +
        (month<10 ? '0' : '') + month + '/' +
        (day<10 ? '0' : '') + day;
    return dayOutput;
}
stored()
function stored(){
var storedCity = JSON.parse(localStorage.getItem("cities"))
if (storedCity !== null){
cities = storedCity;
}
  }

function saveCity(){
localStorage.setItem("cities", JSON.stringify(cities))
console.log(savedCity);


}


function Weather(cityName) {
    console.log("This is logging")
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +cityName+ "&appid=" + key;
    $("#today-weather").empty();
    $.ajax({
      url: queryURL,
      method: "GET",
      
    }) 
    console.log("logged")
     };