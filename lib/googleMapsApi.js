'use strict';

const request = require('request');

const MAPS_API_URL = 'https://maps.googleapis.com/maps/api/geocode';
const MAPS_API_KEY = process.env.MAPS_API_KEY || 'XXXXXX';
const MAPS_API_RETURN_FORMAT = process.env.MAPS_API_RETURN_FORMAT || 'json';


module.exports = {

  geoCode(address) {
    return new Promise((resolve, reject) => {
      request({
        url: `${MAPS_API_URL}/${returnFormat}?address=${address}&key=${apiKey}`,
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
        url: `${MAPS_API_URL}/${MAPS_API_RETURN_FORMAT}?address=${latitude},${longitude}&key=${MAPS_API_KEY}`,
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