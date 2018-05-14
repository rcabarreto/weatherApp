
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
    .done(function( json ) {
      console.log( "JSON Data: " + JSON.stringify(json) );
    })
    .fail(function( jqxhr, textStatus, error ) {
      var err = textStatus + ", " + error;
      console.log( "Request Failed: " + err );
    });


}



$( document ).ready(function() {
  console.log( "ready!" );
  getLocation();
});