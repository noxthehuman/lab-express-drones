const express = require('express');
const router = express.Router();

// require the Drone model here
const Drones = require('../models/Drone.model')

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const drones = await Drones.find()
    res.render('drones/list', {drones})
  }
  catch(error) {
    (console.log(error))
  }
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    const droneToCreate = req.body
    await Drones.create(droneToCreate)

    // show the result
    res.redirect('/drones')
  }
  catch {
    res.redirect('/drones/create')
  }
});

router.get('/drones/:id/edit', async (req, res, next) => {
  try {
    const drone = await Drones.findById(req.params.id)
  // Iteration #4: Update the drone
  res.render('drones/update-form', {drone})
  }
  catch {
    next()
  }
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    const droneToUpdate = req.body
    await Drones.findByIdAndUpdate(req.params.id, droneToUpdate)

    // show the result
    res.redirect('/drones')
  }
  catch {
    res.redirect(`/drones/${req.params.id}/edit`)
  }
});

router.post('/drones/:id/delete',async (req, res, next) => {
  // Iteration #5: Delete the drone
    try {
    await Drones.findByIdAndDelete(req.params.id)

    // show the result
    res.redirect('/drones')
  }
  catch {
    res.redirect(`/drones/${req.params.id}/edit`)
  }
});

module.exports = router;
