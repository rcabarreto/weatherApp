

export const loaderReducer = (state = false, action) => {
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

export const locationReducer = (state = {}, action) => {
  switch (action.type) {
  case 'UPDATE_LOCATION':
    return {
      road: action.locationAddr.road,
      suburb: action.locationAddr.suburb,
      city: action.locationAddr.city,
      state: action.locationAddr.state,
      country: action.locationAddr.country,
      country_code: action.locationAddr.country_code,
    }
  default:
    return state
  }
}

export const weatherReducer = (state = {}, action) => {
  switch (action.type) {
  case 'SET_WEATHER_INFO':
    return {
      show: action.weather.show,
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
      show: action.errorObj.show,
      code: action.errorObj.code,
      message: action.errorObj.message,
    }
  default:
    return state
  }
}

export const authReducer = (state = {}, action) => {
  switch (action.type) {
  case 'LOGIN':
    return {
      uid: action.uid,
    }
  case 'LOGOUT':
    return {}
  default:
    return state
  }
}
