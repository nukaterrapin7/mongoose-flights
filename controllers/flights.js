const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
new: newFlight,
create,
index,
show,
};

function newFlight(req, res) {
    res.render('flights/new', { title: 'New Flight'});
};

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const flight = new Flight(req.body)
    flight.save(function(err) {
        if (err) return res.redirect('/flights/new');
        res.redirect('/flights')
        console.log(flight)
    })
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { title: 'All flights', flights});
    });
};

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('flights/show', { title: 'Flight Details', flight, tickets});
        })
    });
};