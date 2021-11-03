const express = require("express")

const carsRouter = require('./cars/cars-router.js')

const server = express()

// DO YOUR MAGIC

server.use(express.json())

server.use('/api/cars', carsRouter)

server.use('*', (req, res) => {
    res.status(404).json({
        message: 'not found',
    })
})

// eslint-disable-next-line
server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack,
    })
})


module.exports = server