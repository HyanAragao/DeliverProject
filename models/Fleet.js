const mongoose = require('mongoose');

const Fleet = mongoose.model('Fleet', {
    pilotCertification: Number,
    pilotAge: Number,
    pilotCredits: Number,
    pilotLocation: String,
    shipFuelLevel: Number,
    shipFuelCapacity: Number,
    shipWeightCapacity: Number
});

module.exports = Fleet