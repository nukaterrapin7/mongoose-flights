const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/flights');

const db = mongoose.connection;

