const express = require('express');
const Reservation = require('../models/Reservation');
const authMW = require('../middleware/auth');

const router = express.Router();

//Get all reservations
router.get('/', authMW, async (req, res) => {
    try {
        const reservations = await Reservation.find({ userId: req.body.userId });
        res.json(reservations);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


//Create a new reservation
router.post('/', authMW, async (req, res) => {
    const { userId, trainNumber, classType, dateOfJourney, fromPlace, toPlace } = req.body;
    console.log(userId);
    const pnrNumber = `PNR${userId}${trainNumber}${Date.now()}`;
    try {
        const reservation = new Reservation({
            userId,
            trainNumber,
            classType,
            dateOfJourney,
            fromPlace,
            toPlace,
            pnrNumber,
        });
        await reservation.save();
        res.status(201).json(reservation);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

//Cancel a reservation
router.delete('/:pnrNumber', async (req, res) => {
    const { pnrNumber } = req.params;
    try {
        const reservation = await Reservation.findOneAndDelete({ pnrNumber });
        if (!reservation) throw new Error('Reservation not found');
        res.json({ message: 'Reservation cancelled' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


module.exports = router;
