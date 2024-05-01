const Event = require ('../models/Events.model')
const router = require('express').Router()


router.get('/', async(req, res) => {
    try{
      const events = await Event.find()
      res.status(200).json(events)
    } catch(error) {
      console.error(error) 
      res.status(500).json(error)
    }
  })
  
  //GET one product
  router.get('/:eventId', async(req, res) => {
    try{
      const event = await Event.findById(req.params.eventId)
      res.status(200).json(event)
    } catch(error) {
      console.error(error) 
      res.status(500).json(error)
    }
  })
  
  //POST
  router.post('/', async(req, res) => {
    try{
      const newEvent = await Event.create(req.body)
      res.status(201).json(newEvent)
    } catch(error) {
      console.error(error) 
      res.status(500).json(error)
    }
  })
  
  //update one book
  router.put('/:eventId', async (req, res) => {
    try{
      const updatedEvent = await Product.findByIdAndUpdate(req.params.eventId, req.body, {
        new : true,
        runValidators: true,
      })
      res.status(200).json({message: 'Event updated successfully', product: updatedEvent})
    } catch(error) {
      console.error(error) 
      res.status(500).json(error)
    }
  
  })
  
  
  //Delete
  router.delete('/:eventId', async (req,res) => {
    try{
      await Event.findByIdAndDelete(req.params.eventId)
      res.status(204).send()
    } catch(error) {
      console.error(error) 
      res.status(500).json(error)
    }
  
  })
  
module.exports = router;
