
function getLocation(callback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(loadWeatherForecast);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function loadWeatherForecast(position) {
  console.log("Latitude: " + position.coords.latitude);
  console.log("Longitude: " + position.coords.longitude);

  $.getJSON( "http://localhost:3000/forecast", { lat: position.coords.latitude, lgn: position.coords.longitude } )
    .done(function(json) {
      parseWeatherJson(json);
    })
    .fail(function( jqxhr, textStatus, error ) {
      var err = textStatus + ", " + error;
      console.log( "Request Failed: " + err );
    });

}

function parseWeatherJson(weatherJson) {
  console.log('this will parse the weather json!');
  console.log(JSON.stringify(weatherJson));

  $('#weather-icon').removeClass().addClass('wi').addClass('wi-forecast-io-'+weatherJson.icon);
  $('#weather-temp').html( parseInt(weatherJson.temperature) + '°');
  $('#weather-unit').html('c');

}


$( document ).ready(function() {
  console.log( "ready!" );
  getLocation();
});