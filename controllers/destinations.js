const Flight = require('../models/flight');
const flights = require('./flights');

module.exports = {
    create
};

function create(req, res) {
    flights.findById(req.params.id, function(err, flight) {
        flight.destinations.push(req.body)
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`)
        })
    })
};