var cityName = document.getElementById("userInputCity");
var searchButton = document.getElementById("searchButton");
var previousCities = document.getElementById("previousCities");

var userCity = document.getElementById("userCity");
var weatherIcon0 = document.getElementById("weatherIcon0");
var temp0 = document.getElementById("temp0");
var wind0 = document.getElementById("wind0");
var humidity0 = document.getElementById("humidity0");
var uv0 = document.getElementById("uv0");

          console.log("set variables:", "Yes");

var formSubmitHandler = function (event) {
    event.preventDefault();

    var userInputCity = cityName.value.trim();
          console.log("userInputCity 18:", userInputCity);
    if (userInputCity) {
      console.log("if userInputCity", userInputCity);
      getCityNameWeather(userInputCity);
          console.log("if getCityNameWeather:", userInputCity);
      cityName.value = '';
    } else {
      alert('Please enter a City name');
    }
  };

var getCityNameWeather = function (city) {
  
  var apiCityUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + 'db0bba3ceabf7ca8a120908817237044';
                    console.log("apiCityUrl: ", apiCityUrl);
    fetch(apiCityUrl)
                    // console.log("fetch apiCityUrl:", apiCityUrl)
    .then(function (response) {
      if (response.ok) {
                    console.log("fetch if response:", response)
        response.json().then(function (data) {
                    console.log("fetch response json data:", data)
        displayUserCityWeather (data, city);
        });
      } else {
        alert('Error: ' + response.statusText);
    }
    })
    .catch(function (error) {
    alert('Unable to connect to Weather API');
    });
};

var displayUserCityWeather = function (userCityWeather, userInputCity) {
    if (userCityWeather.length === 0) {
        userCityWeatherContainerEl.textContent = 'No weather data found.';
      // Without a `return` statement, the rest of this function will continue to run and perhaps throw an error if `repos` is empty
      return;
    }
  
    userCity.textContent = userInputCity;
    weatherIcon0.setAttribute("src",`https://openweathermap.org/img/w/${userCityWeather.weather[0].icon}.png`);
    temp0.textContent = userCityWeather.main.temp;
    wind0.textContent = userCityWeather.wind.speed;
    humidity0.textContent = userCityWeather.main.humidity;
    //uv.textContent = userCityWeather.; look at 14 day api

    for (let i = 0; i < userCityWeather.length; i++) {
      //const element = UserCityWeather[i];

      userCity.textContent = userCityWeather[i].name;
      console.log("userCity", userCity.textContent);
      
    }
  };

document.getElementById("searchButton").addEventListener("click", formSubmitHandler);