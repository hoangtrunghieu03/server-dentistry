const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const Appointment = new Schema(
    {
        id_user: { type: String , required: true},
        date: { type: String, required: true},
        content: { type: String, required: true },
        service: {type: String, required: true}
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Appointment', Appointment);
