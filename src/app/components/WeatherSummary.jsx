import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const WeatherSummary = (props) => {
  const {
    show,
    summary,
    icon,
    temperature,
    apparentTemperature,
  } = props

  return (
    show && (
      <React.Fragment>
        <h3>{summary}</h3>
        <div id="currentWeather" className="metric-stat">
          <span id="weather-icon" className={`wi wi-owm-${icon}`} title={summary} />
          <span id="weather-temp" className="metric-stat-number">{parseInt(temperature, 10)}°</span>
          <span id="weather-unit" className="unit">c</span>
        </div>
        <div id="currentWeatherFeelsLike" className="metric-stat">
          <span id="weather-temp" className="metric-stat-number">Feels like {parseInt(apparentTemperature, 10)}°</span>
          <span id="weather-unit" className="unit">c</span>
        </div>
      </React.Fragment>
    )
  )
}

WeatherSummary.propTypes = {
  show: PropTypes.bool,
  summary: PropTypes.string,
  icon: PropTypes.number,
  temperature: PropTypes.number,
  apparentTemperature: PropTypes.number,
}

WeatherSummary.defaultProps = {
  show: false,
  summary: '',
  icon: 0,
  temperature: 0,
  apparentTemperature: 0,
}

export default connect(
  state => ({ ...state.weather }),
)(WeatherSummary)
