'use strict';

const request = require('request');

const WEATHER_API_URL = 'https://api.darksky.net/forecast';
const WEATHER_API_KEY = process.env.WEATHER_API_KEY || 'XXXXXX';
const WEATHER_API_UNIT = process.env.WEATHER_API_UNIT || 'si';
const WEATHER_API_LANG = process.env.WEATHER_API_LANG || 'pt';

module.exports = {

  fetchForecast(latitude, longitude, addressName) {

    return new Promise((resolve, reject) => {

      request({
        url: `${WEATHER_API_URL}/${WEATHER_API_KEY}/${latitude},${longitude}?exclude=[minutely,flags]&units=${WEATHER_API_UNIT}&lang=${WEATHER_API_LANG}`,
        json: true
      }, (error, response, body) => {

        if (!error && response.statusCode === 200) {
          body.cityName = addressName;
          resolve(body);
        } else {
          reject('Unable to fetch weather from DarkSky API!');
        }

      });

    });

  }

};

