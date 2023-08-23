const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    room: {
        type: String
    },
    roomid: {
        type: String,
        
    },
    userid: {
        type: String,
        
    },
    fromdate:{
        type: String, 
        required: true
    },
    todate:{
        type: String,
        required: true
    },
    totalamount: {
        type: String,
        required: true
    },
    totaldays:{
        type: Number,
        required: true
    },
    transactionId:{
        type: String,
        
    },
    status :{
        type: String,
        required: true,
        default: 'booked'
    }
}, {
    timestamps: true,
})

const bookingmodel = mongoose.model('bookings', bookingSchema);

module.exports = bookingmodel