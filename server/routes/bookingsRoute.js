const express = require('express');
const router = express.Router();
const Booking = require("../models/booking");
const Room = require("../models/room");
const moment = require("moment");

// New Booking
router.post("/bookroom", async (req, res) => {
    const {
        room,
        roomid,
        fromdate,
        todate,
        userid,
        totalamount,
        totaldays
    } = req.body;

    try {
        const newBooking = await Booking.create({
            room: room,
            roomid: roomid, // Add the missing ':'
            fromdate: fromdate,
            todate: todate,
            userid: userid,
            totalamount: totalamount,
            totaldays: totaldays,
            transactionId: '1234'
        });
        console.log("Data created: ", newBooking);
        res.send('Room Booked Successfully');
    } catch (error) {
        return res.status(400).json({ error });
    }
});

// User ID
router.post('/getbookingsbyuserid', async (req, res) => {
    const userid = req.body.userid;
    console.log("We reached the backend ");

    console.log(userid);
    try {
        const bookings = await Booking.find({ userid });
        res.send(bookings);
        console.log(bookings);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

// Cancel booking
router.post("/cancelbooking", async (req, res) => {
    const { bookingid, roomid } = req.body;

    try {
        const bookingitem = await Booking.findOne({ _id: bookingid });
        bookingitem.status = 'cancelled';
        await bookingitem.save();

        const room = await Room.findOne({ _id: roomid });
        const bookings = room.currentbookings;
        const temp = bookings.filter(booking => bookingid.toString() !== booking._id.toString());
        room.currentbookings = temp;
        await room.save();

        res.send('Your booking is cancelled successfully');
    } catch (error) {
        return res.status(400).json({ error });
    }
});

// admin panel bookings route 
router.get("/getallbookings", async (req, res) => {

    try {
        const bookings = await Booking.find()
        res.send(bookings)
    } catch (error) {
        return res.status(400).json({ error })
    }

});

// rooms panel
router.get("/getallrooms", async (req, res) => {

    try {
        const bookings = await Booking.find()
        res.send(bookings)
    } catch (error) {
        return res.status(400).json({ error })
    }

});


module.exports = router;




