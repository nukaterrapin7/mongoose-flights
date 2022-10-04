const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

//All routers start with /flights
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);
router.get('/', flightsCtrl.index);

module.exports = router;