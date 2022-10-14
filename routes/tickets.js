const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../models/ticket');

router.get('/tickets/new', ticketsCtrl.new);

router.post('/tickets', ticketsCtrl.create);

router.post('/flights/:id/tickets', ticketsCtrl.addToFlight);

module.exports = router;