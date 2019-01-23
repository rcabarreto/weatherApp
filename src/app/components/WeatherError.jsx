import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class WeatherError extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <main id="errorContainer" className="inner cover">
          <h1 className="cover-heading">Oops... something went wrong!</h1>
          <p id="errorMessage" className="lead">{error.message}</p>
        </main>
      )
    }

    return this.props.children
  }
}

export default WeatherError
