const express = require('express');
const router = express.Router();

const maps = require('../lib/googleMapsApi');
const darksky = require('../lib/darksky');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tiny WeatherApp' });
});


router.get('/forecast', function(req, res, next) {

  let latitude = req.query.lat;
  let longitude = req.query.lgn;

  maps.reverseGeoCode(latitude, longitude).then(mapsData => {

    let addressComponents = mapsData.results[0].address_components;
    let addressName;

    addressComponents.forEach(addressComponent => {

      let addressTypes = addressComponent.types;

      if (addressTypes.find((value) => { return value === 'locality' }))
        addressName = addressComponent.long_name;

    });

    console.log("addressName:",addressName);

    return darksky.fetchForecast(latitude, longitude, addressName);

  }).then(result => {
    res.status(200).json(result);
  }).catch(err => {
    console.log(err);
    res.status(500).send(err);
  });


});


module.exports = router;
