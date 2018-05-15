'use strict';

const request = require('request');

const googleMapsApiUrl = 'https://maps.googleapis.com/maps/api/geocode';
const apiKey = process.env.googleMapsApiKey;
const returnFormat = 'json';


module.exports = {

  geoCode(address) {

    return new Promise((resolve, reject) => {

      request({
        url: `${googleMapsApiUrl}/${returnFormat}?address=${latitude},${longitude}&key=${apiKey}`,
        json: true
      }, (error, response, body) => {

        if (!error && response.statusCode === 200) {
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
        url: `${googleMapsApiUrl}/${returnFormat}?address=${latitude},${longitude}&key=${apiKey}`,
        json: true
      }, (error, response, body) => {

        if (!error && response.statusCode === 200) {
          resolve(body);
        } else {
          reject('Unable to fetch location information from Google Maps API!');
        }

      });

    });

  }

};