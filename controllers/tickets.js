const Ticket = require('../models/ticket');

module.exports = {
    addToTicket
};

function addToTicket(req, res) {
    console.log(req.body)
    req.body.flight = req.params.id
    const ticket = new Ticket(req.body)
    ticket.save(function(err, ticket) {
        console.log(ticket)    
        res.redirect(`/flights/${req.params.id}`)
    })
};