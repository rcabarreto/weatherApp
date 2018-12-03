import React from 'react'
import * as Redux from 'react-redux';

import Header from './WeatherHeader'
import Footer from './WeatherFooter'
import Loader from './WeatherLoader'
import Info   from './WeatherInfo'
import Error  from './WeatherError'

import * as actions from '../actions/actions'
import api from '../api/WeatherAPI'

const _ = require('underscore');

class WeatherApp extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let {dispatch} = this.props;
    dispatch(actions.toggleLoader());
    this.getCoordinates();
  }

  getCoordinates() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.loadLocation, this.errorMessageHandler);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  loadLocation = (position) => {
    api.loadLocationInfo(position.coords.latitude, position.coords.longitude).then(response => {
      console.log(response);
      return this.handleLoadLocationInfo(response);
      
    }).then(response => {
      console.log('dddddd');
      console.log(response);
      return api.loadWeatherByCityname(response.address.city, response.address.country_code);
    }).then(response => {
      this.handleLoadWeatherInfo(response);
    }).catch(err => {
      this.handleError(err);
    });
  }

  handleLoadLocationInfo = (locationInfo) => {
    let {dispatch} = this.props;
    dispatch(actions.setLocation(locationInfo.address));
    return locationInfo;
  }

  handleLoadWeatherInfo(weatherInfo) {
    let {dispatch} = this.props;

    if (weatherInfo.count > 0) {
      let weather = weatherInfo.list[0];
      console.log(weather);
      dispatch(actions.setWeather(weather));
    }
    
    dispatch(actions.toggleLoader());
  }

  errorMessageHandler(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        this.handleError({ code: 110, message: "User denied the request for Geolocation."});
        break;
      case error.POSITION_UNAVAILABLE:
        this.handleError({ code: 112, message: "Location information is unavailable."});
        break;
      case error.TIMEOUT:
        this.handleError({ code: 113, message: "The request to get user location timed out."});
        break;
      case error.UNKNOWN_ERROR:
        this.handleError({ code: 999, message: "An unknown error occurred."});
        break;
    }
  }

  handleError(errorObj) {
    let {dispatch} = this.props;
    dispatch(actions.showErrorMessage( errorObj ));
    dispatch(actions.toggleLoader());
  }



  render() {

    let {weather} = this.props;

    return (
      <div className={"weatherBackground d-flex w-100 h-100 p-3 mx-auto flex-column owm-"+ weather.icon}>
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <Header/>
          <Loader/>
          <Info/>
          <Error/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default Redux.connect(
  (state) => {
    return {
      weather: state.weather
    }
  }
)(WeatherApp)