const express = require('express');
const router = express.Router();
const Booking = require("../models/booking");
const moment = require("moment");


router.post("/bookroom", async (req, res) => {
    const { room,
        userid,
        fromdate,
        todate,
        totalamount,
        totaldays } = req.body

    try {
        const newbooking = await Booking.create({
            room: room.name,
            userid,
            fromdate,
            todate,
            totalamount,
            totaldays,
            transactionId: '1234'
        })
        const booking = await newbooking.save()
        res.send('Room Booked Successfully')
    } catch (error) {
        return res.status(400).json({ error })

    }
});

module.exports = router