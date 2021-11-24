const router = require('express').Router()

const res = require('express/lib/response');
const Fleet = require('../models/Fleet')

router.post('/', async (req, res) => {
    const { pilotCertification,
            pilotAge,
            pilotCredits,
            pilotLocation,
            shipFuelLevel,
            shipFuelCapacity,
            shipWeightCapacity } = req.body;
    
    if (!pilotCertification) { 
        res.status(422).json({ error: 'This information is required'})
        return
    }
    
    const fleet = {
        pilotCertification,
        pilotAge,
        pilotCredits,
        pilotLocation,
        shipFuelLevel,
        shipFuelCapacity,
        shipWeightCapacity,
    }

    try {
        await Fleet.create(fleet)
        res.status(201).json({message: 'New fleet created'})
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

router.get('/', async (req, res) => {
    try {
        const squadron = await Fleet.find()
        res.status(200).json(squadron)
    } catch (error) {
        res.status(500).json({ error: error})
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const fleet = await Fleet.findOne({ _id: id })
    if (!fleet) { 
        res.status(422).json({ error: 'Not found'})
        return
        }
        res.status(200).json(fleet)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

router.patch('/:id', async (req, res) => {
    const id = req.params.id

    const { pilotCertification,
        pilotAge,
        pilotCredits,
        pilotLocation,
        shipFuelLevel,
        shipFuelCapacity,
        shipWeightCapacity } = req.body;

        const fleet = {
            pilotCertification,
            pilotAge,
            pilotCredits,
            pilotLocation,
            shipFuelLevel,
            shipFuelCapacity,
            shipWeightCapacity,
        }
    
    try {
        const updatedFleet = await Fleet.updateOne({ _id: id }, fleet)

        if (!updatedFleet.matchedCount === 0) { 
            res.status(422).json({ error: 'Not found'})
            return
        }

        res.status(200).json(fleet)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    const fleet = await Fleet.findOne({ _id: id })

    if (!fleet) { 
        res.status(422).json({ error: 'Not found'})
        return
    }

    try {
        await Fleet.deleteOne({ _id: id })
        res.status(200).json({message: 'Fleet removed'})
    } catch (error) {
        res.status(500).json({ error: error })
    }
})


module.exports = router