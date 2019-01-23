import api from '../api/WeatherAPI'

export const setCoords = position => ({ type: 'SET_COORDS', position })

export const toggleLoader = () => ({ type: 'TOGGLE_LOADER' })

export const showLoader = () => ({ type: 'SHOW_LOADER' })

export const setLocation = locationAddr => ({ type: 'SET_LOCATION', locationAddr })

export const setWeather = weather => ({ type: 'SET_WEATHER_INFO', weather })

export const showErrorMessage = errorObj => ({ type: 'UPDATE_ERROR_MESSAGE', errorObj })

export const loadCoords = () => (dispatch) => {
  api.getCoordinates().then((position) => {
    dispatch(setCoords(position))
  })
}

export const loadLocation = (latitude, longitude) => (dispatch) => {
  api.loadLocation(latitude, longitude).then((location) => {
    dispatch(setLocation(location.address))
  })
}

export const loadWeather = (latitude, longitude) => (dispatch) => {
  api.loadWeatherByCoordinates(latitude, longitude).then((weather) => {
    dispatch(setWeather(weather.list[0]))
  })
}
