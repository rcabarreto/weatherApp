import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import WeatherApp from './components/WeatherApp'

const store = require('./store/configureStore').configure();

import './styles/app.scss'

ReactDOM.render(
  <Provider store={store}>
    <WeatherApp />
  </Provider>,
  document.getElementById('weatherApp')
);
