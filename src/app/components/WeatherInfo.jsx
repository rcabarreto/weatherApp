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
    const { coords, dispatch } = this.props
    dispatch(actions.loadLocation(coords.latitude, coords.longitude))
    dispatch(actions.loadWeather(coords.latitude, coords.longitude))
  }

  render() {
    return (
      <main id="weatherInformation" role="main" className="inner cover">
        <WeatherLocation />
        <WeatherSummary />
        <div id="dailyWeather" />
      </main>
    )
  }
}

WeatherInfo.propTypes = {
  coords: PropTypes.node.isRequired,
}

export default connect(
  state => ({ coords: state.coords }),
)(WeatherInfo)
