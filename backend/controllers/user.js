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

// PUT - update users List
router.put('/:id/food', async (req, res) => {
  const { id } = req.params
  const { food } = req.query
  console.log(food)

  req.body.grocery_list = food.split(',')
  console.log(req.body.grocery_list)
  
  await User.findByIdAndUpdate(id, req.body)
  res.redirect('http://localhost:3000/user/list')
  
})

module.exports = router