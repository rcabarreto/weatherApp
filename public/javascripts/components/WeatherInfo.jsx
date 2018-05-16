const React = require('react');

const WeatherInfo = React.createClass({
  render: function () {

    let city = this.props.city;
    let currently = this.props.currently;

    return (
      <main id="weatherInformation" role="main" className="inner cover">

        <h1 id="weatherTitle" className="cover-heading">{city}</h1>
        <h3>{currently.summary}</h3>

        <div id="currentWeather" className="metric-stat">
          <span id="weather-icon" className={"wi wi-forecast-io-"+currently.icon} title={currently.summary}></span>
          <span id="weather-temp" className="metric-stat-number">{parseInt(currently.temperature)}°</span>
          <span id="weather-unit" className="unit">c</span>
        </div>

        <div id="currentWeatherFeelsLike" className="metric-stat">
          <span id="weather-temp" className="metric-stat-number">Feels like {parseInt(currently.temperature)}°</span>
          <span id="weather-unit" className="unit">c</span>
        </div>

        <div id="dailyWeather"></div>


      </main>
    )
  }
});

module.exports = WeatherInfo;