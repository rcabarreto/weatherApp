import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import WeatherApp from './components/WeatherApp'

import configureStore from './store/configureStore'
import './styles/app.scss'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <WeatherApp />
  </Provider>,
  document.getElementById('weatherApp'),
)
