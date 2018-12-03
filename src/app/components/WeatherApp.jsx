'use strict';

import React, { Component } from 'react'
import * as Redux from 'react-redux';

import Header from './WeatherHeader'
import Footer from './WeatherFooter'
import Loader from './WeatherLoader'
import Info   from './WeatherInfo'
import Error  from './WeatherError'

import * as actions from '../actions/actions'
import api from '../api/WeatherAPI'

const _ = require('underscore');

class WeatherApp extends Component {

  constructor(props) {
    super(props);
    this.loadWeatherInfo = this.loadWeatherInfo.bind(this)
  }

  componentDidMount() {
    let {dispatch} = this.props;
    dispatch(actions.toggleLoader());
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.checkCoordinates, this.errorMessageHandler);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  checkCoordinates = (position) => {
    console.log('Latitude:', position.coords.latitude);
    console.log('Longitude:', position.coords.longitude);

    // do some checking and if everythng ok, call api

    api.loadWeatherInfo(position.coords.latitude, position.coords.longitude).then(response => {
      console.log(response);
      this.handleLoadWeatherInfo(response);
    }, err => {
      this.handleError(err);
    });

  }

  loadWeatherInfo(position) {

    console.log('Latitude:', position.coords.latitude);
    console.log('Longitude:', position.coords.longitude);

    let self = this;

    $.getJSON('/api/forecast', { lat: position.coords.latitude, lgn: position.coords.longitude } )
      .done(function(json) {
        self.handleLoadWeatherInfo(json);
      })
      .fail(function( jqxhr, textStatus, error ) {
        let err = textStatus + ", " + error;
        let errorObj = JSON.parse(jqxhr.responseText);
        self.handleError(errorObj);
      });
  }

  handleLoadWeatherInfo(weatherInfo) {
    let {dispatch} = this.props;

    dispatch(actions.setLocation(weatherInfo.address));
    // state
    // country

    dispatch(actions.setWeatherInfo(weatherInfo.currently));
    dispatch(actions.toggleLoader());
  }

  handleError(errorObj) {
    let {dispatch} = this.props;
    dispatch(actions.showErrorMessage( errorObj ));
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

  render() {

    let {weather} = this.props;

    return (
      <div className={"weatherBackground d-flex w-100 h-100 p-3 mx-auto flex-column "+ weather.icon}>
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