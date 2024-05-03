const Volunteer = require('../models/Volunteers.model')

const router = require('express').Router()


//ALL
router.get('/', async(req, res) => {
  try{
    const volunteers = await Volunteer.find()
    console.log(volunteers)
    res.status(200).json(volunteers)
  } catch(error) {
    console.error(error) 
    res.status(500).json(error)
  }
})

//GET one 
router.get('/:volunteerId', async(req, res) => {
  try{
    const volunteer = await Volunteer.findById(req.params.volunteerId)
    res.status(200).json(volunteer)
  } catch(error) {
    console.error(error) 
    res.status(500).json(error)
  }
})

//POST
router.post('/', async(req, res) => {
  try{
    const newVolunteer = await Volunteer.create(req.body)
    res.status(201).json(newVolunteer)
  } catch(error) {
    console.error(error) 
    res.status(500).json(error)
  }
})

//update one 
router.put('/:volunteerId', async (req, res) => {
  try{
    const updatedVolunteer = await Volunteer.findByIdAndUpdate(req.params.volunteerId, req.body, {
      new : true,
      runValidators: true,
    })
    res.status(200).json({message: 'updated successfully', product: updatedVolunteer})
  } catch(error) {
    console.error(error) 
    res.status(500).json(error)
  }

})


//Delete
router.delete('/:volunteerId', async (req,res) => {
  try{
    await Product.findByIdAndDelete(req.params.volunteerId)
    res.status(204).send()
  } catch(error) {
    console.error(error) 
    res.status(500).json(error)
  }

})


module.exports = router;
