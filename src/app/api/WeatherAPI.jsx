import axios from 'axios'

const GEOCODE_API_URL = 'https://us1.locationiq.com/v1/reverse.php';
const GEOCODE_API_KEY = process.env.GEOCODE_API_KEY || 'XXXXXX';
const GEOCODE_API_RETURN_FORMAT = process.env.GEOCODE_API_RETURN_FORMAT || 'json';

const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/find';
const WEATHER_API_KEY = process.env.WEATHER_API_KEY || 'XXXXXX';

const api = {

  loadLocationInfo(latitude, longitude) {
    let apiUrl = `${GEOCODE_API_URL}?key=${GEOCODE_API_KEY}&lat=${latitude}&lon=${longitude}&format=${GEOCODE_API_RETURN_FORMAT}`;

    return new Promise((resolve, reject) => {
      axios.get(apiUrl).then(response => {
        resolve(response.data);
      }).catch(error => {
        reject(error);
      });
    });
  },


  loadWeatherByCityname(cityName, countryCode) {
    const apiUrl = `${WEATHER_API_URL}?q=${cityName},${countryCode}&units=metric&APPID=${WEATHER_API_KEY}`

    return new Promise((resolve, reject) => {
      axios.get(apiUrl).then(response => {
        resolve(response.data);
      }).catch(error => {
        reject(error);
      });
    });
  },

  loadWeatherByCoordinates(latitude, longitude) {
    const apiUrl = `${WEATHER_API_URL}?lat=${latitude}&lon=${longitude}&units=metric&APPID=${WEATHER_API_KEY}`

    return new Promise((resolve, reject) => {
      axios.get(apiUrl).then(response => {
        resolve(response.data);
      }).catch(error => {
        reject(error);
      });
    });
  },

};


export default api
