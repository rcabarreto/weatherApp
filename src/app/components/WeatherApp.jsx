import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from './WeatherHeader'
import Footer from './WeatherFooter'
import Loader from './WeatherLoader'
import WeatherInfo from './WeatherInfo'
// import Error from './WeatherError'

import * as actions from '../actions/actions'

class WeatherApp extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(actions.loadCoords())
  }

  render() {
    // const { weatherIcon } = this.props
    const weatherIcon = '800'
    return (
      <div className={`weatherBackground d-flex w-100 h-100 p-3 mx-auto flex-column owm-${weatherIcon}`}>
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <Header />
          <Loader />
          <WeatherInfo />
          <Footer />
        </div>
      </div>
    )
  }
}

export default connect()(WeatherApp)
