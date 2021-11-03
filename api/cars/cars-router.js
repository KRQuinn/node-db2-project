// DO YOUR MAGIC


const router = require('express').Router()

const Cars = require('./cars-model.js')

const {
    checkCarId,
    checkCarPayload,
    checkVinNumberUnique,
    checkVinNumberValid,
} = require('./cars-middleware')

router.get('/', (req, res, next) => {
    Cars.getAll()
        .then((car) => {
            res.status(200).json(car)
        })
        .catch((err) => {
            next(err)
        })
})

router.get('/:id', checkCarId, (req, res) => {
    res.json(req.car)
})

router.post(
    '/',
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique,
    async (req, res, next) => {
      try {
        const car = await Cars.create(req.body)
        res.status(201).json(car)
      } catch (err) {
        next(err)
      }
    },
  )
  module.exports = router