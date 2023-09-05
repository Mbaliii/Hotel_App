const express = require('express');
const router = express.Router();
const Booking = require("../models/booking");
const moment = require("moment");


router.post("/bookroom", async (req, res) => {
    const { room,
        roomid,
        fromdate,
        todate,
        userid,
        totalamount,
        totaldays } = req.body

    try {
        const newbooking = await Booking.create({
            room: room,
            roomid,
         fromdate,
         userid,
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
router.post('/getbookingsbyuserid', async (req, res) => {
    const userid = req.body.userid;
    console.log("we reach the back side ")
    
    console.log(userid)
    try {
        const bookings = await Booking.find({ userid }); 
        res.send(bookings);
        console.log(bookings)
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

module.exports = router



