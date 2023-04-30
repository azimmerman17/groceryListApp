const router = require('express').Router()
const db = require('../models/index')
const { Food } = db


router.get('/', async (req, res) => {
 const food = await Food.find()
 if (food){
  res.json(food)
 }
 else{res.json([])}
})

router.get('/:id', async (req, res) => {
    const {id} = req.params
    const food = await Food.findById(id)
    if (food){
     res.json(food)
    }
    else{res.json([])}
   })

router.post('/', async (req, res) => {
    await Food.create(req.body)
    res.json(req.body)
})

// route for seeding the db with food items
router.post('/seed', async (rec, res) => {
    await Food.insertMany(foodSeedData)
})

router.put('/:id', async (req, res) => {
    const {id} = req.params
    await Food.findbyIdAndUpdate(id, req.body)
    res.json(req.body)
})

router.delete('/:id', async (req, res) => {
    const {id} = req.params
    await Food.findByIdAndDelete(id)
    res.sendStatus(204)
})

module.exports = router