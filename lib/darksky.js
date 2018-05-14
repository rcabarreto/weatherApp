'use strict';

const request = require('request');

// api address: https://api.darksky.net/forecast/APIKEY/LAT,LONG

module.exports = {

  fetchForecast(latitude, longitude) {

    return new Promise((resolve, reject) => {

      let weatherApiKey = process.env.weatherApiKey;
      let apiUnits = 'si';
      let apiLang = 'pt';

      request({
        url: `https://api.darksky.net/forecast/${weatherApiKey}/${latitude},${longitude}?units=${apiUnits}&lang=${apiLang}`,
        json: true
      }, (error, response, body) => {

        if (!error && response.statusCode === 200) {
          resolve({
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

