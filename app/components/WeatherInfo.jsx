'use strict';

import React, { Component } from 'react'

class WeatherInfo extends Component {
  render() {

    let city = this.props.city;

    let {summary, temperature, apparentTemperature, icon} = this.props.currently;

    return (
      <main id="weatherInformation" role="main" className="inner cover">

        <h1 id="weatherTitle" className="cover-heading">{city}</h1>
        <h3>{summary}</h3>

        <div id="currentWeather" className="metric-stat">
          <span id="weather-icon" className={"wi wi-forecast-io-"+icon} title={summary}></span>
          <span id="weather-temp" className="metric-stat-number">{parseInt(temperature)}°</span>
          <span id="weather-unit" className="unit">c</span>
        </div>

        <div id="currentWeatherFeelsLike" className="metric-stat">
          <span id="weather-temp" className="metric-stat-number">Feels like {parseInt(apparentTemperature)}°</span>
          <span id="weather-unit" className="unit">c</span>
        </div>

        <div id="dailyWeather"></div>

      </main>
    )

  }

}

export default WeatherInfo
