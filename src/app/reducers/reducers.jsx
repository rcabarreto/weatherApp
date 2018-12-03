
const uuid = require('node-uuid');

export var loaderReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_LOADER':
      return !state;
    case 'SHOW_LOADER':
      return true;
    case 'HIDE_LOADER':
      return false;
    default:
      return state;
  }
};

export var locationReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_LOCATION':
      return {
        road: action.road,
        suburb: action.suburb,
        city: action.city,
        state: action.state,
        country: action.country,
        country_code: action.country_code
      };
    default:
      return state;
  }
};

export var weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_WEATHER_INFO':
      return {
        show: action.show,
        summary: action.summary,
        icon: action.icon,
        temperature: action.temperature,
        apparentTemperature: action.apparentTemperature
      };
    default:
      return state;
  }
};

export var errorReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_ERROR_MESSAGE':
      return {
        show: action.show,
        code: action.code,
        message: action.message
      };
    default:
      return state;
  }
};

export var authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
