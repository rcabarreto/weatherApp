import axios from 'axios'

const $ = require('jquery');

const LOCATIONIQ_API_URL = 'https://us1.locationiq.com/v1/reverse.php';
const LOCATIONIQ_API_KEY = process.env.LOCATIONIQ_API_KEY || 'XXXXXX';
const LOCATIONIQ_API_RETURN_FORMAT = process.env.LOCATIONIQ_API_RETURN_FORMAT || 'json';

const api = {

  loadWeatherInfo(latitude, longitude) {
    return new Promise((resolve, reject) => {
      let apiUrl = `${LOCATIONIQ_API_URL}?key=${LOCATIONIQ_API_KEY}&lat=${latitude}&lon=${longitude}&format=${LOCATIONIQ_API_RETURN_FORMAT}`;

      console.log(apiUrl);

      axios.get(apiUrl).then(response => {
        resolve(response.data);
      }).catch(error => {
        reject(error);
      });
    });
  },


  saveUserData(userResponse) {
    localStorage.setItem('ContabilityUserToken', userResponse.headers.auth);
    return userResponse;
  },


  deleteUserData() {
    sessionStorage.removeItem('ContabilityUserToken');
    localStorage.removeItem('ContabilityUserToken');
    return true;
  }

};


export default api
