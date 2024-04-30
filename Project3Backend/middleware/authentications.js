const jwt = require('jsonwebtoken')
const User = require('../models/User.model')

const isAuthenticated = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1] 
    const payload = jwt.verify(token, process.env.TOKEN_SECRET) 

    req.tokenPayload = payload 
    next()
  } catch (error) {
  
    res.status(401).json('token not provided or not valid')
  }
}

const isAdmin = async (req, res, next) => {
  const { userId } = req.tokenPayload
  try {
    const user = await User.findById(userId)
    if (user.roles.includes('ADMIN')) {
      next()
    } else {
      res.status(403).json('You shall not pass')
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = { isAuthenticated, isAdmin }
