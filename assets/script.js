var cityL =$("#cityL");
var city1 = [];
var api = "https://api.openweathermap.org/data/2.5/weather?q=";
var key = "&appid=c9d4fc2e822514ab1be527c50cbfeeb2";


 
 $("#btn").on("click", function (e) {
 e.preventDefault();
  var city = $("#input").val();
  city1.push(city)
  fetch(api+input.value+key)
    .then(response => response.json())
    .then(data => {
        console.log(data)})
  stored()
  saveCity()
   city.innerHTML = `${cityL}`
  temp.innerHTML = `${temp}`
  wind.innerHTML = `${wind}`
  humid.innerHTML = `${humid}`
  date.innerHTML = `${date}`
 });
 

 
  
  
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
var storedCity = JSON.parse(localStorage.getItem("city1"))
if (storedCity !== null){
city1 = storedCity;
}
Cities();

}

function saveCity(){
localStorage.setItem("city1", JSON.stringify(city1));
console.log(localStorage);
}

function Cities(){
cityL.empty();
for (var i = 0; i < city1.length; i++) {
  var C = city1[i];
  var l = $("<li>").text(C);
  l.attr("data-city", C);
  l.attr("id", "list");
  l.attr("class", "list-group-item")
  console.log(l)
  console.log(C)
  cityL.prepend(l)
}}

function Weather(city) {

    var queryURL = api+city+ "&appid=" + key;
    $("#tweather").empty();
    $.ajax({
      url: queryURL,
      method: "GET", 
    }).then(function(response){
      cityTitle = $("<h3>").text(response.name + " "+ FormatDay());
      $("#dayW").append(cityTitle);
      var temp = parseInt((response.main.temp))
      var cityTemp = $("<p>").text("Tempeture: " + temp + "°F"); $("#dayW").append(cityTemp);
      var cityH = $("<p>").text("Humidity: " + response.main.humidity + "%"); $("#dayW").append(cityH);
      console.log(response + "logged")


    // $("card .stored").val(localStorage.getItem("day"));
    // var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q="
    // $.ajax({
    //   url: queryURL2,
    //   method: "GET"
    // }).then(function(response){
    // console.log("logged")
      
    // })

    });
 }
