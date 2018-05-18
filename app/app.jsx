'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import WeatherApp from './components/WeatherApp'

import './styles/app.scss'

ReactDOM.render(
  <WeatherApp />,
  document.getElementById('weatherApp')
);