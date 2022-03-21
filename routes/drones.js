const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model')

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const drones = await Drone.find()
    res.render('drones/list', {drones})
  }
  catch(error) {
    (console.log(error))
  }
});

function DroneFromRequestBody(request) {
  // grab the data from the body
  const { name, propellers, maxSpeed } = request.body
  // build our data to add into our database
  const drone = {
    name,
    propellers,
    maxSpeed
  }
  return drone
}

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const droneToCreate = DroneFromRequestBody(req)
  const createdDrone = await Drone.create(droneToCreate)

  // gather the updated list
  const drones = await Drone.find()

  // show the result
  res.render('route/list', {
    drones,
  })
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
