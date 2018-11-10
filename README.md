# FEND Project-7: Neighborhood Map
The goal of this project is create an app with create-react app and requires the use of a map, markers and info windows. A user should be able to see all markers and venues on page load and should be able to filter both the venues and markers based on what the user inputs in the search bar. Also, as the user clicks on a venue on the side menu, it should activate the appropriate marker for that marker. The app also needs to be both responsive so that it usable on multiple devices, and accessible for users with vision imparements.

## Intallation

To download and install this project, you can either clone this repo through a command console such as git bash or PowerShell or you can just download the zipped folder straight from this GitHub repo.

To get started:

* install all project dependencies with `npm install`
* start the server with `npm start`

Note: You will have to have your own Google Map Api key and FourSquere API keys for this project have the map and venues function. To do so, got to App.js under the src folder and go to line 44 to enter a new Google Map API key and line 124 to add new FourSquare Client_ID and Secret API codes.

## Service Worker

To activate the serviceWorker, go to in the index.js file under the src folder and change serviceWorker.unregister(); to serviceWorker.register();

Note: The service worker will only work in production mode.

## Acknowledgments

Thanks to:
- Yahya Elharony's walkthrough on how to access the Google Map, markers, and infoWinows without using external components.
https://www.youtube.com/watch?v=W5LhLZqj76s

- Rodrick Bloomfield and Jenn G for helping with the marker functionallity and filtering.

- LINUXANDCHILL's YouTube video on how to filter my venues.
https://www.youtube.com/watch?v=YRiMo2EjVds

## Dependencies
This project:

- was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- uses react-hamburger-menu https://www.npmjs.com/package/react-hamburger-menu
- uses Axios https://www.npmjs.com/package/axios
- uses Jquery https://www.npmjs.com/package/jquery
- uses Google Maps API https://developers.google.com/maps/documentation/
- uses FourSquare API https://developer.foursquare.com/
