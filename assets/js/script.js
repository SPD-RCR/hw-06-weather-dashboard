var userInputCity = document.getElementById("userInputCity");
var searchButton = document.getElementById("searchButton");
var previousCities = document.getElementById("previousCities");

var userCity = document.getElementById("userCity");
var weatherIcon0 = document.getElementById("weatherIcon0");
var temp0 = document.getElementById("temp0");
var wind0 = document.getElementById("wind0");
var humidity0 = document.getElementById("humidity0");
var uv0 = document.getElementById("uv0");

var formSubmitHandler = function (event) {
    event.preventDefault();

    var cityName = userInputCity.value.trim();
          console.log("cityName 16:", cityName);
    if (cityName) {
      getCityNameWeather(cityName);
          console.log("if getCityNameWeather:", cityName);
      userInputCity.value = '';
    } else {
      alert('Please enter a City name');
    }
  };

var getCityNameWeather = function (cityName) {
  // Current Weather API
  var apiCityUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + 'db0bba3ceabf7ca8a120908817237044';
                    console.log("apiCityUrl: ", apiCityUrl);
    fetch(apiCityUrl)
    .then(function (response) {
      if (response.ok) {
                    console.log("fetch apiCityUrl if response:", response)
        response.json().then(function (data) {
                    console.log("fetch apiCityUrl response json data:", data)
        // displayUserCityWeather (data, cityName);
        getCityLatLonWeather (data, cityName);
        });
      } else {
        alert('Error: ' + response.statusText);
    }
    })
    .catch(function (error) {
    alert('Unable to connect to Weather API');
    });
};

// var displayUserCityWeather = function (userCityWeather, cityName) {
//     if (userCityWeather.length === 0) {
//         userCityWeatherContainerEl.textContent = 'No weather data found.';
//       // Without a `return` statement, the rest of this function will continue to run and perhaps throw an error if `repos` is empty
//       return;
//     }
  
//     // var city = cityName;
//     // console.log('cityName8:', city);
//     // var lat = userCityWeather.coord.lat;
//     // console.log("var LAT:", lat);
//     // var lon = userCityWeather.coord.lon;
//     // console.log("var LON:", lon);
//     // var cityLonLat = userCityWeather.coord;
//     // console.log('var cityLONLAT:', cityLonLat)

//     getCityLatLonWeather (userCityWeather, cityName);
//   };

  var getCityLatLonWeather = function(userCityWeather, cityName) {
    var lat = userCityWeather.coord.lat;
    console.log('lat:', lat)
    var lon = userCityWeather.coord.lon;
    console.log('lon:', lon)
    // One Call API
    var apiCityLatLonUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=' + 'db0bba3ceabf7ca8a120908817237044';
      console.log("apiCityLatLonUrl: ", apiCityLatLonUrl);
      console.log("cityName72: ", cityName);

      fetch(apiCityLatLonUrl)
      .then(function (response) {
        if (response.ok) {
                      console.log("fetch if response:", response)
          response.json().then(function (data) {
                      console.log("fetch response json data:", data)
                      console.log("cityName82:", cityName)
          displayUserCityLatLonWeather (data, cityName);
          });
        } else {
          alert('Error: ' + response.statusText);
      }
      })
      .catch(function (error) {
      alert('Unable to connect to Weather API');
      });
  };

  var displayUserCityLatLonWeather = function (userCityLatLonWeather, cityName) {
    if (userCityLatLonWeather.length === 0) {
        userCity.textContent = 'No weather data found.';
      // Without a `return` statement, the rest of this function will continue to run and perhaps throw an error if `repos` is empty
      return;
    }
  
    userCity.textContent = cityName;
    weatherIcon0.setAttribute("src",`https://openweathermap.org/img/w/${userCityLatLonWeather.current.weather[0].icon}.png`);
    temp0.textContent = userCityLatLonWeather.current.temp;
    wind0.textContent = userCityLatLonWeather.current.wind_speed;
    humidity0.textContent = userCityLatLonWeather.current.humidity;
    uv0.textContent = userCityLatLonWeather.current.uvi; 

    for (let i = 0; i < userCityLatLonWeather.length; i++) {
      //const element = UserCityWeather[i];

      // userCity.textContent = userCityLatLonWeather[i].name;
      // console.log("userCity", userCity.textContent);

      temp.textContent = userCityLatLonWeather[i].temp;
      console.log("TEST:", "TEST")
    }
  };

document.getElementById("searchButton").addEventListener("click", formSubmitHandler);