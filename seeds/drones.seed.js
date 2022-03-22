// Iteration #1
require('../db');
const Drones = require('../models/Drone.model');
const mongoose = require('mongoose')

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/lab-express-drones'

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
]

async function connectToDB() {
  try {
    await mongoose.connect(MONGO_URI)
    console.log(`Connected to Mongo!`)
  }
  catch(err) {
    console.log('Failed to connect to mongo', err)
    throw err
  }
}

async function seedDrones() {
    try {
      await connectToDB()
      await Drones.deleteMany()
      await Drones.insertMany(drones)
      await mongoose.connection.close()
    }
    catch(error) {
      console.log(error)
    }
}
  
seedDrones()