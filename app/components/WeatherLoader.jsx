'use strict';

import React, { Component } from 'react'

class WeatherLoader extends Component {
  render() {

    return (
      <main id="loader" role="loader" className="inner cover">
        <p id="loader" className="lead"><img src={require('../images/ajax-loader-white.gif')}/></p>
      </main>
    )

  }
}

export default WeatherLoader