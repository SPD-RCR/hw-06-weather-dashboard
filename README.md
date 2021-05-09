# hw-06-weather-dashboard

Homework 06: Server Side APIs - Weather Dashboard

11 PM Saturday, 05/08/2021
I was able to create a working HTML file that includes the CSS.

Note: Due to using the most current version of Bootstrap 5.0. I had to download the related files to reference instead of the standard URL to Bootstrap 4.6.1.

ID tags have been assigned to the various fields, buttons, etc.

The related Variables for the ID tags have been set up in the scripts.js file

https://spd-rcr.github.io/hw-06-weather-dashboard/assets/Weather%20Dashboard%20-%20HTML%20CSS%20layout.png
(./assets/Weather Dashboard - HTML CSS layout.png)

# TBD (ASAP)

All of the remaining JavaScript

I have the APIs and my access key from OpenWeatherMap.org but need to set up the API connections, etc.

- Access Key: db0bba3ceabf7ca8a120908817237044

- One Call API : https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
  - Which includes some needed details not in the weather by City Name API.
    - UV Index (uvi)
    - weather icons
  - Plus Current Weather data
  - 7 Day forecast, which I can use to populate the additional 5 day forecast

Note: I may need to use the API by City Name to get the Longitude and Latitude coordinates to input into the One Call API.

- Current weather data for one location "by City Name": api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

- Weather conditions Icons: https://openweathermap.org/weather-conditions#How-to-get-icon-URL
  Example icon URL is http://openweathermap.org/img/wn/10d@2x.png
