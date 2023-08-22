const mongoose = require('mongoose');


var mongoURL = 'mongodb+srv://mbali:MBALENHLEKHUMALO@cluster0.muawygv.mongodb.net/booking-app';
mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser: true})

var connection = mongoose.connection

connection.on('error', ()=> {
    console.log('Mongodb connection failed');
})

connection.on('connected', ()=> {
    console.log('We are within')
})

module.exports = mongoose;