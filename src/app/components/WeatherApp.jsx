import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from './WeatherHeader'
import Footer from './WeatherFooter'
import Loader from './WeatherLoader'
import WeatherInfo from './WeatherInfo'
import WeatherError from './WeatherError'

import * as actions from '../actions/actions'

class WeatherApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      weatherIcon: '',
    }
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(actions.loadCoords())
  }

  render() {
    // const { weatherIcon } = this.props
    const { weatherIcon } = this.state
    return (
      <div className={`weatherBackground d-flex w-100 h-100 p-3 mx-auto flex-column owm-${weatherIcon}`}>
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <WeatherError>
            <Header />
            <Loader />
            <WeatherInfo />
            <Footer />
          </WeatherError>
        </div>
      </div>
    )
  }
}

export default connect()(WeatherApp)
