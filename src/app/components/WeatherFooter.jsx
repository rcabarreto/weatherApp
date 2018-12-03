'use strict';

import React, { Component } from 'react'

class WeatherFooter extends Component {
  render() {
    return (
      <footer className="mastfoot mt-auto">
        <div className="inner">
          <p><a href="https://darksky.net/poweredby/">Powered by Dark Sky</a></p>
        </div>
      </footer>
    )
  }
}

export default WeatherFooter
