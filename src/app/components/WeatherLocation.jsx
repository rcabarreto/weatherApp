import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const WeatherLocation = (props) => {
  const { location } = props

  if (!location.country) {
    return null
  }

  return (
    <React.Fragment>
      <h1 key="1" id="weatherTitle" className="cover-heading">{location.city}, {location.country}</h1>
      <h6 key="2">{location.road}, {location.suburb}</h6>
    </React.Fragment>
  )
}

WeatherLocation.propTypes = {
  location: PropTypes.node.isRequired,
}

export default connect(
  state => ({ location: state.location }),
)(WeatherLocation)
