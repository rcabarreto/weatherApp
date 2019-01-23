import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import loaderImage from '../images/ajax-loader-white.gif'

const WeatherLoader = (props) => {
  const { location, weather } = props

  if (location.country || weather.summary) {
    return null
  }

  return (
    <main id="loader" className="inner cover">
      <p id="loader" className="lead"><img alt="Loader" src={loaderImage} /></p>
    </main>
  )
}

WeatherLoader.propTypes = {
  location: PropTypes.node.isRequired,
  weather: PropTypes.node.isRequired,
}

export default connect(
  state => ({
    location: state.location,
    weather: state.weather,
  }),
)(WeatherLoader)
