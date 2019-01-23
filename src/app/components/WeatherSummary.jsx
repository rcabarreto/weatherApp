import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const WeatherSummary = (props) => {
  const { weather } = props

  if (!weather.summary) {
    return null
  }

  return (
    <React.Fragment>
      <h3>{weather.summary}</h3>
      <div id="currentWeather" className="metric-stat">
        <span id="weather-icon" className={`wi wi-owm-${weather.icon}`} title={weather.summary} />
        <span id="weather-temp" className="metric-stat-number">{parseInt(weather.temperature, 10)}°</span>
        <span id="weather-unit" className="unit">c</span>
      </div>
      <div id="currentWeatherFeelsLike" className="metric-stat">
        <span id="weather-temp" className="metric-stat-number">Feels like {parseInt(weather.apparentTemperature, 10)}°</span>
        <span id="weather-unit" className="unit">c</span>
      </div>
    </React.Fragment>
  )
}

WeatherSummary.propTypes = {
  weather: PropTypes.node.isRequired,
}

export default connect(
  state => ({ weather: state.weather }),
)(WeatherSummary)
