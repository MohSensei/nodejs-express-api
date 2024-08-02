const express = require('express')
const router = express.Router()
const Investor = require('../models/investor')

// Getting all
router.get('/', async (req, res) => {
    try {
        const investors = await Investor.find()
        res.json(investors)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})
// Getting one
router.get('/:id', getInvestor, (req, res) => {
    res.json(res.investor)
})
// Creating one
router.post('/', async (req, res) => {
    const investor = new Investor({
        name:req.body.name,
        investingToCompany:
        req.body.investingToCompany
    })

    try {
        newInvestor = await investor.save();
        res.status(201).json(newInvestor);
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})
// Updating one
router.patch('/:id', getInvestor, async (req, res) => {
    if (req.body.name != null) {
        res.investor.name = req.body.name
    }
    if (req.body.investingToCompany != null) {
        res.investor.investingToCompany = req.body.investingToCompany
    }
    try {
        const updateInvestor = await res.investor.save()
        res.json(updateInvestor)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})
// Deleting one
router.delete('/:id', getInvestor, async (req, res) => {
    try {
        await res.investor.deleteOne()
        res.json({message: 'Deleted Investor'})  
    }   catch (err) {
        res.status(500).json({message: err.message})
    }
})

//deleteOne()

async function getInvestor(req, res, next) {
    let investor;
    try {
        investor = await Investor.findById(req.params.id); 
        if (investor == null) {
            return res.status(404).json({ message: 'Cannot find Investor' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.investor = investor
    next()
}

module.exports = router