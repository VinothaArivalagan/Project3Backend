const User = require('../models/User.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { isAuthenticated } = require('../middleware/authentications')
const router = require('express').Router()

router.get('/', (req, res) => {
  res.json("Welcome to this Page")
})


router.post('/signup', async (req, res) => {
  console.log(req.body)
  const salt = bcrypt.genSaltSync(13)
  const passwordHash = bcrypt.hashSync(req.body.password, salt)
  try {
    const newUser = await User.create({ name: req.body.name, username: req.body.username, password: passwordHash })

    res.status(201).json(newUser)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})

router.post('/login', async (req, res) => {
  console.log(req.body)
  try {
    const potentialUser = await User.findOne({ username: req.body.username})
    if (potentialUser) {
      if (bcrypt.compareSync(req.body.password, potentialUser.password)) {

        const authToken = jwt.sign(
          {
            userId: potentialUser._id,
          },
          process.env.TOKEN_SECRET,
          {
            algorithm: 'HS256',
            expiresIn: '6h',
          }
        )

        res.status(200).json({ token: authToken })
      } else {
        res.status(400).json({ mesage: 'Incorrect password' })
      }
    } else {
      res.status(400).json({ mesage: 'No user with this username' })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ mesage: 'There was a problem' })
  }
})


// Verify
router.get('/verify', isAuthenticated, (req, res) => {
  res.json({ message: 'Hello', data: req.tokenPayload })
})

module.exports = router;