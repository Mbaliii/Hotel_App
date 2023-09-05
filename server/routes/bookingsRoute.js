// const express = require('express');
// const router = express.Router();
// const Booking = require("../models/booking");
// const { v4: uuidv4 } = require('uuid');
// const stripe = require('stripe')('sk_test_51Njyk5HKnXpjE4tLU7HsjVS74sEvs3vNeBuOIJfwHE49iuWnMqq35ayugyJ3VSSle6zPsL4sdpOkpgcNVuoN37BV00bxHONFoc')
// const moment = require("moment");


// router.post("/bookroom", async (req, res) => {
//     const { room,
//         roomid,
//         fromdate,
//         todate,
//         totalamount,
//         totaldays,
//         token } = req.body

//     try {
//         const customer = await stripe.customer.create({
//             email: token.email,
//             source: token.id
//         })

//         const payment = await stripe.charges.create(
//             {
//                 amount: totalamount * 100,
//                 customer: customer.id,
//                 currency: 'inr',
//                 receipt_email: token.email
//             }, {
//             idempotencyKey: uuidv4
//         }
//         )
//         if (payment) {

//             try {
//                 const newbooking = await Booking.create({
//                     room: room,
//                     roomid,
//                     fromdate,
//                     todate,
//                     totalamount,
//                     totaldays,
//                     transactionId: '1234'
//                 })
//                 console.log("data created ", newbooking)
//                 res.send('Room Booked Successfully')
//             } catch (error) {
//                 return res.status(400).json({ error })

//             }

//         }

//         res.send('Payment Sucessfull, Your room is booked')
//     } catch (error) {
//         return res.status(400).json({ error });
//     }

// });

// module.exports = router



const express = require('express');
const router = express.Router();
const Booking = require("../models/booking");
const { v4: uuidv4 } = require('uuid');
const stripe = require('stripe')('sk_test_51Njyk5HKnXpjE4tLU7HsjVS74sEvs3vNeBuOIJfwHE49iuWnMqq35ayugyJ3VSSle6zPsL4sdpOkpgcNVuoN37BV00bxHONFoc');
const moment = require("moment");

router.post("/bookroom", async (req, res) => {
    const {
        room,
        roomid,
        fromdate,
        todate,
        totalamount,
        totaldays,
        token
    } = req.body;

    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        });

        const payment = await stripe.charges.create(
            {
                amount: totalamount * 100,
                customer: customer.id,
                currency: 'inr',
                receipt_email: token.email
            },
            {
                idempotencyKey: uuidv4()
            }
        );

        if (payment) {
            const newbooking = await Booking.create({
                room: room,
                roomid: roomid,
                fromdate: fromdate,
                todate: todate,
                totalamount: totalamount,
                totaldays: totaldays,
                transactionId: payment.id // Use the actual payment ID here
            });
        }

        res.send('Payment Successful, Your room is booked');
    } catch (error) {
        return res.status(400).json({ error });
    }
});

module.exports = router;
