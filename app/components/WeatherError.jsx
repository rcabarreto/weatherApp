import React, { Component } from 'react'

class WeatherError extends Component {
  render() {

    let error = this.props.error;

    return (
      <main id="errorContainer" role="loader" className="inner cover">
        <h1 className="cover-heading">Oops... something went wrong!</h1>
        <p id="errorMessage" className="lead">{error.message}</p>
      </main>
    )
  }

}

export default WeatherError