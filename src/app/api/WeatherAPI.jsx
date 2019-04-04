import axios from 'axios'

const GEOCODE_API_URL = 'https://us1.locationiq.com/v1/reverse.php'
const GEOCODE_API_KEY = process.env.GEOCODE_API_KEY || 'XXXXXX'
const GEOCODE_API_RETURN_FORMAT = process.env.GEOCODE_API_RETURN_FORMAT || 'json'

const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/find'
const WEATHER_API_KEY = process.env.WEATHER_API_KEY || 'XXXXXX'

const api = {

  makeApiGetCall(apiUrl) {
    return axios
      .get(apiUrl)
      .then(response => response.data)
      .catch(error => error)
  },

  getCoordinates() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    })
  },

  errorMessageHandler(error) {
    switch (error.code) {
    case error.PERMISSION_DENIED:
      this.handleError({ code: 110, message: 'User denied the request for Geolocation.' })
      break
    case error.POSITION_UNAVAILABLE:
      this.handleError({ code: 112, message: 'Location information is unavailable.' })
      break
    case error.TIMEOUT:
      this.handleError({ code: 113, message: 'The request to get user location timed out.' })
      break
    case error.UNKNOWN_ERROR:
      this.handleError({ code: 999, message: 'An unknown error occurred.' })
      break
    default:
      break
    }
  },

  loadLocation(latitude, longitude) {
    const apiUrl = `${GEOCODE_API_URL}?key=${GEOCODE_API_KEY}&lat=${latitude}&lon=${longitude}&format=${GEOCODE_API_RETURN_FORMAT}`
    return this.makeApiGetCall(apiUrl)
  },

  loadWeatherByCityname(cityName, countryCode) {
    const apiUrl = `${WEATHER_API_URL}?q=${cityName},${countryCode}&units=metric&APPID=${WEATHER_API_KEY}`
    return this.makeApiGetCall(apiUrl)
  },

  loadWeatherByCoordinates(latitude, longitude) {
    const apiUrl = `${WEATHER_API_URL}?lat=${latitude}&lon=${longitude}&units=metric&APPID=${WEATHER_API_KEY}`
    return this.makeApiGetCall(apiUrl)
  },

}


export default api
