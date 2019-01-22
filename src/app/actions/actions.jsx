
export const toggleLoader = () => ({ type: 'TOGGLE_LOADER' })

export const setLocation = locationAddr => ({ type: 'UPDATE_LOCATION', locationAddr })

export const setWeather = weather => ({ type: 'SET_WEATHER_INFO', weather })

export const showErrorMessage = errorObj => ({ type: 'UPDATE_ERROR_MESSAGE', errorObj })
