'use strict';

const request = require('request');

// api address: https://api.darksky.net/forecast/APIKEY/LAT,LONG

const weatherApiKey = process.env.weatherApiKey;
const apiUnits = 'si';
const apiLang = 'pt';


module.exports = {

  fetchForecast(latitude, longitude, addressName) {

    return new Promise((resolve, reject) => {

      request({
        url: `https://api.darksky.net/forecast/${weatherApiKey}/${latitude},${longitude}?units=${apiUnits}&lang=${apiLang}`,
        json: true
      }, (error, response, body) => {

        if (!error && response.statusCode === 200) {
          console.log('resolved darkSky api call');
          resolve({
            addressname: addressName,
            timezone: body.timezone,
            time: body.currently.time,
            summary: body.currently.summary,
            icon: body.currently.icon,
            temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature,
            humidity: body.currently.humidity
          });
        } else {
          reject('Unable to fetch weather from DarkSky API!');
        }

      });

    });

  }

};

