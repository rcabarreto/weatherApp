import React from 'react'
import { connect } from 'react-redux'

const WeatherError = (props) => {
  const { show } = props.error

  if (!show) {
    return null
  }

  return (
    <main id="errorContainer" role="loader" className="inner cover">
      <h1 className="cover-heading">Oops... something went wrong!</h1>
      <p id="errorMessage" className="lead">{error.message}</p>
    </main>
  )
}

export default connect(
  state => ({
    error: state.error,
  }),
)(WeatherError)
