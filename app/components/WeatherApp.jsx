import React, { Component } from 'react'

import WeatherHeader from './WeatherHeader'
import WeatherLoader from './WeatherLoader'
import WeatherInfo   from './WeatherInfo'
import WeatherFooter from './WeatherFooter'
import WeatherError  from './WeatherError'


const _ = require('underscore');


class WeatherApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      city: this.props.city,
      error: this.props.error,
      currently: this.props.currently
    };

    this.loadWeatherInfo = this.loadWeatherInfo.bind(this)

  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.loadWeatherInfo, this.errorMessageHandler);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  loadWeatherInfo(position) {

    console.log('Latitude:', position.coords.latitude);
    console.log('Longitude:', position.coords.longitude);

    let self = this;

    $.getJSON( "/forecast", { lat: position.coords.latitude, lgn: position.coords.longitude } )
      .done(function(json) {
        self.handleLoadWeatherInfo(json);
      })
      .fail(function( jqxhr, textStatus, error ) {
        let err = textStatus + ", " + error;
        self.handleError(error);
      });

  }

  handleLoadWeatherInfo(weatherInfo) {
    this.setState({
      city: weatherInfo.cityName,
      currently: weatherInfo.currently
    });
  }

  handleError(errorObj) {
    this.setState({
      error: errorObj
    });
  }

  errorMessageHandler(error) {
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
  }

  render() {

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

}


WeatherApp.defaultProps = {
  title: 'Tiny Weather App',
  city: '',
  error: {},
  currently: {}
};


export default WeatherApp