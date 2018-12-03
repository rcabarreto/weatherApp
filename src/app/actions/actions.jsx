
export var toggleLoader = () => {
  return {
    type: 'TOGGLE_LOADER'
  }
};

export var setLocation = (locationAddr) => {
  return {
    type: 'UPDATE_LOCATION',
    road: locationAddr.road,
    suburb: locationAddr.suburb,
    city: locationAddr.city,
    state: locationAddr.state,
    country: locationAddr.country,
    country_code: locationAddr.country_code
  }
};

export var setWeather = (weather) => {
  return {
    type: 'SET_WEATHER_INFO',
    show: true,
    summary: weather.weather[0].description,
    icon: weather.weather[0].id,
    temperature: weather.main.temp,
    apparentTemperature: weather.main.temp
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