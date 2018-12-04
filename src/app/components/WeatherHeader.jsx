import React from 'react'

class WeatherHeader extends React.Component {
  render() {
    return (
      <header className="masthead mb-auto">
        <div className="inner">
          <h3 className="masthead-brand">Tiny Weather App</h3>
          {/* <nav className="nav nav-masthead justify-content-center">
            <a className="nav-link active" href="#">Now</a>
            <a className="nav-link" href="#">Today</a>
            <a className="nav-link" href="#">This week</a>
          </nav> */}
        </div>
      </header>
    )
  }
}

export default WeatherHeader
