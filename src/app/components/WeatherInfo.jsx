import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as actions from '../actions/actions'

import WeatherLocation from './WeatherLocation'
import WeatherSummary from './WeatherSummary'

class WeatherInfo extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(actions.showLoader())
  }

  componentDidUpdate() {
    const { latitude, longitude, dispatch } = this.props
    dispatch(actions.loadLocation(latitude, longitude))
    dispatch(actions.loadWeather(latitude, longitude))
  }

  render() {
    const { show } = this.props
    return (
      show && (
        <main id="weatherInformation" role="main" className="inner cover">
          <WeatherLocation />
          <WeatherSummary />
          <div id="dailyWeather" />
        </main>
      )
    )
  }
}

WeatherInfo.propTypes = {
  show: PropTypes.bool,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
}

WeatherInfo.defaultProps = {
  show: false,
  latitude: 0,
  longitude: 0,
}

export default connect(
  state => ({ ...state.coords, show: (state.location.show && state.weather.show) }),
)(WeatherInfo)
