import React from 'react'
import { connect } from 'react-redux'

import loaderImage from '../images/ajax-loader-white.gif'

const WeatherLoader = (props) => {
  const { show } = props

  return (
    show && (
      <main id="loader" className="inner cover">
        <p id="loader" className="lead"><img alt="Loader" src={loaderImage} /></p>
      </main>
    )
  )
}

export default connect(
  state => ({
    show: (!state.location.show || !state.weather.show),
  }),
)(WeatherLoader)
