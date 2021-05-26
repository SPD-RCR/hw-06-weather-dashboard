var userInputCity = document.getElementById("userInputCity");
var searchButton = document.getElementById("searchButton");
var previousCities = document.getElementById("previousCities");

var userCity = document.getElementById("userCity");
var date0 = document.getElementById("date0");
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
        
        getCityLatLonWeather (data, cityName); // data is needed to get the Latitude and Longitude coordinates for the city
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
    alert('Unable to connect to City Weather API');
    });
};

var getCityLatLonWeather = function(userCityWeather, cityName) {
  var lat = userCityWeather.coord.lat;
  console.log('lat:', lat)
  var lon = userCityWeather.coord.lon;
  console.log('lon:', lon)
  // One Call API requires Latitude and Longitude Coordinates
  var apiCityLatLonUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=' + 'db0bba3ceabf7ca8a120908817237044';
    console.log("apiCityLatLonUrl: ", apiCityLatLonUrl);
    console.log("cityName: ", cityName);

    fetch(apiCityLatLonUrl)
    .then(function (response) {
      if (response.ok) {
                    console.log("fetch if response:", response)
        response.json().then(function (data) {
                    console.log("fetch response json data:", data)
                    console.log("cityName:", cityName)
        displayUserCityLatLonWeather (data, cityName);
        });
      } else {
        alert('Error: ' + response.statusText);
    }
    })
    .catch(function (error) {
    alert('Unable to connect to One Call Weather API');
    });
};

var displayUserCityLatLonWeather = function (userCityLatLonWeather, cityName) {
  if (userCityLatLonWeather.length === 0) {
      userCity.textContent = 'No weather data found.';
    // Without a `return` statement, the rest of this function will continue to run and perhaps throw an error if `repos` is empty
    return;
  }

  userCity.textContent = cityName;

  console.log('userCityLatLonWeather.current.dt:', userCityLatLonWeather.current.dt)

  const unixTimestamp = userCityLatLonWeather.current.dt; //1575909015
  console.log('unixTimestamp:', unixTimestamp);
  const milliseconds = unixTimestamp * 1000 // 1575909015000
  const dateObject = new Date(milliseconds)
  const humanDateFormat = dateObject.toLocaleString() //2019-12-9 10:30:15
  console.log('humanDateFormat:', humanDateFormat)

  // date0.textContent = // Current date in seconds UNIX = ERROR = Need to convert to a date format as a String
  //date0.textContent = userCityLatLonWeather.daily[0].dt; value to String
  // date0.textContent = dateFormatted(userCityLatLonWeather.daily.dt); // Current date in seconds UNIX 
  // console.log('userCityLatLonWeather.daily[0].dt:', userCityLatLonWeather.daily[0].dt)
  weatherIcon0.setAttribute("src",`https://openweathermap.org/img/w/${userCityLatLonWeather.current.weather[0].icon}.png`);
  temp0.textContent = userCityLatLonWeather.current.temp;
  wind0.textContent = userCityLatLonWeather.current.wind_speed;
  humidity0.textContent = userCityLatLonWeather.current.humidity;
  uv0.textContent = userCityLatLonWeather.current.uvi; 

  for (let i = 1; i < userCityLatLonWeather.length; i++) {
    //const element = userCityLatLonWeather[i];

    // userCity.textContent = userCityLatLonWeather[i].name;
    // console.log("userCity", userCity.textContent);

    temp.textContent = userCityLatLonWeather.daily[1].temp;
    console.log("TEST:", "TEST")
  }
};


// var dateFormatted = function (dt) {
  // const unixTimestamp = 1575909015; //1575909015

  // const milliseconds = unixTimestamp * 1000 // 1575909015000

  // const dateObject = new Date(milliseconds)

  // const humanDateFormat = dateObject.toLocaleString() //2019-12-9 10:30:15
  // console.log('humanDateFormat:', humanDateFormat)

  // dateObject.toLocaleString("en-US", {weekday: "long"}) // Monday
  // dateObject.toLocaleString("en-US", {month: "long"}) // December
  // dateObject.toLocaleString("en-US", {day: "numeric"}) // 9
  // dateObject.toLocaleString("en-US", {year: "numeric"}) // 2019
  // dateObject.toLocaleString("en-US", {hour: "numeric"}) // 10 AM
  // dateObject.toLocaleString("en-US", {minute: "numeric"}) // 30
  // dateObject.toLocaleString("en-US", {second: "numeric"}) // 15
  // dateObject.toLocaleString("en-US", {timeZoneName: "short"}) // 12/9/2019, 10:30:15 AM CST
// };
// console.log("dateFormatted: ", dateFormatted);

document.getElementById("searchButton").addEventListener("click", formSubmitHandler);