const Product = require ('../models/AllCategories')
const router = require('express').Router()
const multer = require('multer'); // Import multer for handling file uploads
const upload = multer({ dest: 'uploads/' });
const uploader = require('../middleware/cloudinary.config');




//GET all products
router.get('/', async(req, res) => {
  try{
    const products = await Product.find()
    console.log(products)
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
router.post('/', uploader.single('image'), async(req, res) => {
  console.log(req.body)
  
  try{
    console.log('file is: ', req.file.path);
    if (!req.file) {
      console.log("there was an error uploading the file");
      next(new Error('No file uploaded!'));
      return;
    }
    const { name, year, condition, location } = req.body;
    const image = req.file.path;
    const newProduct = new Product({ name, year, condition, image, location });
    await newProduct.save();
    res.status(201).json(newProduct)
    
  } catch(error) {
    console.error(error) 
    res.status(500).json(error)
  }
})

router.put('/:productId', async (req, res) => {
  try{
    const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
      new : true,
      runValidators: true,
    })
    res.status(200).json({message: 'Product updated successfully', product: updatedProduct})
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
