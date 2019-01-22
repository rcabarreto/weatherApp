import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import WeatherApp from './components/WeatherApp'

import './styles/app.scss'

const store = require('./store/configureStore').configure()

ReactDOM.render(
  <Provider store={store}>
    <WeatherApp />
  </Provider>,
  document.getElementById('weatherApp'),
)
