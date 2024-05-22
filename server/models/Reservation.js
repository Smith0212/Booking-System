const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    trainNumber: { type: String, required: true },
    classType: { type: String, required: true },
    dateOfJourney: { type: String, required: true },
    fromPlace: { type: String, required: true },
    toPlace: { type: String, required: true },
    pnrNumber: { type: String, unique: true, required: true },
});

module.exports = mongoose.model('Reservation', ReservationSchema);
