'use strict';

const request = require('request');

const weatherApiUrl = 'https://api.darksky.net/forecast';
const weatherApiKey = process.env.weatherApiKey;
const apiUnits = process.env.weatherApiUnit || 'si';
const apiLang = process.env.weatherApiLang || 'pt';

module.exports = {

  fetchForecast(latitude, longitude, addressName) {

    return new Promise((resolve, reject) => {

      request({
        url: `${weatherApiUrl}/${weatherApiKey}/${latitude},${longitude}?exclude=[minutely,flags]&units=${apiUnits}&lang=${apiLang}`,
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

