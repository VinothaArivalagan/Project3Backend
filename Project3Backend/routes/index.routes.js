const router = require('express').Router()

router.get('/', (req, res) => {
  res.json('All good in here')
})

const productRoutes = require('./product.routes')
router.use('/products', productRoutes)

const eventRoutes = require('./event.routes')
router.use('/event', eventRoutes )

const volunteerRoutes = require('./People.routes')
router.use('/volunteer', volunteerRoutes )

module.exports = router;
