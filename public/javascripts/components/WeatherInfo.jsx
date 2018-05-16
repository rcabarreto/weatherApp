const React = require('react');

const WeatherInfo = React.createClass({
  render: function () {

    let city = this.props.city;
    let temperature = this.props.temperature;
    let icon = this.props.icon;
    let summary = this.props.summary;

    return (
      <main id="currentWeather" role="main" className="inner cover hide">
        <h1 id="weatherTitle" className="cover-heading">{city}</h1>
        <h4>{summary}</h4>
        <div id="currentWeather" className="metric-stat">
          <span id="weather-icon" className={"wi wi-forecast-io-"+icon} title={summary}></span>
          <span id="weather-temp" className="metric-stat-number">{temperature}°</span>
          <span id="weather-unit" className="unit">c</span>
        </div>
      </main>
    )
  }
});

module.exports = WeatherInfo;