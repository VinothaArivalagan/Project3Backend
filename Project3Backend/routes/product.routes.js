const Product = require ('../models/AllCategories')
const router = require('express').Router()

// router.get('/', (req, res) => {
//   res.json('All good in products')
// })

//GET all products
router.get('/', async(req, res) => {
  try{
    const products = await Product.find()
    res.status(200).json(products)
  } catch(error) {
    console.error(error) 
    res.status(500).json(error)
  }
})

//GET one product
router.get('/:productId', async(req, res) => {
  try{
    const product = await Product.findById(req.params.productId)
    res.status(200).json(product)
  } catch(error) {
    console.error(error) 
    res.status(500).json(error)
  }
})

//POST
router.post('/', async(req, res) => {
  try{
    const newProduct = await Product.create(req.body)
    res.status(201).json(newProduct)
  } catch(error) {
    console.error(error) 
    res.status(500).json(error)
  }
})

//update one book
router.put('/:productId', async (req,res) => {
  try{
    const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
      new : true,
      runValidators: true,
    })
    res.status(200).json({message: 'Product updated successfully', product: updatesProduct})
  } catch(error) {
    console.error(error) 
    res.status(500).json(error)
  }

})


//Delete
router.delete('/:productId', async (req,res) => {
  try{
    await Product.findByIdAndDelete(req.params.productId)
    res.status(204).send()
  } catch(error) {
    console.error(error) 
    res.status(500).json(error)
  }

})


module.exports = router;