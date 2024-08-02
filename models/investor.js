const mongoose = require('mongoose')

const investorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    investingToCompany: {
        type: String,
        required: true
    },

    investingDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Investor', investorSchema)