const request = require('request');

const LOCATIONIQ_API_URL = 'https://us1.locationiq.com/v1/reverse.php';
const LOCATIONIQ_API_KEY = process.env.LOCATIONIQ_API_KEY || 'XXXXXX';
const LOCATIONIQ_API_RETURN_FORMAT = process.env.LOCATIONIQ_API_RETURN_FORMAT || 'json';


https://us1.locationiq.com/v1/reverse.php?key=YOUR_PRIVATE_TOKEN&lat=LATITUDE&lon=LONGITUDE&format=json



module.exports = {

  reverseGeoCode(latitude, longitude) {
    return new Promise((resolve, reject) => {
      request({
        url: `${LOCATIONIQ_API_URL}?key=${LOCATIONIQ_API_KEY}&lat=${latitude}&lon=${longitude}&format=${LOCATIONIQ_API_RETURN_FORMAT}`,
        json: true
      }, (error, response, body) => {

        if (!error && response.statusCode === 200) {
          resolve(body);
        } else {
          reject(new Error('Unable to fetch location information from Google Maps API!'));
        }

      });
    });
  }

};