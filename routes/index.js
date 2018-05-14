const express = require('express');
const router = express.Router();

const darksky = require('../lib/darksky');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WeatherApp' });
});



router.get('/forecast', function(req, res, next) {

  let latitude = req.query.lat;
  let longitude = req.query.lgn;

  darksky.fetchForecast(latitude, longitude).then(result => {
    res.status(200).json(result);
  }, error => {
    res.status(500).send(error);
  });

});



module.exports = router;
