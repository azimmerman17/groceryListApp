const router = require('express').Router()
const bcrypt = require ('bcrypt')

//connection to models
const db = require('../models/index')
const { User } = db
 
// GET
router.get('/', async (req, res) => {
  const users = await User.findAll()
  res.json(users)

})

// POST
router.post('/', async (req, res) => {
  let { password, ...rest } = req.body

  const user = await User.create({
    ...rest,
    password_digest: await bcrypt.hash(password, 10)
  })
  res.json(user)
})

module.exports = router