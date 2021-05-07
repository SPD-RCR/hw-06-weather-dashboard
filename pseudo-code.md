# 06 Server-Side APIs: Weather Dashboard

## Your Task

Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

Use the [OpenWeather One Call API](https://openweathermap.org/api/one-call-api) to retrieve weather data for cities. Read through the documentation for setup and usage instructions. You will use `localStorage` to store any persistent data.

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

## Pseudo-Code

## DATA

Set up a test conneciton with OpenWeather API to get weather data to display on screen.

- citySearch API results in weather data Array, 0 is current day, 1-5 are 5 day forecast for each value
- Data needed: City, dates (mm/dd/yyyy), temp in F, wind speed, humidity %, UV Index, daily overall classification and related image/icon

## PAGE LAYOUT

- Header row: "Weather Dashboard" spans the width of the screen with text on single line

- LEFT/NAV column:

  - Title "Search for a city:" with Input field below title, with "Search" button below input field
  - Search button: Use onClick event to insert the Search input field value into the API connection and make the API request
  - Divider line - Black
  - Display a vertical stack of each previous search text in indiviual, clickable, grey Buttons
  - - Use the same vertical spacing between each item listed down the column

- MAIN/CONTENT column w/ 2-3 rows
  - ROW 1: Outline box, width of the column, containing:
    - Current weather for citySearch results
    - City name (citySearch value), current date (MM/DD/YYYY) and weather conditions image/icon representation for that day
    - Temp: 70.01 F -- Farenheight, use 2 decimals, include degrees symbol, and F
    - Wind: 6.67 MPH -- speed in Miles per Hour, use 2 decimals
    - Humidity: 46% -- use percentage
    - UV Index: 0.47 -- display value in a box, set background to be favorable (Green), moderate (Yellow), or severe (Red), \*Find a UV Index chart/scale listing which numbers are considered favorable, moderate, or severe.
  - ROW 2:
    - Title "5 day Forecast:" -- \*Possibly put in separate container ROW to avoid Flexbox/Grid issues.
    - 5 boxes with same layout, spread evenly across the width of the column (L and XL)
    - Each individual box layout
      - Header Date -- MM/DD/YYYY
      - weather conditions image/icon representation for that day
      - Temp: 70.01 F -- Farenheight, use 2 decimals, include degrees symbol, and F
      - Wind: 6.67 MPH -- speed in Miles per Hour, use 2 decimals
      - Humidity: 46% -- use percentage
    - white space below the 5 boxes

## Mock-Up

The following image shows the web application's appearance and functionality:

![The weather app includes a search option, a list of cities, and a five-day forecast and current weather conditions for Atlanta.](./Assets/06-server-side-apis-homework-demo.png)

## Grading Requirements

This homework is graded based on the following criteria:

### Technical Acceptance Criteria: 40%

- Satisfies all of the above acceptance criteria plus the following:

  - Uses the OpenWeather API to retrieve weather data.

  - Uses `localStorage` to store persistent data.

### Deployment: 32%

- Application deployed at live URL.

- Application loads with no errors.

- Application GitHub URL submitted.

- GitHub repository that contains application code.

### Application Quality: 15%

- Application user experience is intuitive and easy to navigate.

- Application user interface style is clean and polished.

- Application resembles the mock-up functionality provided in the homework instructions.

### Repository Quality: 13%

- Repository has a unique name.

- Repository follows best practices for file structure and naming conventions.

- Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

- Repository contains multiple descriptive commit messages.

- Repository contains quality readme file with description, screenshot, and link to deployed application.

## Review

You are required to submit BOTH of the following for review:

- The URL of the functional, deployed application.

- The URL of the GitHub repository. Give the repository a unique name and include a readme describing the project.

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
