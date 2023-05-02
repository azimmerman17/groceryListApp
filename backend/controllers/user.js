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
  req.body.grocery_list = food.split(',')
  
  await User.findByIdAndUpdate(id, req.body)
  res.redirect('https://grocery-list-app-psi.vercel.app/user/list')
  
})

module.exports = router