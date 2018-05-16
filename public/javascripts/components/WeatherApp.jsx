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
      error: {},
      currently: {}
    };
  },

  getInitialState: function () {
    return {
      title: this.props.title,
      city: this.props.city,
      error: this.props.error,
      currently: this.props.currently
    };
  },

  getLocation: function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.loadWeatherInfo, this.errorMessageHandler);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  },

  loadWeatherInfo: function (position) {

    let self = this;

    $.getJSON( "/forecast", { lat: position.coords.latitude, lgn: position.coords.longitude } )
      .done(function(json) {
        self.handleLoadWeatherInfo(json);
      })
      .fail(function( jqxhr, textStatus, error ) {
        let err = textStatus + ", " + error;
        self.handleError(error);
      });

  },

  handleLoadWeatherInfo: function (weatherInfo) {
    this.setState({
      city: weatherInfo.cityName,
      currently: weatherInfo.currently
    });
  },

  handleError: function (errorObj) {
    this.setState({
      error: errorObj
    });
  },

  errorMessageHandler: function (error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        this.handleError({ code: 1, message: "User denied the request for Geolocation."});
        break;
      case error.POSITION_UNAVAILABLE:
        this.handleError({ code: 1, message: "Location information is unavailable."});
        break;
      case error.TIMEOUT:
        this.handleError({ code: 1, message: "The request to get user location timed out."});
        break;
      case error.UNKNOWN_ERROR:
        this.handleError({ code: 1, message: "An unknown error occurred."});
        break;
    }
  },

  render: function () {

    let title = this.state.title;
    let city = this.state.city;
    let error = this.state.error;
    let currently = this.state.currently;

    return (
      <div className={"weatherBackground d-flex w-100 h-100 p-3 mx-auto flex-column "+ currently.icon}>
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">

          <WeatherHeader title={title}/>

          {!_.isEmpty(error) && <WeatherError error={error}/>}

          {!_.isEmpty(currently) && <WeatherInfo city={city} currently={currently}/>}

          {_.isEmpty(currently) && _.isEmpty(error) && <WeatherLoader/>}

          <WeatherFooter onNewTitle={this.getLocation}/>

        </div>
      </div>
    );
  }
});

module.exports = WeatherApp;