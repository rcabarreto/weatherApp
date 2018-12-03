
import React from 'react'
import { connect } from "react-redux";

class WeatherInfo extends React.Component {

  render() {

    let {location, weather} = this.props;

    if (!weather.show) {
      return null;
    }

    return (
      <main id="weatherInformation" role="main" className="inner cover">

        <h1 id="weatherTitle" className="cover-heading">{location.cityName}</h1>
        <h3>{weather.summary}</h3>

        <div id="currentWeather" className="metric-stat">
          <span id="weather-icon" className={"wi wi-owm-"+weather.icon} title={weather.summary}></span>
          <span id="weather-temp" className="metric-stat-number">{parseInt(weather.temperature)}°</span>
          <span id="weather-unit" className="unit">c</span>
        </div>

        <div id="currentWeatherFeelsLike" className="metric-stat">
          <span id="weather-temp" className="metric-stat-number">Feels like {parseInt(weather.apparentTemperature)}°</span>
          <span id="weather-unit" className="unit">c</span>
        </div>

        <div id="dailyWeather"></div>

      </main>
    )
  }
}

export default connect(
  (state) => {
    return {
      location: state.location,
      weather: state.weather
    }
  }
)(WeatherInfo);
