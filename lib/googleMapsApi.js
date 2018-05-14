'use strict';

const request = require('request');


const apiKey = process.env.googleMapsApiKey;


module.exports = {
  geoCode(address) {

    // example url - YOUR_API_KEY: AIzaSyBfLmc9djLqlHPJWzXgiAQN4IVMmcZp8CQ
    // https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY


    return new Promise((resolve, reject) => {

      request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${latitude},${longitude}&key=${apiKey}`,
        json: true
      }, (error, response, body) => {

        if (!error && response.statusCode === 200) {
          console.log('resolved google maps api call');
          resolve(body);
        } else {
          reject('Unable to fetch location information from Google Maps API!');
        }

      });

    });


  },

  reverseGeoCode(latitude, longitude) {

    return new Promise((resolve, reject) => {

      request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`,
        json: true
      }, (error, response, body) => {

        if (!error && response.statusCode === 200) {
          console.log('resolved google maps api call');
          resolve(body);
        } else {
          reject('Unable to fetch location information from Google Maps API!');
        }

      });

    });

  }
};