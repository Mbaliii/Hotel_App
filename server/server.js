const express = require("express");
const app = express();
const cors = require("cors")

const dbConfig = require('./db');
const roomsRoute = require('./routes/roomRoute');
const usersRoute = require('./routes/usersRoute');
const bookingRoute = require('./routes/bookingsRoute');

app.use(express.json());
app.use(cors())
app.use('/api/rooms', roomsRoute);
app.use('/api/users', usersRoute);
app.use('/api/bookings', bookingRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`We are within`));