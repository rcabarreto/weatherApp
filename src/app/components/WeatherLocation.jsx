import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const WeatherLocation = (props) => {
  const {
    show,
    city,
    country,
    road,
    suburb,
  } = props

  return (
    show && (
      <React.Fragment>
        <h1 key="1" id="weatherTitle" className="cover-heading">{city}, {country}</h1>
        <h6 key="2">{road}, {suburb}</h6>
      </React.Fragment>
    )
  )
}

WeatherLocation.propTypes = {
  show: PropTypes.bool,
  city: PropTypes.string,
  country: PropTypes.string,
  road: PropTypes.string,
  suburb: PropTypes.string,
}

WeatherLocation.defaultProps = {
  show: false,
  city: '',
  country: '',
  road: '',
  suburb: '',
}

export default connect(
  state => ({ ...state.location }),
)(WeatherLocation)
