const express = require('express')
const router = express.Router()
const Investor = require('../models/investor')
const investor = require('../models/investor')

// Getting all
router.get('/', async (req, res) => {
    try {
        const investors = await investor.find()
        res.json(investors)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})
// Getting one
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})
// Creating one
router.post('/', async (req, res) => {
    const investor = new Investor({
        name: req.body.name,
        investingToCompany:
        req.body.investingToCompany
    })

    try {
        newInvestor = await investor.save()
        res.status(201).json(newInvestor)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})
// Updating one
router.patch('/', (req, res) => {

})
// Deleting one
router.delete('/:id', (req, res) => {

})

module.exports = router