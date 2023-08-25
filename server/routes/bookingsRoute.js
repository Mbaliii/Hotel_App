const express = require('express');
const router = express.Router();
const Booking = require("../models/booking");
const moment = require("moment");


router.post("/bookroom", async (req, res) => {
    const { room,
        roomid,
        fromdate,
        todate,
        totalamount,
        totaldays } = req.body

    try {
        const newbooking = await Booking.create({
            room: room,
            roomid,
         fromdate,
         todate,
            totalamount,
            totaldays,
            transactionId: '1234'
        })
        console.log("data created ", newbooking )
        res.send('Room Booked Successfully')
    } catch (error) {
        return res.status(400).json({ error })

    }
});

module.exports = router



