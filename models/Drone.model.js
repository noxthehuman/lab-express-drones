// Iteration #1
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DronesSchema = new Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number
})

const Drones = mongoose.model('Drones', DronesSchema);

module.exports = Drones;