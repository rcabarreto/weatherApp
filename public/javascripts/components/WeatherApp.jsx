const React = require('react');
const _ = require('underscore');

const WeatherHeader = require('./WeatherHeader');
const WeatherLoader = require('./WeatherLoader');
const WeatherInfo   = require('./WeatherInfo');
const WeatherFooter = require('./WeatherFooter');
const WeatherError  = require('./WeatherError');

const WeatherApp = React.createClass({
  componentDidMount: function() {
    this.getLocation();
  },

  getDefaultProps: function () {
    return {
      title: 'Tiny Weather App',
      city: '',
      currently: {}
    };
  },
  getInitialState: function () {
    return {
      title: this.props.title,
      city: this.props.city,
      currently: this.props.currently
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
      city: weatherInfo.cityName,
      currently: weatherInfo.currently
    });
    showWeather();
  },
  render: function () {
    let title = this.state.title;
    let city = this.state.city;
    let currently = this.state.currently;

    return (
      <div className={"weatherBackground d-flex w-100 h-100 p-3 mx-auto flex-column "+ currently.icon}>
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">

          <WeatherHeader title={title}/>

          <WeatherError/>

          {_.isEmpty(currently) && <WeatherLoader/>}

          {!_.isEmpty(currently) && <WeatherInfo city={city} currently={currently}/>}

          <WeatherFooter onNewTitle={this.getLocation}/>

        </div>
      </div>
    );
  }
});

module.exports = WeatherApp;