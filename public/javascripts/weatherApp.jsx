const React = require('react');
const ReactDOM = require('react-dom');

const WeatherApp = require('./components/WeatherApp');

ReactDOM.render(
  <WeatherApp/>,
  document.getElementById('weatherApp')
);