const React = require('react');

const WeatherHeader = require('./WeatherHeader');
const WeatherLoader = require('./WeatherLoader');
const WeatherInfo   = require('./WeatherInfo');
const WeatherFooter = require('./WeatherFooter');

const WeatherApp = React.createClass({
  componentDidMount: function() {
    this.getLocation();
  },

  getDefaultProps: function () {
    return {
      title: 'Tiny Weather App',
      city: '',
      temperature: 0,
      icon: '',
      summary: ''
    };
  },
  getInitialState: function () {
    return {
      title: this.props.title,
      city: this.props.city,
      temperature: this.props.temperature,
      icon: this.props.icon,
      summary: this.props.summary
    };
  },
  getLocation: function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.loadWeatherInfo);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  },
  loadWeatherInfo: function (position) {
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);

    let self = this;

    $.getJSON( "/forecast", { lat: position.coords.latitude, lgn: position.coords.longitude } )
      .done(function(json) {
        self.handleLoadWeatherInfo(json);
      })
      .fail(function( jqxhr, textStatus, error ) {
        let err = textStatus + ", " + error;
        console.log( "Request Failed: " + err );
        showError(error);
      });

  },
  handleLoadWeatherInfo: function (weatherInfo) {
    this.setState({
      city: weatherInfo.addressname,
      temperature: parseInt(weatherInfo.temperature),
      icon: weatherInfo.icon,
      summary: weatherInfo.summary
    });
    showWeather();
  },
  render: function () {
    let title = this.state.title;

    let city = this.state.city;
    let temperature = this.state.temperature;
    let icon = this.state.icon;
    let summary = this.state.summary;

    return (
      <div className={"weatherBackground d-flex w-100 h-100 p-3 mx-auto flex-column "+ icon}>
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">

          <WeatherHeader title={title}/>

          <WeatherLoader/>

          <main id="errorContainer" role="loader" className="inner cover hide">
            <h1 className="cover-heading">Oops... something went wrong!</h1>
            <p id="errorMessage" className="lead"></p>
          </main>

          <WeatherInfo city={city} temperature={temperature} icon={icon} summary={summary}/>

          <WeatherFooter onNewTitle={this.getLocation}/>

        </div>
      </div>
    );
  }
});

module.exports = WeatherApp;