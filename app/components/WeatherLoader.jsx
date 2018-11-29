
import React, { Component } from 'react'
import {connect} from "react-redux";

class WeatherLoader extends Component {
  render() {

    let {isLoading} = this.props;

    if (!isLoading) {
      return null;
    }

    return (
      <main id="loader" role="loader" className="inner cover">
        <p id="loader" className="lead"><img src={require('../images/ajax-loader-white.gif')}/></p>
      </main>
    )
  }
}

export default connect(
  (state) => {
    return {
      isLoading: state.loader
    }
  }
)(WeatherLoader);
