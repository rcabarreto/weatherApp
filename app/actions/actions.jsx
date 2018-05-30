
export var isLoadingAction = () => {
  return {
    type: 'TOGGLE_SHOW_LOADER'
  }
};

export var setLocation = (cityName) => {
  return {
    type: 'UPDATE_LOCATION',
    cityName
  }
};

export var setWeatherInfo = (weather) => {
  return {
    type: 'SET_WEATHER_INFO',
    show: true,
    summary: weather.summary,
    icon: weather.icon,
    temperature: weather.temperature,
    apparentTemperature: weather.apparentTemperature
  }
};

export var showErrorMessage = (errorObj) => {
  return {
    type: 'UPDATE_ERROR_MESSAGE',
    show: true,
    code: errorObj.code,
    message: errorObj.message
  }
};