'use strict';

const express = require('express');

const maps = require('../lib/googleMapsApi');
const darksky = require('../lib/darksky');

module.exports = () => {

  let router = express.Router();

  router.get('/forecast', function(req, res, next) {

    let latitude = req.query.lat;
    let longitude = req.query.lgn;

    maps.reverseGeoCode(latitude, longitude).then(mapsData => {

      let addressComponents = mapsData.results[0].address_components;
      let addressName;

      addressComponents.forEach(addressComponent => {
        if (addressComponent.types.find((value) => { return value === 'locality' }))
          addressName = addressComponent.long_name;
      });

      // throw new Error('this is an error');

      return darksky.fetchForecast(latitude, longitude, addressName);

    }).then(result => {
      res.status(200).json(result);
    }).catch(err => {
      console.log(err);
      res.status(500).json({ code: 100, message: err.message });
    });

  });


  return router;

};