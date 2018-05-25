'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import WeatherApp from './components/WeatherApp'

import './styles/app.scss'

var store = require('configureStore').configure();


ReactDOM.render(
  <WeatherApp />,
  document.getElementById('weatherApp')
);
