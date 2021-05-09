var cityL =$("#cityL");
var city = [];
var key = "c9d4fc2e822514ab1be527c50cbfeeb2";

 
 $("#btn").on("click", function (e) {
  var city1 = $("#input").val()
  city.push(city1)
  stored()
  FormatDay()
  saveCity()

   
 })
  
  
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
var storedCity = JSON.parse(localStorage.getItem("city"))
if (storedCity !== null){
city = storedCity;
}
Cities();
}

function saveCity(){
localStorage.setItem("city", JSON.stringify(city))
console.log("savedCity");
}

function Cities(){
cityL.empty();
for (var i = 0; i < city.length; i++) {
  var C = city[i];
  var l = $("<li>").text(C);
  l.attr("data", C);
  l.attr("id", "list");
  console.log(l)
  console.log(C)
  cityL.prepend(l)
}}

function Weather(city) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +city+ "&appid=" + key;
    $("#tweather").empty();
    $.ajax({
      url: queryURL,
      method: "GET", 
    }).then(function(response){
      cityTitle = $("<h3>").text(response.name + " "+ FormatDay());
      $("#dayW").append(cityTitle);
      var Temp = parseInt((response.main.temp)* 9/5 -459)
      var cityTemp = $("<p>").text("Tempeture: " + Temp + "°F"); $("#dayW").append(cityTemp);
      var cityH = $("<p>").text("Humidity: " + response.main.humidity + "%"); $("#dayW").append(cityH);
      console.log(response)


    $("card .stored").val(localStorage.getItem("day"));
    // var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + key;
    // $.ajax({
    //   url: queryURL2,
    //   method: "GET"
    // }).then(function(response){
    // console.log("logged")
      
    // })

    });

    
    //
    
     }
     