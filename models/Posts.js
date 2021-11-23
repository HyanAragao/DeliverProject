const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    pilotCertification: {type: Number, required: true},
    pilotAge: {type: Number, required: true},
    pilotCredits: {type: Number, required: true},
    pilotLocation: {type: String, required: true},
    shipFuelLevel: {type: Number, required: true},
    shipFuelCapacity: {type: Number, required: true},
    shipWeightCapacity: {type: Number, required: true}
});

module.exports = mongoose.model('Posts', PostSchema)