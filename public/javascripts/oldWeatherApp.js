
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(loadWeatherForecast, error);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}


function error(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      showError("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      showError("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      showError("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      showError("An unknown error occurred.");
      break;
  }
}


function loadWeatherForecast(position) {
  console.log("Latitude: " + position.coords.latitude);
  console.log("Longitude: " + position.coords.longitude);

  $.getJSON( "/forecast", { lat: position.coords.latitude, lgn: position.coords.longitude } )
    .done(function(json) {
      parseWeatherJson(json);
    })
    .fail(function( jqxhr, textStatus, error ) {
      var err = textStatus + ", " + error;
      console.log( "Request Failed: " + err );
      showError(error);
    });

}


function parseWeatherJson(weatherJson) {

  $('#weatherTitle').html(weatherJson.addressname);
  $('#weather-icon').removeClass().addClass('wi').addClass('wi-forecast-io-'+weatherJson.icon);
  $('#weather-temp').html( parseInt(weatherJson.temperature) + '°');
  $('#weather-unit').html('c');

  showWeather();

}


function showWeather() {
  $('#loader').addClass('hide');
  $('#currentWeather').removeClass('hide');
}


function showError(errorMessage) {
  $('#errorMessage').html(errorMessage);

  $('#loader').addClass('hide');
  $('#errorContainer').removeClass('hide');
}


// $( document ).ready(function() {
//   console.log( "ready!" );
//   getLocation();
// });