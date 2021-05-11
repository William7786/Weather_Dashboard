var cityL = $("#cityL");
var temp = $("#temp")
var city1 = [];
var api = "https://api.openweathermap.org/data/2.5/weather?q=";
var forecast = "https://api.openweathermap.org/data/2.5/forecast?q="
var key = "&appid=c9d4fc2e822514ab1be527c50cbfeeb2";
var units = "&units=imperial"



$("#btn").on("click", function (e) {
  e.preventDefault();

  var city = $("#input").val().trim();

  city1.push(city)
  stored()
  saveCity()
  //  city.innerHTML = `${cityL}`
  //   temp.innerHTML = `${temp}`
  //   wind.innerHTML = `${wind}`
  //   humid.innerHTML = `${humid}`
  //   date.innerHTML = `${date}`

  fetch(api + input.value + key)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })


});





function FormatDay(date) {
  var date = new Date();
  console.log(date);
  var month = date.getMonth() + 1;
  var day = date.getDate();

  var dayOutput = date.getFullYear() + '/' +
    (month < 10 ? '0' : '') + month + '/' +
    (day < 10 ? '0' : '') + day;
  return dayOutput;
}



stored()
function stored() {
  var storedCity = JSON.parse(localStorage.getItem("city1"))
  if (storedCity !== null) {
    city1 = storedCity;
  }
  Cities();

}

function saveCity() {
  localStorage.setItem("city1", JSON.stringify(city1));
  console.log(localStorage);
}

function Cities() {
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
  }
  if (!C) {
    return
  }
 

}

$('#btn').on('click', function Weather(){

  fetch(api + input.value + key)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    $('#card1').empty();
    for (let i = 1; i < 40; i += 8) {
      var city = document.createElement('div')
      var cityDate = document.createElement('p')
      var weatherI = document.createElement('img')
      var temp = document.createElement('p')
      var windmph = document.createElement('p')
      var humidity = document.createElement('p')

      city.classList.add('card1')

      city.append(cityDate, weatherI, temp, windmph, humidity)

      temp.textContent = 'Temperature in F: '
      windmph.textContent = 'Wind Speed: '
      humidity.textContent = 'Humidity: '
      cityDate


      var cityD = data.list[i].dt_txt
      cityDate.append(cityD)

      var tempD = data.list[i].main.temp
      temp.append(tempD)

      var windS = data.list[i].wind.speed
      windmph.append(windS)

      var humidD = data.list[i].main.humidity
      humidity.append(humidD)


      $("#card1").append(city)






  // $("#tweather").empty();
  // console.log("#tweather")
  // then(function (response) {
  //   cityTitle = $("<h3>").text(response.name + " " + FormatDay());
  //   $("#tweather").append(cityTitle);
  //   var temp = parseInt((response.main.temp))
  //   var cityTemp = $("<p>").text("Tempeture: " + temp + "°F");
  //   $("#tweather").append(cityTemp);
  //   var cityH = $("<p>").text("Humidity: " + response.main.humidity + "%");
  //   $("#tweather").append(cityH);
  //   console.log(response + "logged")
  //   $("card .stored").val(localStorage.getItem("day"));


  // })
}
})
});

$('#btn').on('click', function (ForecastL) {
  fetch(forecast + input.value + key)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      $('#card2').empty();
      for (let i = 4; i < 40; i += 8) {
        var cityC = document.createElement('div')
        var cityDate = document.createElement('p')
        var weatherI = document.createElement('img')
        var temp = document.createElement('p')
        var windmph = document.createElement('p')
        var humidity = document.createElement('p')

        cityC.classList.add('card')

        cityC.append(cityDate, weatherI, temp, windmph, humidity)

        temp.textContent = 'Temperature in F: '
        windmph.textContent = 'Wind Speed: '
        humidity.textContent = 'Humidity: '
        cityDate


        var cityD = data.list[i].dt_txt
        cityDate.append(cityD)

        var tempD = data.list[i].main.temp
        temp.append(tempD)

        var windS = data.list[i].wind.speed
        windmph.append(windS)

        var humidD = data.list[i].main.humidity
        humidity.append(humidD)


        $("#card2").append(cityC)





      }
    })
})
