
export const loaderReducer = (state = true, action) => {
  switch (action.type) {
  case 'TOGGLE_LOADER':
    return !state
  case 'SHOW_LOADER':
    return true
  case 'HIDE_LOADER':
    return false
  default:
    return state
  }
}

export const coordsReducer = (state = {}, action) => {
  switch (action.type) {
  case 'SET_COORDS':
    return {
      latitude: action.position.coords.latitude,
      longitude: action.position.coords.longitude,
    }
  default:
    return state
  }
}

export const locationReducer = (state = {}, action) => {
  switch (action.type) {
  case 'SET_LOCATION':
    return {
      ...action.locationAddr,
      show: true,
    }
  default:
    return state
  }
}

export const weatherReducer = (state = {}, action) => {
  switch (action.type) {
  case 'SET_WEATHER_INFO':
    return {
      show: true,
      summary: action.weather.weather[0].description,
      icon: action.weather.weather[0].id,
      temperature: action.weather.main.temp,
      apparentTemperature: action.weather.main.temp,
      pressure: action.weather.main.pressure,
      humidity: action.weather.main.humidity,
      temp_min: action.weather.main.temp_min,
      temp_max: action.weather.main.temp_max,
      visibility: action.weather.visibility,
    }
  default:
    return state
  }
}

export const errorReducer = (state = {}, action) => {
  switch (action.type) {
  case 'UPDATE_ERROR_MESSAGE':
    return {
      ...action.errorObj,
      show: true,
    }
  default:
    return state
  }
}
