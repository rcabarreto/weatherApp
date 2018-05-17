import React from 'react';
import ReactDOM from 'react-dom';

const WeatherApp = require('./components/WeatherApp');

ReactDOM.render(
  <WeatherApp/>,
  document.getElementById('weatherApp')
);