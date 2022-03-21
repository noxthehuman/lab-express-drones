// Iteration #1
require('../db');
const Drones = require('../models/Drone.model');
const mongoose = require('mongoose')

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
]

async function seedDrones() {
    try {
      await Drones.deleteMany()
      await Drones.insertMany(drones)
      await mongoose.connection.close()
    }
    catch(error) {
      console.log(error)
    }
  }
  
  seedDrones()