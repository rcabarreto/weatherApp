
import React, { Component } from 'react'
import {connect} from "react-redux";

class WeatherError extends Component {
  render() {

    let {error} = this.props;

    if (!error.show) {
      return null;
    }

    return (
      <main id="errorContainer" role="loader" className="inner cover">
        <h1 className="cover-heading">Oops... something went wrong!</h1>
        <p id="errorMessage" className="lead">{error.message}</p>
      </main>
    )
  }

}

export default connect(
  (state) => {
    return {
      error: state.error
    }
  }
)(WeatherError);